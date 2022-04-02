// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemCount from './components/ItemCount/ItemCount';

// const onAdd=(stock,count)=>{
//   return stock - count
// }

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a BuyZone donde podras encontrar todo lo que quieras!!"}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>404 no found</h1>}/>
          {/* <ItemCount stk={30} initial={1} onAdd={onAdd}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
