import React, { useContext,useState, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigo from "../../img/rigo-baby.jpg"
import { Action } from "history";

export default function AddMaster(){
    const[master,setMaster]= useState({
        name:"",
        phone: 0,
        alias:""
    })
    const [message,setMessage]= useState(false)
    const{store,actions}= useContext(Context)
    const handleSave=()=>{
        if (!master.name) {
            alert("Por favor, inserte la informacion solicitada");
            return;
          }
        actions.addMaster(master,setMessage);
        setMaster({})

    }
    
    
    return<>
    <div className="simple-form">
    {/* <button onClick={()=>{console.log(master);}}>hola</button> */}
    <h1 className="container  d-flex justify-content-center bold">Agregar Maestro</h1>
        <div className=" label-input-pairs">
            <article>
                <label>Nombre</label>
                <input onChange={(e)=>{setMaster({...master,name:e.target.value})}} value={master.name || ''} />
            </article>
            <article>
                <label>Telefono</label>
                <input onChange={(e)=>{setMaster({...master,phone:e.target.value})}} value={master.phone || ''}/>
            </article>
            <article>
                <label>Alias</label>
                <input onChange={(e)=>{setMaster({...master,alias:e.target.value})}} value ={master.alias || ''}/>
            </article>
        
        <div className="d-flex justify-content-center mt-3" style={{position:"relative"}}>
            <button className=" button-dark" onClick={()=>{handleSave();setMessage(true);setTimeout(()=>{
						setMessage(false)
					},4000)}}>Guardar</button>
            {message && <div className="popover">Maestro agregado exitosamente</div>}
        </div>
        

    
    
        </div>
    </div>
       
   
    </>
}