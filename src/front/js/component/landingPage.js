import React from "react";
import "../../styles/index.css";
import "../../styles/home.css";
import hombre from "../../img/hombre.jpg"
import tacos from "../../img/tacos.jpg"
import variados from "../../img/variados.jpg"



export const LandingPage = () => (
    <div className="div-landing-page">
    {/* first section */}
	<div className="landing-image-1" style={{ backgroundImage: `url(${hombre})` }}>
        <div className="ptext">
            <span className="border">
            ¡Bienvenidos a nuestra zapatería en línea!
            </span>
        </div>
    </div>
    <section className="section">
        <h2>En Liz Shoes</h2>
        <p>Ofrecemos una amplia variedad de zapatos para mujeres, desde zapatos ortopédicos hasta tacos para fiestas, zapatos deportivos, zapatos escolares y botas industriales.</p>
    </section>
    {/* section 2 */}
	<div className="landing-image-2" style={{ backgroundImage: `url(${tacos})` }}>
        <div className="ptext">
            <span className="border">
                image 2 text
            </span>
        </div>
    </div>
    <section className="section">
        <h2>¿Necesitas zapatos ortopédicos?</h2>
        <p>enemos una amplia selección de zapatos diseñados para brindar la comodidad y el soporte necesarios para aquellos que sufren de problemas en los pies o necesitan un calzado especial para sus necesidades.</p>
    </section>
    {/* section 3 */}
	<div className="landing-image-3" style={{ backgroundImage: `url(${variados})` }}>
        <div className="ptext">
            <span className="border">
               image 3 text
            </span>
        </div>
    </div>
    <section className="section">
        <h2>¿Estás buscando zapatos para una noche de fiesta? </h2>
        <p>¡No busques más! Tenemos tacos elegantes y cómodos que seguramente impresionarán a todos en la fiesta.</p>
    </section>

    {/* section 4 */}
    <div className="landing-image-1" style={{ backgroundImage: `url(${hombre})` }}>
        <div className="ptext">
            <span className="border">
                website
            </span>
        </div>
    </div>
    <section className="section">
        <h2>¿Te gusta hacer ejercicio?</h2>
        <p>Tenemos zapatos deportivos de alta calidad que te proporcionarán la comodidad y el soporte que necesitas para correr, caminar o practicar deportes.</p>
    </section>
    {/* section 5 */}
    <div className="landing-image-2" style={{ backgroundImage: `url(${tacos})` }}>
        <div className="ptext">
            <span className="border">
                image 2 text
            </span>
        </div>
    </div>
    <section className="section">
        <h2>¿Necesitas zapatos escolares para tus hijos? </h2>
        <p>Ofrecemos una amplia selección de zapatos escolares duraderos y cómodos que son perfectos para el uso diario.</p>
    </section>
    {/* section 6 */}
    <div className="landing-image-3" style={{ backgroundImage: `url(${variados})` }}>
        <div className="ptext">
            <span className="border">
               image 3 text
            </span>
        </div>
    </div>
    <section className="section">
        <h2>¿Trabajas en un entorno industrial o de construcción?</h2>
        <p>Tenemos botas industriales duraderas y resistentes que brindan la protección y el soporte que necesitas para realizar tu trabajo de manera segura y cómoda.</p>
    </section>

    <div className="landing-image-1" style={{ backgroundImage: `url(${hombre})` }}>
        <div className="ptext">
            <span className="border">
            Además de nuestra amplia selección de zapatos, ofrecemos precios competitivos y un servicio al cliente excepcional. ¡No dudes en navegar por nuestra tienda en línea y encontrar el par de zapatos perfecto para ti!
            </span>
        </div>
    </div>

    </div>
    
);
