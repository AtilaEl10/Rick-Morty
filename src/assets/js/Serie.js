class Serie {
    constructor(nombre, personajes = []) {
        this.nombre = nombre;
        this.personajes = personajes
    }
    getPersonaje(Character) {
        const cards = document.getElementById("cards");
        // console.log("WEna washo");
        cards.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center my-3">
                <div class="card mx-auto">
                    <img class="card-img-top" src="${Character.imagen}" alt="Card image cap">
                    <div class="card-body text-white">
                        <p class="card-text titulo">${Character.getNombre()}</p>
                        <p class="card-text subtitulo">Especie: ${Character.especie}</p>
                    </div>
                </div>
            </div>
        ` 
    }
    agregarPersonajes(personaje) {
        this.personajes.push(personaje)
    }
}

export default Serie