import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";


export const Catalogue= () => {
	const { store, actions } = useContext(Context);
	const [shoes,setShoes]= useState([])
	const [showFilter,setShowFilter]= useState(false)
	const [category,setCategory]= useState({})

	useEffect(()=>{
		fetch(process.env.BACKEND_URL+"/api/get/shoes")
		.then(res=> res.json())
		.then(data=> {setShoes(data);console.log(data)})
		.catch(error=> console.log(error))

	},[])

	return (
		<>
		{showFilter && <FilterCategories/>}
		<button onClick={()=>{setShowFilter(!showFilter)}} className="filter-button">Filter</button>
		<section className="grid-catalogue">
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
		<h2  className="">{name}</h2>
		<div className="first-div">
			<img src={imageUrl} alt=""/>
		</div>
		
		<div className="next-to-heart bold ">
			<div>
				<span className="">Disponibles Desde<strong>{sizeFrom}</strong>  Hasta:<strong>{sizeTo}</strong></span>

			</div>
			<button className="heart"> <i className="fa-solid fa-cart-shopping  me-1"></i></button>
		</div>
	</div>
	</>
}

function FilterCategories(){
	return (<div className="filtro">
				<h2>Filtros</h2>
				<span>Categorías</span>
				<button>Magnolias</button>
				<button>Colegiales</button>
				<button>Ortopedicos</button>
				<button>Tacos</button>
				<button>Botas</button>
				<span>Precio</span>
				<button>0-10 $</button>
				<button>10-15 $</button>
				<button>15-25 $</button>
				<button>25-40 $</button>
				<span>Tallas</span>
				<button>34-35</button>
				<button>36-37</button>
				<button>37-38</button>
				<button>39-40</button>
				<button>41</button>
			</div>
	
	
	)
	
	
}