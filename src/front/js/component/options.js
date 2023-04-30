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

export default function Options({showCurrentComponent}) {
  return (
    <>
        <section className="options-component">
          <div>
            <h2>Pedidos</h2>
            <button onClick={()=>showCurrentComponent(<AddOrder />, "agregar-nuevo-pedido")} >Agregar nuevo pedido</button>
            <button onClick={()=>showCurrentComponent(<GetPendingOrders />, "ver-pedidos-pendientes")}>Ver pedidos pendientes</button>
            <button onClick={()=>showCurrentComponent(<GetOrders />, "ver-historial-de-pedidos")}>Ver historial de pedidos</button>
            <h2>Plantas</h2>
            <button onClick={()=>showCurrentComponent(<AddPlants />, "agregar-tipo-de-planta")}>Agregar tipo de planta</button>
            <button onClick={()=>showCurrentComponent(<GetPlants />, "ver-inventario-de-plantas")}>Ver inventario de plantas</button>
            <button onClick={()=>showCurrentComponent(<AddTransaction />, "entregar-plantas-a-maestro")}>Entregar plantas a maestro</button>
            <button  onClick={()=>showCurrentComponent(<GetTransactionPlants />, "ver-movimientos-de-plantas")}>Ver movimientos de plantas</button>
            <h2>Modelos</h2>
            <button onClick={()=>{showCurrentComponent(<AddModels/>, "agregar-nuevo-modelo")}}>Agregar nuevo modelo</button>
            <button>Ver catálogo de clientes</button>
            <button onClick={()=>{showCurrentComponent(<GetModels/>, "ver-inventario-de-modelos")}}>Ver inventario de modelos</button>
            <h2>Maestros</h2>
            <button onClick={()=>{showCurrentComponent(<AddMaster/>, "agregar-nuevo-maestro")}}>Agregar nuevo maestro</button>
            <button onClick={()=>{showCurrentComponent(<GetMaster/>, "ver-maestros-registrados")}}>Ver maestros registrados</button>
          </div>
        </section>
    </>
  );
}
