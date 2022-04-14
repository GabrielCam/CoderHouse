// import logo from './logo.svg';
import "./App.css";
import { createContext,useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import {CartContextProvider} from './context/CartContext'
// import ItemCount from './components/ItemCount/ItemCount';

// const onAdd=(stock,count)=>{
//   return stock - count
// }


// export const CartContext = createContext()

function App() {

  const [cart,setCart]=useState([])

  return (
    <div>
      {/* <CartContext.Provider value={{cart,setCart}}> */}
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a BuyZone donde podras encontrar todo lo que quieras!!"}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>404 no found</h1>}/>
          <Route path="/cart" element={<Cart/>}/>
          {/* <ItemCount stk={30} initial={1} onAdd={onAdd}/> */}
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
      {/* </CartContext.Provider> */}
    </div>
  );
}

export default App;
