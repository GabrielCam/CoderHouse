import React from "react";
import { useContext } from "react";
import CartContext from '../../context/CartContext'
import { Link } from "react-router-dom";
const CardWidget = () => {

  const {getQuantity} = useContext(CartContext)

  return (
    
      <Link to='/cart' type="button" className="btn btn-outline-dark text-white">
        <img src="/carts.png" height={"35px"} alt="cart" />
        <span className="badge bg-secondary">{ getQuantity()}</span>
      </Link>
   
  );
};

export default CardWidget;
