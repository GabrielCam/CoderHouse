import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    const objItemCart = {
      ...product,
      quantity,
    };
    setCart([...cart, objItemCart]);
  };
  const getQuantity = ()=>{
      let count = 0
      cart.forEach(prod =>{
          count = count + prod.quantity
      })
      return count
  }

  const removeItem = (id) => {
       setCart(cart.filter((prod)=>prod.id !== id))
  };
  const clearCart=()=>{
      setCart([])
  }
  const isInCart = (id)=>{
    let res =  cart.filter(el => el.id === id);
    if(res.length===0){
        return false
    }else{
        return true
    }
  }
  const getTotal=()=>{
    let total = 0
    cart.forEach(prod =>{
        total = total + (prod.quantity * prod.price)
    })
    return total
  }

  return <Context.Provider value={{
      cart,
      addItem,
      clearCart,
      getQuantity,
      removeItem,
      isInCart,
      getTotal
  }}>
      {children}
      </Context.Provider>;
};
export default Context