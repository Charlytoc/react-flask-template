import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

export const Navbar = () => {
  const {store,actions}=useContext(Context);

  return (
    <>
      <nav className="navbar">
      <div>
      <Link to= "/"><h1 className="logo">Liz Shoes <i className="fa-brands fa-shopify"></i></h1></Link>
      
     
      </div>
        {store.isAuthenticated ? <AuthWidget /> : <SignupLoginComponent />}
      </nav>
    </>
  );
};


const SignupLoginComponent = () => {
  const {store,actions}=useContext(Context);
  return (
    <>
    {/* <button onClick={()=>{console.log(store.isAuthenticated);}}>kk</button> */}
      <div className="d-flex gap-4">
        <button className="button-light">
          <Link to="/login">Ingresar</Link>
        </button>
        <button className="button-dark">
         <Link to= "/signup">Regístrate</Link>
        </button>
      </div>
    </>
  );
};

const AuthWidget = () => {
  const [showDrop, setShowDrop] = useState(false)
  const {store,actions}=useContext(Context);
  return (
    <>
      <div className="menu-button">
      <i className="fa-solid fa-cart-shopping button-dark me-1"></i>
      <i onClick={()=> setShowDrop(!showDrop)} className="fa-solid fa-bars button-dark"></i>
      {showDrop && <div className="drop-menu">
        <Link to="/admin" onClick={()=>setShowDrop(false)}>Ver panel de administrador</Link>
        <Link to="/catalogue" onClick={()=>setShowDrop(false)}>Ver catálogo</Link>
        <Link to="/" onClick={()=>{actions.logOut()}}>Logout</Link>
      </div>}
      </div>
    </>
  );
};

