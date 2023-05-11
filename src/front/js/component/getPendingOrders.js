import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export default function GetPendingOrders(){
    
    const {store,actions} = useContext(Context);

    const [ascOrder, setAscOrder] = useState(true)
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        actions.getOrders()
        }, [])

    useEffect(()=>{
        setOrders(store.orders)
        }, [store])

        const updateCheckboxStatus = (orderId) => {
            actions.updateOrders(store.orders.map((order)=>{
                if(order.id !== orderId){
                    return order
                } 
                return{...order, isSelected: !order.isSelected}
            }))
                return
        };

        const pendingItems = store.orders.filter((item)=>{return item.status === "Pendiente" && item.isSelected})

        const updateStatus = ()=>{
            pendingItems.map(item => ({ ...item, status: "blabla" }))
            actions.updateOrderStatus(pendingItems.map(item=> ({id: item.id, status: "Terminado"})
            ))
            console.log(pendingItems);
        }

        // Below you will find all the Sorting functions

        function numberSort(sortingBy){
            let newOrder = store.orders.slice(); // Create a copy of the orders array
            if(ascOrder){
                newOrder.sort((a,b)=>a[sortingBy]-b[sortingBy]) 
                actions.updateOrders(newOrder)
            }else if(!ascOrder){
                newOrder.sort((a,b)=>b[sortingBy]-a[sortingBy])
                actions.updateOrders(newOrder)
            }
            setAscOrder(!ascOrder)
        }
        function dateSort(sortingBy){
            let newOrder = store.orders.slice(); // Create a copy of the orders array
            if(ascOrder){
                newOrder.sort((a,b)=> new Date(a[sortingBy])-new Date(b[sortingBy])) 
                actions.updateOrders(newOrder)
            }else if(!ascOrder){
                newOrder.sort((a,b)=> new Date(b[sortingBy])- new Date(a[sortingBy]))
                actions.updateOrders(newOrder)
            }
            setAscOrder(!ascOrder)
        }

        function stringSort(sortingBy){
            let newOrder = store.orders.slice();
            if(ascOrder){
                newOrder.sort((a,b)=> a[sortingBy].localeCompare(b[sortingBy]))
                setAscOrder(!ascOrder)
            }else if(!ascOrder){
                newOrder.sort((a,b)=> b[sortingBy].localeCompare(a[sortingBy]))
                setAscOrder(!ascOrder)
            }
            actions.updateOrders(newOrder)
        }

        function objectSort(sortingBy, nestedSort ){
            const newOrder = store.orders.slice()
            if(ascOrder){
                newOrder.sort((a,b)=> a[sortingBy][nestedSort].localeCompare(b[sortingBy][nestedSort]))
                setAscOrder(!ascOrder)
            }else  if(!ascOrder){
                newOrder.sort((a,b)=> b[sortingBy][nestedSort].localeCompare(a[sortingBy][nestedSort]))
                setAscOrder(!ascOrder)
            }
            actions.updateOrders(newOrder)
        }

    return(
        <>  
        <div className="table-responsive responsive-font">
            <div className="container mt-3">
                <button onClick={()=>console.log(store.orders)}> Store Orders</button>
                <button onClick={updateStatus}
                    className="float-end me-5 button-dark"> 
                    Actualizar Status de: {pendingItems.length}
                </button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="clickeable" onClick={()=> numberSort("id")} > ID <span> 💥</span></th>

                        <th className="clickeable" onClick={()=> stringSort("customer_name")}> Nombre del Cliente <span> 💥</span></th>

                        <th className="" onClick={()=> numberSort("customer_number")} > Numero de Cliente <span> 💥</span></th>
                        <th className="clickeable" onClick={()=>objectSort("plant", "name")}> Tipo de Planta <span> 💥</span></th>
                        <th className="clickeable" onClick={()=> numberSort("plant_size")} > Tamaño de Planta <span> 💥</span></th>
                        <th className="clickeable" onClick={()=> numberSort("price")} > Precio <span> 💥</span></th>
                        <th className="clickeable" onClick={()=>objectSort("master", "name")}> Master Asignado <span> 💥</span></th>
                        <th className="clickeable" onClick={()=> dateSort("delivery_date")}> Fecha de Entrega <span> 💥</span></th>

                        <th className="clickeable"> Estado actual <span> 💥</span></th>

                        <th className="clickeable"> Comentarios Adicionales <span> 💥</span></th>
                    </tr>
                </thead>
                <tbody>
                    {store.orders.filter((item)=>{return item.status === "Pendiente"})
                    .map((order,index)=>{
                        return(
                        <tr  key={index}>
                            <td> {order.id}</td>
                            <td> {order.customer_name}</td>
                            <td> {order.customer_number}</td>
                            <td> {order.plant.name}</td>
                            <td> {order.plant_size}</td>
                            <td> {order.price}</td>
                            <td> {order.master.name}</td>
                            <td>{new Date(order.delivery_date).toLocaleDateString('es', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                            <td> {order.status} 
                                <input type="checkbox"
                                checked={order.isSelected || false} 
                                onClick={()=> {updateCheckboxStatus(order.id) }
                                } 
                               
                                />
                            </td> 
                            <td> {order.description}</td>
                        </tr>)
                        })
                    }  
                </tbody>
            </table>
        </div> 
    </>
    )
}