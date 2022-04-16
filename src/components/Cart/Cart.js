
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
      <div className="">
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
              <div className="col">SubTotal ${prod.quantity * prod.price}</div>
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
