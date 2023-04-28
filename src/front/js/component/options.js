import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddPlants from "./addPlants";
import GetPlants from "./getPlants";
import AddOrder from "./addOrder";

import AddModels from "./addModels";

import GetOrders from "./getOrders";
import GetModels from "./getModels";
import GetTransactionPlants from "./getTransactionPlants";
import AddTransaction from "./addTransaction";
import AddMaster from "./addMaster";
import GetMaster from "./getMaster";
import GetPendingOrders from "./getPendingOrders";

export default function Options({setComponent}) {

  return (
    <>
        <section className="options-component">
          <div>
            <h2>Pedidos</h2>
            <button onClick={()=>setComponent(<AddOrder />)} >Agregar nuevo pedido</button>
            <button onClick={()=>setComponent(<GetPendingOrders />)}>Ver pedidos pendientes</button>
            <button onClick={()=>setComponent(<GetOrders />)}>Ver historial de pedidos</button>
            <h2>Plantas</h2>
            <button onClick={()=>setComponent(<AddPlants />)}>Agregar tipo de planta</button>
            <button onClick={()=>setComponent(<GetPlants />)}>Ver inventario de plantas</button>
            <button onClick={()=>setComponent(<AddTransaction />)}>Entregar plantas a maestro</button>
            <button  onClick={()=>setComponent(<GetTransactionPlants />)}>Ver movimientos de plantas</button>
            <h2>Modelos</h2>
            <button onClick={()=>{setComponent(<AddModels/>)}}>Agregar nuevo modelo</button>
            <button>Ver catálogo de clientes</button>
            <button onClick={()=>{setComponent(<GetModels/>)}}>Ver inventario de modelos</button>
            <h2>Maestros</h2>
            <button onClick={()=>{setComponent(<AddMaster/>)}}>Agregar nuevo maestro</button>
            <button onClick={()=>{setComponent(<GetMaster/>)}}>Ver maestros registrados</button>
          </div>
        </section>
      
    </>
  );
}
