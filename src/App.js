// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

const onAdd=(stock,count)=>{
  return stock - count
}

function App() {
  return (
    <div >
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a BuyZone donde podras encontrar todo lo que quieres"}/>
      <ItemCount stk={30} initial={1} onAdd={onAdd}/>
    </div>
  );
}

export default App;
