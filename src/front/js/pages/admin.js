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
	const [component, setComponent] = useState(<AddOrder />) 
	
	const setAndClose = (comp, string) => {
		setComponent(comp);
		addSectionQueryParam(string);
	}

	const addSectionQueryParam = (string)=>{
		setSearchparams({section: string})
	}
	
	const sectionComponentsMap = {
		"agregar.nuevo.pedido": <AddOrder />,
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
		const sectionRegex = /section=([^&]+)/;
		const querySectionMatch = currentURL.match(sectionRegex);
		const section = querySectionMatch ? querySectionMatch[1] : "agregar-nuevo-pedido";
		setComponent(sectionComponentsMap[section])
	}, [])





	return (
        <>
		 <div id="admin-page-container">
			<Options showCurrentComponent={setAndClose} /> 
			{component}
		 </div>
        </>
	);
};