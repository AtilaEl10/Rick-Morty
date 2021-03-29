import "../../assets/scss/style.scss";
import "regenerator-runtime/runtime.js"

import Serie from "./Serie"
import Personaje from "./Personaje"

    
const callPersonajes = (() => {
    const urlBase ="https://rickandmortyapi.com/api"
    let cantidadPersonajes = 0 ;
    const dataPersonajes = async (urlApi, urlIp) => {
        let arr = []
        try {
            const request = await fetch(urlApi + urlIp);
            const data = await request.json();
            arr = data.results; 
        } catch (error) {
            console.log(`Error en la obtención de los personajes desde la API: ${error}`);
        } finally {
            console.log(arr);
            return arr
        }
    } 

    // Funciones publicas
    const funcionPublica1 = async() => {
        const serie = new Serie("Rick & Morty");
    
        const resultadosApi = await dataPersonajes(urlBase, "/character");
        cantidadPersonajes = resultadosApi.length;

        resultadosApi.forEach(personaje => {
            const character = new Personaje(personaje.id, personaje.name, personaje.species, personaje.image);
            serie.agregarPersonajes(character)
            serie.getPersonaje(character)
        })
    };
    const funcionPublica2 = () => {
        const hide = document.getElementById("hide")
        const numeroPersonajes = document.getElementById("numeroPersonajes")
        hide.style.display = 'none'
        numeroPersonajes.innerHTML += `<p>${cantidadPersonajes}</p>`
        // console.log(`Personajes a mostrar: ${cantidadPersonajes}`);
    }


    return {
       funcionPublica1, 
       funcionPublica2, 
    }
})()

callPersonajes.funcionPublica1();
setTimeout(() => {
callPersonajes.funcionPublica2()
},2000)
// callPersonajes.funcionPublica1().then(el => console.log(el))

console.log("hola");