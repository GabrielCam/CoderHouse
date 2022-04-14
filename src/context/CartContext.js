import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart)

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
       setCart(cart.filter((prod)=>prod.id != id))
  };
  const clearCart=()=>{
      setCart([])
  }
  const isInCart = (prod)=>{
    let res =  cart.find(el => el.id === prod.id);
    if(res){
        return true
    }else{
        return false
    }
    
  }

  return <Context.Provider value={{
      cart,
      addItem,
      clearCart,
      getQuantity,
      removeItem,
      isInCart
  }}>
      {children}
      </Context.Provider>;
};
export default Context