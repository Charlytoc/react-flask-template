import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Action } from "history";

export default function GetOrders(){
    
    const{store,actions}= useContext(Context)
    const [models, setModels] = useState([])

   useEffect( ()=>{
        fetchModels()
    },[])

    const fetchModels= ()=>{
        fetch(process.env.BACKEND_URL+"/api/get/model/types")
        .then(response => response.json())
        .then(data => {setModels(data);console.log(data);})

    }

    return<>
    <button onClick={()=>{console.log(models);}}>hola</button>
        <div className="">
            <table className="table">
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Nombre</th>
                        <th>Desde</th>
                        <th> Hasta</th>
                        <th> Categoria</th>
                        <th> Fotografia</th>
                        
                        
                    </tr>
                </thead>
                   
                <tbody >
                {models.map((item)=>{
                    return  <tr>

                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.size_from}</td>
                    <td>{item.size_to}</td>
                    <td>{item.category}</td>
                    <td>{item.photo}</td>
                   </tr>
                })}       
                   
                     
                
            </tbody>
          
            </table>
        </div>
 </>
}