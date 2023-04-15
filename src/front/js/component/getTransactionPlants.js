import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Action } from "history";

export default function GetTransactionPlants(){
    
    const{store,actions}= useContext(Context)
    const [transactionPlants, setTransactionPlants] = useState([])

   useEffect( ()=>{
        fetchTransactionPlants()
    },[])

    const fetchTransactionPlants= ()=>{
        fetch(process.env.BACKEND_URL+"/api/get/transaction/plants")
        .then(response => response.json())
        .then(data => {setTransactionPlants(data)})
    }
   
    return<>
        <div className="">
            <table className="table">
                <thead>
                    <tr className=" bg-pink">
                        <th> Descripcion</th>
                        <th> Nombre De La Planta</th>
                        <th>Talla 34 </th>
                        <th>Talla 35 </th>
                        <th>Talla 36 </th>
                        <th>Talla 37 </th>
                        <th>Talla 38 </th>
                        <th>Talla 39 </th>
                        <th>Talla 40 </th>
                        <th>Total De Plantas </th>
                        
                        
                        
                    </tr>
                </thead>
                   
                <tbody >
                {transactionPlants.map((item)=>{
                    const totalPlants = item.size34 + item.size35 + item.size36 + item.size37 + item.size38 + item.size39 + item.size40 ;
                     return  ( <tr key={item.plant.id}>
                        <td>{item.description}</td>
                        <td>{item.plant.name}</td>
                        <td>{item.size34}</td>
                        <td>{item.size35}</td>
                        <td>{item.size36}</td>
                        <td>{item.size37}</td>
                        <td>{item.size38}</td>
                        <td>{item.size39}</td>
                        <td>{item.size40}</td>
                        <td>{totalPlants}</td>
                        
                       </tr>)
                    
                 })}       
          
            </tbody>
            </table>
        </div>
 </>
}