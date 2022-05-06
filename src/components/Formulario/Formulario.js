import React, {useState,useEffect} from "react";


const Formulario = ({confirmOrder}) => {
    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [telefono,setTelefono] = useState('')
    const [email,setEmail] = useState('')
    const [emailconfirm,setEmailconfirm] = useState('')
    const [orden,setOrden] = useState({})

    
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={()=>confirmOrder(email,emailconfirm,orden)} type="button" className="btn btn-primary">
                Confirmar
              </button>
              
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Formulario;
