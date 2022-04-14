
import React, { useContext } from "react";
import CartContex from "../../context/CartContext";

function Cart() {
  const { cart, clearCart,removeItem } = useContext(CartContex);
  console.log(cart);
  return (
    <div>
      <p className="display-4">Lista de articulos en carrito</p>
      <button className="btn btn-warning" onClick={()=>{clearCart()}}>Limpiar el Carrito</button>
      <div className="container">
      <div className="'row row-cols-4'">
        {cart.map((prod) => (
          
          <div
            key={prod.id}
            className="card m-1 pt-2"
            style={{ width: "15rem", border: "1px solid #d9f701" }}
          >
            <img
              src={prod.img}
              className="card-img-top"
              style={{ width: "214px", height: "200px" }}
              alt="producto"
            />
            <div className="card-body">
              <p className="card-text">{prod.name}</p>
              <p className="card-text">{prod.description}</p>
              <p className="card-text">Cantidad {prod.quantity}</p>
              <p className="card-text">Precio unitario {prod.price}</p>
              <p className="card-text">Total ${prod.quantity * prod.price}</p>
            </div>
            <button className="btn btn-danger" onClick={()=>removeItem(prod.id)}>eliminar</button>
          </div>
            
            ))}
      </div>

      </div>
    </div>
  );
}

export default Cart;
