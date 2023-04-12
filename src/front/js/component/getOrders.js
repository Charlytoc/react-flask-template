import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Action } from "history";

export default function GetOrders(){
    
    // const [orders, setOrders] = useState(store.orders)
    const{store,actions}= useContext(Context)
    const [selectedRows, setSelectedRows] = useState([])
    const [sortOrder, setSortOrder] = useState("asc"); // or "desc"
    
    
    const handleClickRow = (orderId)=>{
        
        // create a copy of the selectedRows array
        let updateRow = [...selectedRows]
        
        // if the index already exists in the array, remove it
        if(updateRow.includes(orderId)){
            updateRow.splice(updateRow.indexOf(orderId), 1)
        }else{
            // add the index to the array
            updateRow.push(orderId)
        }
        // set the new selectedRows state
        setSelectedRows(updateRow)
        
        // update order status on backend
        const status = updateRow.includes(orderId) ? "Terminado" : "Pendiente";
        actions.updateOrderStatus(orderId, status);
    }
    
    useEffect(() => {
        actions.getOrders()
    }, [])
    
    // useEffect(() => {
    //     actions.getOrders()
    // }, [store.orders])
    


    // THIS WILL FILTER BY NUMERICAL ORDER

    const filterByNumber = (param) => {
        let newOrdersArray = store.orders; // create a copy of the array to avoid modifying the original
        newOrdersArray.sort((a, b) => {
          let result = 0;
          if (sortOrder === "desc") {
            result = Number(b[param]) - Number(a[param]);
          } else {
            result = Number(a[param]) - Number(b[param]);
          }
          return result;
        });
        setSortOrder(sortOrder === "desc" ? "asc" : "desc"); // toggle the sort order
        actions.updateOrders(newOrdersArray);
      };

      // THIS WILL FILTER BY ALPHABETICALO ORDER
      const filterByString = (param) => {
        let newOrdersArray = store.orders; // create a copy of the array to avoid modifying the original
        newOrdersArray.sort((a, b) => {
          let result = 0;
          if (sortOrder === "desc") {
            result =  a[param].localeCompare(b[param]);;
          } else {
            result =  b[param].localeCompare(a[param]);;
          }
          return result;
        });
        setSortOrder(sortOrder === "desc" ? "asc" : "desc"); // toggle the sort order
        actions.updateOrders(newOrdersArray);
      };

      // THIS WILL FILTER BY DATE 
      const filterByDate = (param) => {
        let newOrdersArray = store.orders.slice(); // create a copy of the array to avoid modifying the original
        newOrdersArray.sort((a, b) => {
          let result = 0;
          if (sortOrder === "desc") {
            result = new Date(b[param]) - new Date(a[param]);
          } else {
            result = new Date(a[param]) - new Date(b[param]);
          }
          return result;
        });
        setSortOrder(sortOrder === "desc" ? "asc" : "desc"); // toggle the sort order
        actions.updateOrders(newOrdersArray);
      };

      // THIS WILL FILTER BY PLANT , ACCESING THE OBJECT 
      const filterByPlantOrMaster = (param) => {
        let newOrdersArray = [...store.orders]; // create a copy of the array to avoid modifying the original
        newOrdersArray.sort((a, b) => {
          let result = 0;
          if (sortOrder === "desc") {
            result = b[param].name.localeCompare(a[param].name);
          } else {
            result = a[param].name.localeCompare(b[param].name);
          }
          return result;
        });
        setSortOrder(sortOrder === "desc" ? "asc" : "desc"); // toggle the sort order
        actions.updateOrders(newOrdersArray);
      };
    
    return<>
        <div className="table-responsive responsive-font">
            <button onClick={()=>console.log(store.orders)}> Store Orders</button>
            <table className="table">
                <thead>
                    <tr>
                        <th className="clickeable" onClick={()=>filterByNumber("id")}> ID <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>

                        <th className="clickeable" onClick={()=>filterByString("customer_name")}> Nombre del Cliente <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>

                        <th className="clickeable" onClick={()=>filterByNumber("customer_number")}> Numero de Cliente <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>
                        <th className="clickeable" onClick={()=>filterByPlantOrMaster("plant")}> Tipo de Planta <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>
                        <th className="clickeable" onClick={()=>filterByNumber("plant_size")}> Tamaño de Planta <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>
                        <th className="clickeable" onClick={()=>filterByNumber("price")}> Precio <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>
                        <th className="clickeable" onClick={()=>filterByPlantOrMaster("master")}> Master Asignado <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>
                        <th className="clickeable" onClick={()=> filterByDate("delivery_date")}> Fecha de Entrega <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>

                        <th className="clickeable" onClick={()=>filterByString("status")}> Estado actual <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>

                        <th className="clickeable" > Comentarios Adicionales <span>{sortOrder === "desc" ? "🔽" : "🔼"}</span></th>
                    </tr>
                </thead>
                <tbody>
                    {store.orders.map((order,index)=>{
                        const rowClass = selectedRows.includes(order.id) ? "color-row" : "" ;
                        return(
                        <tr className={rowClass} key={index}>
                            <td> {order.id}</td>
                            <td> {order.customer_name}</td>
                            <td> {order.customer_number}</td>
                            <td> {order.plant.name}</td>
                            <td> {order.plant_size}</td>
                            <td> {order.price}</td>
                            <td> {order.master.name}</td>
                            <td>{new Date(order.delivery_date).toLocaleDateString('es', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                            <td> {order.status} 
                                <input type="checkbox" onClick={()=>handleClickRow(order.id)}/>
                            </td> 
                            <td> {order.description}</td>
                        </tr>)
                        })
                    }  
                </tbody>
            </table>
        </div>
 </>
}