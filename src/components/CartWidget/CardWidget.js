import React from "react";
import { useContext } from "react";
import CartContext from '../../context/CartContext'
const CardWidget = () => {

  const {getQuantity} = useContext(CartContext)

  return (
    
      <button type="button" className="btn btn-outline-dark text-white">
        <img src="/carts.png" height={"35px"} alt="cart" />
        <span className="badge bg-secondary">{ getQuantity()}</span>
      </button>
   
  );
};

export default CardWidget;
