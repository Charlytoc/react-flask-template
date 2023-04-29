import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";


export const Catalogue= () => {
	const { store, actions } = useContext(Context);
	const [shoes,setShoes]= useState([])
	const [filteredShoes,setFilteredShoes]= useState([])
	const [showFilter,setShowFilter]= useState(false)
	const [category,setCategory]= useState({})

	useEffect(()=>{
		fetch(process.env.BACKEND_URL+"/api/get/shoes")
		.then(res=> res.json())
		.then(data=> {setShoes(data);setFilteredShoes(data);console.log(data);})
		.catch(error=> console.log(error))

	},[])

	const handleFilter=(categoryName)=>setFilteredShoes(shoes.filter((zapato)=>zapato.category.name===categoryName))
	// requisitos de la funcion sizePriceFilter:
	// debe recibir 4 parametros:arregloPorFiltrar:el arreglo del cual queremos filtrar elementos, propiedad:la propiedad por la cual se desea filtrar el zapato, limiteInferior:el primer valor que va a estar permitido
	// en los resultados que esperamos de la funcion, limiteSuperior: el valor mas alto permitido en los resultados que esperamos de la funcion
	// valor de salida: la funcion debe retornar un nuevo arreglo con los elementos filtrados de la forma correcta
	const filtroTallaPrecio= (arregloPorFiltrar, propiedad, limiteInferior, limiteSuperior) => {
		let arregloFiltrado = arregloPorFiltrar.filter((objeto) => {
			if (!objeto || objeto[propiedad] === undefined) {
				return false; // Ignorar objetos sin la propiedad "propiedad"
			}
			return objeto[propiedad] >= limiteInferior && objeto[propiedad] <= limiteSuperior;
		});
		return arregloFiltrado;
	}
	
	return (
		<>
		{showFilter && <FilterCategories filter={handleFilter} />}
		<button onClick={()=>{setShowFilter(!showFilter);console.log(shoes)}} className="filter-button">Filter 🔆</button>
		<section className="grid-catalogue">
		{filteredShoes.map((item,index)=>{
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

function FilterCategories({filter}){
	return (<div className="filtro" >
				<h2>Filtros</h2>
				<span>Categorías</span>
				<button onClick={()=>{filter("magnolia")}}>Magnolias</button>
				<button onClick={()=>{filter("colegiales")}}>Colegiales</button>
				<button onClick={()=>{filter("ortopedicos")}}>Ortopedicos</button>
				<button onClick={()=>{filter("tacos")}}>Tacos</button>
				<button onClick={()=>{filter("botas")}}>Botas</button>
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