import React, {useEffect, useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Options from "../component/options";
import GetPlants from "../component/getPlants";
import AddPlants from "../component/addPlants";
import AddOrder from "../component/addOrder";
export const Admin = () => {
	const [component, setComponent] = useState(<AddOrder />) 
	const setAndClose = (comp) => {
		setComponent(comp);

	}

	return (
        <>
		 <div id="admin-page-container">
		<Options setComponent={setAndClose}/> 
		{component}
		 </div>
        </>
	);
};