import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import "../../styles/home.css";

export const Catalogue= () => {
	const { store, actions } = useContext(Context);
	const [shoes,setShoes]= useState([])

	useEffect(()=>{
		fetch(process.env.BACKEND_URL+"/api/get/shoes")
		.then(res=> res.json())
		.then(data=> setShoes(data))
		.catch(error=> console.log(error))

	})

	return (
		<>
		{/* <div className="d-flex justify-content-center">
			<Card />
			<Card />
			<Card />
		</div>

		
		<div className="d-flex justify-content-center">
			<Card />
			<Card />
			<Card />
		</div> */}
		<div onClick={()=>console.log(shoes)}>hello</div>
		<ul>
		{shoes.map((item,index)=>{
				
		return	<ShoeCard name={item.name} imageUrl={item.photo}key={index} />
	
		})}
		
	</ul>	
	</>
	);
};

function ShoeCard ({name, imageUrl}) {
	return <>
	<div className="shoe-card">
		<h2>{name}</h2>
		<div>
			<img src={imageUrl} alt=""/>
		</div>
		<button> <i className="fa-regular fa-heart"></i></button>
	</div>
	
	
	</>



}