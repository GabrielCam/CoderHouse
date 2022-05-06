import React, { useContext,useState } from "react";
import CartContex from "../../context/CartContext";
import { Link } from "react-router-dom";
import Formulario from "../Formulario/Formulario";

import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { firestoreDB } from "../../services/firebase";

const confirmOrder = (email,emailconfirm,orden)=>{
  if(email===emailconfirm){
    console.log("la Orden es")
    console.log(orden)
    return orden
}else{
    console.log("ingrese los mismos mail")
}
}

function Cart() {
  const { cart, clearCart, removeItem, getTotal } = useContext(CartContex);
  const [buyer,setBuyer] = useState({})

  const createOrder = () => {
    const objOrder = {
      buyer: {
        name: "Gabriel",
        phone: "123444444",
        email: "gabriel@test.com",
      },
      items: cart,
      total: getTotal(),
    };

    const batch = writeBatch(firestoreDB);
    const outStock = [];
    const ids = cart.map((prod) => prod.id);

    const collectionRef = collection(firestoreDB, "products");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = objOrder.items.find(
            (prod) => prod.id === doc.id
          ).quantity;
          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outStock.push({ id: doc.id, dataDoc });
          }
        });
      })
      .then(() => {
        if (outStock.length === 0) {
          const collectionRef = collection(firestoreDB, "orders");
          addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({
            name: "outOfStockError",
            products: outStock,
          });
        }
      })
      .then(() => {
        batch.commit();
        clearCart();
        window.alert("se genero la orden");
      })
      .catch((error) => {
        if (
          error &&
          error.name === "outOfStockError" &&
          error.products.length > 0
        ) {
          window.alert("No hay stock disponible");
          console.log(error.products);
        } else {
          console.log(error);
        }
      });
  };
  console.log(cart.length);

  return (
    <div>
      <div className="container">
        <p className="display-4">Lista de articulos en carrito</p>
        <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        style={{ backgroundColor: "#d9f701" }}
        className="btn ms-3"
      >
        Confirma tu compra!
      </button>

        {cart.length <= 0 ? (
          <Link to="/" className="btn btn-primary ms-3">
            no hay articulos en el carrito... Ir al Langing Page
          </Link>
        ) : (
          <>
            <button
              className="btn btn-warning"
              onClick={() => {
                clearCart();
              }}
            >
              Limpiar el Carrito
            </button>
            <button
              style={{ backgroundColor: "#d9f701" }}
              className="btn ms-3"
              onClick={createOrder}
            >
              Confirmar tu compra!
            </button>
            <p className="display-4">total:${getTotal()} </p>
          </>
        )}
        <div>
          {cart.map((prod) => (
            <div
              key={prod.id}
              className="row p-3 bg-secondary mb-1 mt-1 text-white"
            >
              <div className="row">
                <img
                  src={prod.img}
                  className="img-fluid"
                  style={{ width: "114px", height: "100px" }}
                  alt="producto"
                />
                <div className="col">Nombre: {prod.name}</div>
                <div className="col">Descripcion: {prod.description}</div>
                <div className="col">Cantidad: {prod.quantity}</div>
                <div className="col">Precio Unitario: {prod.price}</div>
                <div className="col">
                  SubTotal ${prod.quantity * prod.price}
                </div>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => removeItem(prod.id)}
              >
                eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
      <Formulario confirmOrder={confirmOrder}/>
    </div>
  );
}

export default Cart;
