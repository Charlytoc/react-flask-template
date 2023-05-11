import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import AddPlants from "../component/addPlants";
import GetPlants from "../component/getPlants";

import AddModels from "../component/addModels";
import AddOrder from "../component/addOrder";
import AddTransaction from "../component/addTransaction";
import GetModels from "../component/getModels";
import { LandingPage } from "../component/landingPage";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const [number,setnumber]= useState(0)
	const [resultado,setResutado]= useState(0)

	// const handleChange = (e)=> setnumber(parseInt(e.target.value))
	// const sumar =()=>setResutado((anterior)=>anterior+=number)
	
	return(

		<div>
			{/* <input type="number" placeholder="suma un numero al resultado" onChange={(e)=>handleChange(e)}/>
			<button onClick={()=>sumar()}>sumar</button>
			<span>{resultado}</span> */}
			<LandingPage/>
		</div>
	)
};
