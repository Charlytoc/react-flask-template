import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigo from "../../img/rigo-baby.jpg"
import { Action } from "history";

export default function AddModels(){
    const[models,setModels]= useState({})
    const{store,actions}= useContext(Context)
    const[showMessage,setShowMessage]=useState(false)

    const handleSave=()=>{
        if (!models.name) {
            alert("Por favor, inserte la informacion solicitada");
            return;
          }
        actions.addModel(models,setShowMessage);
        setModels({})

    }
  
    
    return<>
    <div className="simple-form">
    <h1 className="bold">Agregar Un Nuevo Modelo</h1>
        <div className="label-input-pairs">
            <article>
                <label>Nombre</label>
                <input onChange={(e)=>{setModels({...models,name:e.target.value})}} value={models.name || ''}/>
            </article>
            <article>
                <label>Talla Desde</label>
                <input onChange={(e)=>{setModels({...models,size_from:e.target.value})}} value={models.size_from || ''}/>
            </article>
            <article>
                <label>Talla Hasta</label>
                <input onChange={(e)=>{setModels({...models,size_to:e.target.value})}} value={models.size_to || ''}/>
            </article>
            <article>
                <label>Categoria</label>
                <input  onChange={(e)=>{setModels({...models,category:e.target.value})}} value={models.category || ''}/>
            </article>
            <article>
                <label>Foto</label>
                <input onChange={(e)=>{setModels({...models,photo:e.target.value})}} value={models.photo || ''}/>
           
            </article>
         
        </div>
            <div className="d-flex justify-content-center container">
                <button onClick={()=>{handleSave()}} className="btn bg-pink">Guardar</button>
            { showMessage && <div className="popover">Tu modelo se agrego exitosamente!</div>}
            </div>
        
            
    </div>
       
            
   
    </>
}