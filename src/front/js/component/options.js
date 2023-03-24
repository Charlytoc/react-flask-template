import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddPlants from "../component/addPlants"
export default function Options ({setComponent}) {
    return <>
    <section className="options-component">
        <div>
            <h2>Pedidos</h2>
            <button>Agregar pedido</button>
            <button>Ver pedidos pendientes</button>
            <button>Ver historial de pedidos</button>
            <h2>Plantas</h2>
            <button onClick={()=>setComponent(AddPlants)}>Agregar tipo de planta</button>
            <button>Entregar plantas a maestro</button>
            <button>Sumar plantas de pedido</button>
            <h2>Modelos</h2>
            <button>Ver catálogo</button>
            <button>Agregar o editar modelos</button>
            <h2>Inventarios</h2>
            <button>Ver inventario de plantas</button>
            <button>Ver inventario de modelos</button>
            <button>Ver lista de clientes</button>
        </div>
    </section>
    
    </>
}