import React, {useState,useEffect,useContext} from "react";
import CartContex from "../../context/CartContext";

import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { firestoreDB } from "../../services/firebase";


const Formulario = () => {
    const { cart, clearCart, getTotal } = useContext(CartContex);

    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [telefono,setTelefono] = useState('')
    const [email,setEmail] = useState('')
    const [emailconfirm,setEmailconfirm] = useState('')
    const [orden,setOrden] = useState({nombre:'',apellido:'',telefono:'',email:''})
    const [orderId,setOrderId] = useState('')

 
    const createOrder = () => {
    
        if(orden.nombre!=='' && orden.apellido !== '' && orden.telefono !== '' && orden.email !== ''){
            if(orden.email === emailconfirm){
                const objOrder = {
                  buyer: {
                    name: orden.nombre,
                    phone: orden.apellido,
                    telefono: orden.telefono,
                    email: orden.email,
                  },
                  items: cart,
                  total: getTotal(),
                };
               
                const batch = writeBatch(firestoreDB);
                const outStock = [];
                const ids = cart.map((prod) => prod.id);
            
                const collectionRef = collection(firestoreDB, "products");
            
                getDocs(query(collectionRef, where(documentId(), "in", ids)))
                  .then((response) => {
                    response.docs.forEach((doc) => {
                      const dataDoc = doc.data();
                      const prodQuantity = objOrder.items.find(
                        (prod) => prod.id === doc.id
                      ).quantity;
                      if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
                      } else {
                        outStock.push({ id: doc.id, dataDoc });
                      }
                    });
                  })
                  .then(() => {
                    if (outStock.length === 0) {
                      const collectionRef = collection(firestoreDB, "orders");
                      addDoc(collectionRef, objOrder)
                      .then((resp) => setOrderId(resp.id))
                      .catch((err) => console.log(err))
                    } else {
                      return Promise.reject({
                        name: "outOfStockError",
                        products: outStock,
                      });
                    }
                  })
                  .then(() => {
                    batch.commit();
                    clearCart();
                  })
                  .catch((error) => {
                    if (
                      error &&
                      error.name === "outOfStockError" &&
                      error.products.length > 0
                    ) {
                      window.alert("No hay stock disponible");
                      console.log(error.products);
                    } else {
                      console.log(error);
                    }
                  });
                }else{
                    window.alert("Email deben coincidir");
                }
        }else{
            window.alert("Complete todos sus datos");
        }
    }
    
    useEffect(()=>{
        setOrden({nombre,apellido,telefono,email})
    },[nombre,apellido,telefono,email,emailconfirm])

    
  return (
    
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Datos Personales
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {orderId===''?
              <>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Nombre
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su nombre"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                  name="nombre"
                  value={nombre}
                  onChange={event => setNombre(event.target.value)}
                  
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Apellido
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su apellido"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  required
                  name="apellido"
                  value={apellido}
                  onChange={event => setApellido(event.target.value)}
                />
              </div>

              <label htmlFor="basic-url" className="form-label">
                Contacto
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                  Telefono
                </span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Ingrese su nro de telefono"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  required
                  name="telefono"
                  value={telefono}
                  onChange={event => setTelefono(event.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                  Email
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingrese su Email"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  required
                  name="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                  Email
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Repita su Email"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  required
                  name="emailConfirm"
                  value={emailconfirm}
                  onChange={event => setEmailconfirm(event.target.value)}
                />
              </div>
              </>
              :<>
              <p className="display-5 text-success"> Gracias por su compra! :)</p>
              <div className="alert alert-success" role="alert">
              Su numero de comprobante es: {orderId}
              </div>
              </>}
              
              
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {orderId===''?<button onClick={()=>createOrder()} type="button" className="btn btn-primary">
                Confirmar
              </button>:null}
              
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Formulario;
