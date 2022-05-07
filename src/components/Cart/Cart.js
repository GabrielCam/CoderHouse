import React, { useContext } from "react";
import CartContex from "../../context/CartContext";
import { Link } from "react-router-dom";
import Formulario from "../Formulario/Formulario";



function Cart() {
  const { cart, clearCart, removeItem, getTotal } = useContext(CartContex);
  
  return (
    <div>
      <div className="container">
        <p className="display-4">Lista de articulos en carrito</p>
        
      <Formulario/>

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
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        style={{ backgroundColor: "#d9f701" }}
        className="btn ms-3"
      >
        Confirma tu compra!
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
    </div>
  );
}

export default Cart;
