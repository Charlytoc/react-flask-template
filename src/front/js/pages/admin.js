import React , {useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Options from "../component/options";
import GetPlants from "../component/getPlants";
export const Admin = () => {
	const [currentComponent, setCurrentComponent] = useState(<GetPlants />)

	return (
        <>
		 <div className="d-flex">
		 <Options setcomponent={setCurrentComponent} />
		 <div className="admin-component"> 
			{currentComponent}
		 </div>
		 </div>
        </>
	);
};