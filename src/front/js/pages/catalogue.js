import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";


export const Catalogue= () => {
	const { store, actions } = useContext(Context);
	const [shoes,setShoes]= useState([])
	const [category,setCategory]= useState({})

	useEffect(()=>{
		fetch(process.env.BACKEND_URL+"/api/get/shoes")
		.then(res=> res.json())
		.then(data=> {setShoes(data);console.log(data)})
		.catch(error=> console.log(error))

	},[])

	return (
		<>
	<section className="breadcrumb">
  		<a href="#">Categoría</a> 
  		<a href="#">Subcategoría</a> 
	</section>
	<div onClick={()=>console.log(shoes)}></div>
		<section className="card">
		{shoes.map((item,index)=>{
			return	<ShoeCard name={item.name} imageUrl={item.photo} category={item.category.name} sizeFrom={item.size_from}
		 	sizeTo={item.size_to} key={index} />
		})}
		</section>	
				
	
		
	</>
	);
											
  		
		
};

function ShoeCard ({name, imageUrl,category,sizeFrom, sizeTo}) {
	return <>
	
	<div className="shoe-card">
		<h2  className="bg-pink">{name}</h2>
		<div>
			<img src={imageUrl} alt=""/>
		</div>
		
		<div className="next-to-heart bold ">
			<div>
				<span className="">Disponibles Desde<strong>{sizeFrom}</strong>  Hasta:<strong>{sizeTo}</strong></span>

			</div>
			<button className="heart"> <i className="fa-regular fa-heart"></i></button>
		</div>
	</div>


	
	
	
	</>



}