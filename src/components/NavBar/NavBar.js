import React from "react";
import CartWidget from "../CartWidget/CardWidget";
import { Link , NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img width="100px" src="/logo.png" alt="logo" />
                 </Link>
                    <Link to="/" className="marca">
                        BZone
                    </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{backgroundColor:"#d9f701"}}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item dropdown ">
                            <a
                                className="nav-link dropdown-toggle text-white"
                                href="/#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categorias
                            </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                            <li>
                                <NavLink to='/category/vehiculos' className={({isActive})=>isActive?'dropdown-item active':'dropdown-item'} >
                                    Vehiculos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/category/inmuebles' className={({isActive})=>isActive?'dropdown-item active':'dropdown-item'} >
                                    Inmuebles
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/category/celular' className={({isActive})=>isActive?'dropdown-item active':'dropdown-item'} >
                                    Celulares
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/category/notebooks' className={({isActive})=>isActive?'dropdown-item active':'dropdown-item'} >
                                    Notebooks
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item d-flex justify-content-center">
                        <CartWidget />
                    </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0 ">
                    <li className="nav-item me-lg-3">
                        <a
                            // style={{color:"Background"}}
                            className="nav-link login text-light"
                            href="/#"
                        >
                            <span className="focus">
                                Login
                            </span>
                        </a>
                    </li>
                    <li className="nav-item me-lg-3 ">
                        <a 
                            // style={{color:"Background"}}
                            className="nav-link  register text-light" href="/#">
                            <span className="focus">
                                Register
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
      </div>
    </nav>
  );
};

export default NavBar;
