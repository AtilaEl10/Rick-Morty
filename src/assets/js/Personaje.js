class Personaje {
    constructor(id, nombrePersonaje, especie, imagen) {
        // super(nombre, personajes)
        // valores privados
        const _id = id;
        const _nombre = nombrePersonaje;
        this.getId = () => _id; 
        this.getNombre = () => _nombre; 
        // valores publicos
        this.especie = especie;
        this.imagen = imagen;
    };
    get obtenerId() {
        return this.getId();
    };
    get obtenerNombre() {
        return this.getNombre();
    };
}

export default Personaje