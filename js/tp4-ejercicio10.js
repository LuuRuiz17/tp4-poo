/* 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el 
método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre 
de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el 
método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario 
mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. 
Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar. */

class Airport {
    #name;
    #planesList;

    constructor(name, planesList) {
        this.#name = name;
        this.#planesList = planesList;
    }

    get name() {
        return this.#name;
    }

    get planesList() {
        return this.#planesList;
    }

    set name(newName) {
        this.#name = newName;
    }

    set planesList(newPlanesList) {
        this.#planesList = newPlanesList;
    }

    findPlane(planeToLookFor) {
        for (let i = 0; i < this.#planesList.length; i++) {
            if (this.#planesList[i].name === planeToLookFor) {
                return this.#planesList[i]; 
            }
        }
        return null; 
    }

    addPlane(plane){
        this.#planesList.push(plane);
    }   
}

class Plane {
    #name;
    #capacity;
    #destiny;
    #passengersList;

    constructor(name, capacity, destiny, passengersList) {
        this.#name = name;
        this.#capacity = capacity;
        this.#destiny = destiny;
        this.#passengersList = passengersList;
    }

    get name() {
        return this.#name;
    }

    get capacity() {
        return this.#capacity;
    }

    get destiny() {
        return this.#destiny;
    }

    get passengersList() {
        return this.#passengersList;
    }

    set name(newName) {
        this.#name = newName;
    }

    set capacity(newCapacity) {
        this.#capacity = newCapacity;
    }

    set destiny(newDestiny) {
        this.#destiny = newDestiny;
    }

    set passengersList(newPassengersList) {
        this.#passengersList = newPassengersList;
    }

    boardPlane(passengerName) {
        if (this.#passengersList.length < this.#capacity) {
            this.#passengersList.push(passengerName);
            document.writeln(`<p>El pasajero '${passengerName}' abordó el avión.</p>`);
        } else {
            document.writeln(`<p>El avión está lleno.</p>`);
        }
    }
    
    
    showPlaneInfo(){
        document.writeln(`<p>Nombre del avión: ${this.#name}</p>`);
        document.writeln(`<p>Capacidad: ${this.#capacity}</p>`);
        document.writeln(`<p>Destino: ${this.#destiny}</p>`);
        document.writeln(`<p>Lista de pasajeros: </p>`);
        document.writeln(`<ul>`);
        for(let i = 0; i < this.#passengersList.length; i++){
            document.writeln(`<li> ${this.#passengersList[i]}</li>`)
        }
        document.writeln(`</ul>`);
    }
}

const airportName = "Aeropuerto Internacional";
const planesList = []
const internationalAirport = new Airport(airportName, []);


for(let i = 0; i < 3; i++){
    const passengersList = [];
    const name = prompt("Ingresa el nombre del avión: ");
    const capacity = parseInt(prompt("Ingresa la capacidad del avión: "));
    const destiny = prompt("Ingresa el destino del vuelo: ");
    do{
        const passenger = prompt("Ingresa el nombre del pasajero: ");
        passengersList.push(passenger);
    }while(confirm("Agregar más pasajeros? "));

    const plane = new Plane(name, capacity, destiny, passengersList);
    console.log(plane);
    console.log(passengersList);
    internationalAirport.addPlane(plane);
    console.log(`Lista de aviones: ${planesList}`);
}

const planeToLookFor = prompt("¿Qué avión está buscando?");
const findedPlane = internationalAirport.findPlane(planeToLookFor);

if (findedPlane) {
    findedPlane.showPlaneInfo();
    const passengerName = prompt("Ingrese el nombre del pasajero que abordará:");
    findedPlane.boardPlane(passengerName);
} else {
    document.writeln(`<p>No se encontró el avión "${planeToLookFor}".</p>`);
}






