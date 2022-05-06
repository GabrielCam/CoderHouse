import React,{ useState,useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext'
import Alert from "../Alert/Alert";

const ItemDetail = (prod) => {
  const [quantity,setQuantity] = useState(0)
  const [show,setShow] = useState(false)
  const {addItem,isInCart} = useContext(CartContext)
  const handleOnAdd=(count)=>{
    
    setQuantity(count)
    setShow(true)
    addItem({...prod},count)
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1
          className="display-5"
            style={{
              textAlign: "center",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            {prod.name}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="product-img">
            <img src={prod.img} alt="producto" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-horizontal bg-light p-3 border rounded">
            <div className="bg-white p-3 ">

            <div className="form-group row">
              <label className="col form-control-label nopaddingtop">
                Precio:
              </label>
              <div className="col">
                <span className="product-form-price">us$ {prod.price}</span>
              </div>
            </div>

            <div className="form-group row">
              <label className="col form-control-label">
                Stock:
              </label>
              <div className="col">
                <span>{prod.stock}</span>
              </div>
            </div>

            <div className="form-group row">
              <label className="col form-control-label">
                Descripcion:
              </label>
              <div className="col description">
                <p>{prod.description}</p>
              </div>
            </div>

            <div className="form-group row">
              <label className="col form-control-label">
                Categoria:
              </label>
              <div className="col">
                <p>{prod.categoryId}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <label htmlFor="clasif">Clasificacion</label>
              </div>
              <div className="col">
              <p className="clasificacion" name='clasif'>
                <input id="radio1" type="radio" name="estrellas" value="5" />
                <label className="lbl" htmlFor="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4" />
                <label className="lbl" htmlFor="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3" />
                <label className="lbl" htmlFor="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2" />
                <label className="lbl" htmlFor="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1" />
                <label className="lbl" htmlFor="radio5">★</label>
              </p>
              </div>
              
              
            </div>
            <div className="form-group row">
              <div className="col">
                {show?<button className="btn btn-primary">Terminar mi compra!</button>:null}
              </div>
              
              <div className="col">
                {!isInCart(prod.id)?<ItemCount onAdd={handleOnAdd}/>:<Link to='/cart' className="btn btn-primary">Ir al carrito</Link>}
              </div>
                <button className="btn btn-primary" onClick={()=>window.alert('hola')}>hola</button>
            </div>
          </div>
        </div>
            </div>
      </div>
    </div>
    
  );
};

export default ItemDetail;
