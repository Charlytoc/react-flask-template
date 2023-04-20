import React, { useContext,useEffect,useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Action } from "history";
import axios from 'axios';

export default function AddTransaction(){
    const[transaction,setTransaction]= useState({})
    const[showMessage,setShowMessage]= useState(false)
    const{store,actions}= useContext(Context)
    const[plantTypes,setPlantTypes]= useState([])
    const[master,setMaster]= useState([])
    const subtractPlants= (e)=>{
        e.preventDefault()
        setTransaction({
            ...transaction,
            size34:-transaction.size34,
            size35:-transaction.size35,
            size36:-transaction.size36,
            size37:-transaction.size37,
            size38:-transaction.size38,
            size39:-transaction.size39,
            size40:-transaction.size40,
            size41:-transaction.size41,
        });
        actions.addTransaction(transaction,setShowMessage)
        setTransaction({})
    }
    const fetchPlants = ()=>{
        axios.get(process.env.BACKEND_URL+"/api/get/plant/types")
        .then((response) => {setPlantTypes(response.data);console.log( response.data[0]);})
        .catch((error) => {console.log(error)});
       }
    const fetchMasters = ()=>{
        axios.get(process.env.BACKEND_URL+"/api/get/masters")
        .then((response) => {setMaster(response.data)})
        .catch((error) => {console.log(error)});
       }

    useEffect(()=>{
        fetchPlants();
        fetchMasters()

    },[])
    
    return<>
        <div className="simple-form">
            <h2 className="bold">Nueva Transacción</h2>

        <div className=" label-input-pairs">
            <article>
                <label>Tipo de Planta</label>
                <select  name="Tipo de Planta"
                    onChange={(e)=>{setTransaction({...transaction, plant_id: e.target.value})}}
                    value={transaction.plant_id || ''}><option value={0}> Selecciona Una Planta </option>
                    {plantTypes.map((plant) => (
                    <option value={plant.id} key={plant.id}>
                    {plant.name}
                    </option> ))}</select>
            </article>
            <article>
                <label>Maestro</label>
                <select  name="Maestro"
                    onChange={(e)=>{setTransaction({...transaction, master_id: e.target.value})}}
                    value={transaction.master_id || ''}><option value={0}> Selecciona Un Maestro </option>
                    {master.map((master) => (
                    <option value={master.id} key={master.id}>
                    {master.name}
                    </option> ))}</select>
            </article>
            <article>
                <label>Descripcion</label>
                <input onChange={(e)=>{setTransaction({...transaction,description:e.target.value})}} value={transaction.description || ''} />
            </article>
            <article>
                <label>Talla 34</label>
                <input  onChange={(e)=>{setTransaction({...transaction,size34:parseInt(e.target.value)})}} value={transaction.size34 || ''} />
            </article>
            <article>
                <label>Talla 35</label>
                <input onChange={(e)=>{setTransaction({...transaction,size35:parseInt(e.target.value)})}} value={transaction.size35 || ''} />
            </article>
            <article>
                <label>Talla 36</label>
                <input onChange={(e)=>{setTransaction({...transaction,size36:parseInt(e.target.value)})}} value={transaction.size36 || ''} />
            </article>
            <article>
                <label>Talla 37</label>
                <input  onChange={(e)=>{setTransaction({...transaction,size37:parseInt(e.target.value)})}} value={transaction.size37 || ''} />
            </article>
            <article>
                <label>Talla 38</label>
                <input  onChange={(e)=>{setTransaction({...transaction,size38:parseInt(e.target.value)})}} value={transaction.size38 || ''} />
            </article>
            <article>
                <label>Talla 39</label>
                <input onChange={(e)=>{setTransaction({...transaction,size39:parseInt(e.target.value)})}} value={transaction.size39 || ''} />
            </article>
            <article>
                <label>Talla 40</label>
                <input  onChange={(e)=>{setTransaction({...transaction,size40:parseInt(e.target.value)})}} value={transaction.size40 || ''} />
            </article>
            <article>
                <label>Talla 41</label>
                <input onChange={(e)=>{setTransaction({...transaction,size41:parseInt(e.target.value)})}} value={transaction.size41 || ''} />
            </article>
        </div>
       
        <div className="d-flex justify-content-center mt-3">
            <button className="btn bg-pink me-3 button-transaction" onClick={(e)=>{e.preventDefault();actions.addTransaction(transaction,setShowMessage); setTransaction({})}}>Sumar Plantas Al Inventario<span className="ms-2"><i className="fa-solid fa-plus"></i></span></button>
            <button className="btn bg-pink button-transaction" onClick={(e)=>{subtractPlants(e)}}>Entregar Plantas A Un Maestro <span className="ms-2"><i className="fa-solid fa-minus"></i></span></button>
        <div style={{position: "relative"}}>
        {showMessage && <div className="popover">Transacción Exitosa</div>}
        </div>
    </div>
        </div>
    </>
}
   
    