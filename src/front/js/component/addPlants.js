import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigo from "../../img/rigo-baby.jpg"

export default function AddPlants(){
    
    const {store,actions}=useContext(Context);
    const [showMessage, setShowMessage] = useState(false)
    const [showError, setShowError] = useState(false)
    const [plant,setPlant]= useState({
       name:"",
       size34:0, 
       size35:0, 
       size36:0, 
       size37:0, 
       size38:0, 
       size39:0, 
       size40:0
    })
    const handleNameChange= (e)=>{
        setPlant( 
            {...plant,name:e.target.value},
            
        )
    }
    const handleSave = () => {
        if (!plant.name) {
          alert("Por favor, inserte un nombre para la planta");
          return;
        }
      
        actions.addPlants(plant, setShowMessage, setShowError);
        setPlant({
          name: "",
          size34: 0,
          size35: 0,
          size36: 0,
          size37: 0,
          size38: 0,
          size39: 0,
          size40: 0,
        });
      };
      
        
      
    
    return<>
    <div className="simple-form">
               {showMessage && <div className="popover">Planta agregada existosamente!</div>}
                {showError && <div className="popover">Ya agregaste esta planta previamente</div>}
        <h2 className="bold">Agrega un nuevo tipo de planta</h2>
            <div className="label-input-pairs">
<article>
  <label>Nombre de la planta</label>
  <input  className="" onChange={(e) => {handleNameChange(e)}} value={plant.name}/>
</article>
<article>
  <label>Talla 34</label>
  <input onChange={(e) => setPlant({...plant, size34:e.target.value})} value={plant.size34} type="number"/>
</article>
<article>
  <label>Talla 35</label>
  <input  onChange={(e) => setPlant({...plant, size35: e.target.value})} value={plant.size35} type="number"/>
</article>
<article>
  <label>Talla 36</label>
  <input  onChange={(e) => setPlant({...plant, size36:e.target.value})} value={plant.size36} type="number"/>
</article>
<article>
  <label>Talla 37</label>
  <input  onChange={(e) => setPlant({...plant, size37:e.target.value})} value={plant.size37} type="number"/>
</article>
<article>
  <label>Talla 38</label>
  <input  onChange={(e) => setPlant({...plant, size38: e.target.value})} value={plant.size38} type="number"/>
</article>
<article>
  <label>Talla 39</label>
  <input  onChange={(e) => setPlant({...plant, size39: e.target.value})} value={plant.size39} type="number"/>
</article>
<article>
  <label>Talla 40</label>
  <input  onChange={(e) => setPlant({...plant, size40: e.target.value})} value={plant.size40} type="number"/>
</article>

            </div>

            <button className="btn bg-pink" onClick={()=>{handleSave()}}>Guardar</button>
            
    </div>
     </>
}