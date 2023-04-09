import React, { useContext,useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigo from "../../img/rigo-baby.jpg"
import { Action } from "history";

export default function AddOrder(){
    const[order,setOrder]= useState({})
    const[showMessage,setShowMessage]= useState(false)
    const{store,actions}= useContext(Context)
    
   const handleSave=()=>{
    if (!order.name) {
        alert("Por favor, inserte la informacion solicitada");
        return;
      }
    actions.addOrder(order,setShowMessage);
    setOrder({})
   }
    
    return<>
    
        <div className="simple-form">
            <h2 className="bold">Agrega un nuevo pedido</h2>
                <div className="label-input-pairs">
                    <article>
                    <label>Tipo de planta</label>
                    <input  onChange={(e)=>{setOrder({...order,plant_id:1})}} value={order.plant_id || ''}/>
                    </article>
                    <article>
                    <label>Talla</label>
                    <input  onChange={(e)=>{setOrder({...order,size:parseInt(e.target.value)})}} value={order.size || ''}/>
                    </article>
                    <article>
                        <label>Nombre del cliente</label>
                        <input  onChange={(e)=>{setOrder({...order,name:e.target.value})}} value={order.name || ''}/>
                    </article>
                    <article>
                        <label>Teléfono del cliente</label>
                        <input onChange={(e)=>{setOrder({...order,phone:e.target.value})}} value={order.phone || ''}/>
                    </article>
                    <article>
                        <label>Fecha</label>
                        <input  type="date" onChange={(e)=>{setOrder({...order,delivery_date:e.target.value})}} value={order.delivery_date || ''}/>
                    </article>
                    <article>
                        <label>Precio</label>
                        <input placeholder="Precio" onChange={(e)=>{setOrder({...order,price:e.target.value})}} value={order.price || ''}/> 
                    </article>
                </div>
            <button className="button-dark" onClick={()=>{handleSave()}}>Guardar</button>

        <div  style={{position:"relative"}}>
            {showMessage && <div className="popover">Pedido agregado exitosamente! </div>}
        </div>
        </div>

    </>
}