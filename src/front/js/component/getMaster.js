import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Action } from "history";

export default function GetMaster(){
    
    const{store,actions}= useContext(Context)
    const [master, setMaster] = useState([])

   useEffect( ()=>{
        fetchMaster()
    },[])

    const fetchMaster= ()=>{
        fetch(process.env.BACKEND_URL+"/api/get/masters")
        .then(response => response.json())
        .then(data =>{setMaster(data)})

    }

    return<>
        <div className="">
            <table className="table">
                <thead>
                    <tr className="bg-pink">
                        <th> Nombre</th>
                        <th>Telefono</th>
                        <th> Alias</th>
                        
                        
                    </tr>
                </thead>
                   
                <tbody >
                {master.map((item,index)=>{
                    return  <tr key={index}>

                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.alias}</td>
                    
                   </tr>
                })}       
                   
                     
                
            </tbody>
          
            </table>
        </div>
 </>
}