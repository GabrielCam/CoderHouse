// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div >
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a BuyZone donde podras encontrar todo lo que quieres"}/>
    </div>
  );
}

export default App;
