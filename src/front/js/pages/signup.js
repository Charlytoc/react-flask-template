import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
	const { store, actions } = useContext(Context);

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail]= useState("")

    
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const register=(e)=>{
        e.preventDefault()
        console.log("probando");
        fetch('https://3001-charlytoc-reactflasktem-nekozuw7by1.ws-us90.gitpod.io/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "email": "usuario@ejemplo.com",
              "password": password,
            })
          })
          .then(response => {
            // Hacer algo con la respuesta
            console.log(response.json());
          })
          .catch(error => {
            // Manejar el error
          })
    }    


	return (
        <>
		    <form className="login-form d-flex align-items-center flex-direction-column container justify-content-center  w-50">
                <h3 className="d-block p-1">Registrate!</h3>
                <input name="email" placeholder="Ejemplo@gmail.com" type="email" className="w-100 p-2"/>
                
                <div style={{ position: "relative", display: "block"}} className="w-100">
                <input  name="password" placeholder="Ingresa tu contraseña" 
                        type={showPassword ? "text" : "password"} 
                        className="w-100 p-2" 
                        onChange={(e)=> handlePasswordChange(e)}/> 
                <span style={{position: "absolute", top: 0, right: 0, transform: "translate(-30%, 45%)"}} 
                      onClick={()=> setShowPassword(!showPassword)}> 👁</span>
                </div>
                
                {/* <h5>Codigo de invitacion</h5> */}
                <input name="password"placeholder="Ingresa tu codigo de invitacion"  className="w-100 p-2"/>
                <hr/>
                <button className="p-3 w-50 border-0 bg-pink" onClick={(e)=>register(e)} >Ingresar</button>
                <h5><Link to ="/catalogue">Regresa al catalogo!</Link></h5>
                
            </form>
        </>
	);
};
