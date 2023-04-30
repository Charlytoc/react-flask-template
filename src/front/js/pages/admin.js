import React, {useEffect, useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useSearchParams } from "react-router-dom";
import Options from "../component/options";
import AddPlants from "../component/addPlants";
import GetPlants from "../component/getPlants";
import AddOrder from "../component/addOrder";

import AddModels from "../component/addModels";

import GetOrders from "../component/getOrders";
import GetModels from "../component/getModels";
import GetTransactionPlants from "../component/getTransactionPlants";
import AddTransaction from "../component/addTransaction";
import AddMaster from "../component/addMaster";
import GetMaster from "../component/getMaster";
import GetPendingOrders from "../component/getPendingOrders";

export const Admin = () => {
	const [searchParams, setSearchparams] = useSearchParams()
	const [component, setComponent] = useState() 
	
	const setAndClose = (comp, string) => {
		setComponent(comp);
		addSectionQueryParam(string);
	}

	const addSectionQueryParam = (string)=>{
		setSearchparams({section: string})
	}
	
	const obj = {
		"agregar-nuevo-pedido": <AddOrder />,
		"ver-pedidos-pendientes": <GetPendingOrders />,
		"ver-historial-de-pedidos": <GetOrders />,
		"agregar-tipo-de-planta": <AddPlants />,
		"ver-inventario-de-plantas": <GetPlants />,
		"entregar-plantas-a-maestro": <AddTransaction />,
		"ver-movimientos-de-plantas": <GetTransactionPlants />,
		"agregar-nuevo-modelo": <AddModels />,
		"ver-inventario-de-modelos": <GetModels />,
		"agregar-nuevo-maestro": <AddMaster />,
		"ver-maestros-registrados": <GetMaster />
	  };

	useEffect(()=>{
		const currentURL = window.location.href;
		console.log(currentURL);
		const sectionRegex = /section=([^&]+)/;
		const match = currentURL.match(sectionRegex);
		const section = match ? match[1] : null;
		console.log("Esto es el query " + section); // "test2"
		console.log("Este es el component almacenado en el objeto en la seccion ", section , obj[section]);

		setComponent(obj[section])
	}, [])





	return (
        <>
		 <button onClick={()=> addSectionQueryParam("testing")}> add Section</button>
		 <button onClick={()=> setSearchparams({})}> Reset Path</button>
		 <div id="admin-page-container">
			<Options showCurrentComponent={setAndClose} /> 
			{component}
		 </div>
        </>
	);
};