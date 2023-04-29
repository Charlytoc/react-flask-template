// primero probamos que la App se ejecute correctamente
console.log("holaaa"); //para ejecutar esta aplicacion corremos en la terminal: node filtrar.js
const filtroTallaPrecio= (arregloPorFiltrar, propiedad, limiteInferior, limiteSuperior) => {
    let arregloFiltrado = arregloPorFiltrar.filter((objeto) => {
        if (!objeto || objeto[propiedad] === undefined) {
            return false; // Ignorar objetos sin la propiedad "propiedad"
        }
        return objeto[propiedad] >= limiteInferior && objeto[propiedad] <= limiteSuperior;
    });
    return arregloFiltrado;
}




let facturas =[{precio:3},{precio:1.5},{precio:5.10},{precio:6.12},{precio:6.25},{precio:7.23},{precio:8.52},{precio:9.10},{precio:10},{precio:10.50},{precio:13.60},{precio:23.23},]


let facturasFiltradas = filtroTallaPrecio(facturas,"precio",0,10)

console.log(facturasFiltradas);


