function generateDNI(){
    let random = Math.floor(Math.random() * 100000000); 
    if(random >= 70000000){
        random -= 20000000;
    }
    return random;
}

class Person {
    #name;
    #dni;
    #age;
    #gender;
    #weight;
    #height;
    #year;

    constructor(name, dni, age, gender, weight, height, year){
        this.#name = name;
        this.#dni = dni;
        this.#age = age;
        this.#gender = gender;
        this.#weight = weight;
        this.#height = height;
        this.#year = year;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get dni() {
        return this.#dni;
    }

    set dni(newDni) {
        this.#dni = newDni;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        this.#age = newAge;
    }

    get gender() {
        return this.#gender;
    }

    set gender(newGender) {
        this.#gender = newGender;
    }

    get weight() {
        return this.#weight;
    }

    set weight(newWeight) {
        this.#weight = newWeight;
    }

    get height() {
        return this.#height;
    }

    set height(newHeight) {
        this.#height = newHeight;
    }

    get year() {
        return this.#year;
    }

    set year(newYear) {
        this.#year = newYear;
    }

    showGeneration() {
        let generation = "";
        if (this.#year >= 1994 && this.#year <= 2010) {
             generation = "<b>Generación Z => </b>Irreverencia 😛";
        } else if (this.#year >= 1981 && this.#year <= 1993) {
            generation = "<b>Millennials => </b>Frustración 😵‍💫";
        } else if (this.#year >= 1969 && this.#year <= 1980) {
            generation = "<b>Generación X => </b>Obsesión por el éxito 😎";
        } else if (this.#year >= 1949 && this.#year <= 1968) {
            generation = "<b>Baby Boom => </b>Ambición 🤑";
        } else if (this.#year >= 1930 && this.#year <= 1948) {
            generation = "<b>Silent Generation => </b>Austeridad 😐";
        } else {
            generation = "No hay una generación definida."
        }
        return generation
    }    

    showPerson(){
        document.writeln(`<p><b>Nombre:</b> ${this.#name}</p>`);
        document.writeln(`<p><b>DNI:</b> ${this.#dni}</p>`);
        document.writeln(`<p><b>Edad:</b> ${this.#age}</p>`);
        document.writeln(`<p><b>Género:</b> ${this.#gender}</p>`);
        document.writeln(`<p><b>Peso:</b> ${this.#weight}</p>`);
        document.writeln(`<p><b>Altura:</b> ${this.#height}</p>`);
        document.writeln(`<p><b>Año de Nacimiento:</b> ${this.#year}</p>`);
        document.writeln(`<p><b>${this.showGeneration()}</b></p>`);
    }

    esMayorDeEdad(){
        if(this.#age >= 18){
            document.writeln(`<p>${this.#name} es mayor de edad.</p>`);
        }else{
            document.writeln(`<p>${this.#name} es menor de edad.</p>`);
        }
    }
}

const nombre = prompt("Ingresa tu nombre: ");
const dni =  generateDNI(); 
const age = parseInt(prompt("Ingresa tu edad: "));
const gender = prompt("Ingresa tu género: ");
const weight = parseFloat(prompt("Ingresa tu peso: "));
const height = parseFloat(prompt("Ingresa tu altura: "));
const year = parseInt(prompt("Ingresa tu año de nacimiento: "));
const person = new Person(nombre, dni, age, gender, weight, height, year);
person.showPerson();
person.showGeneration();
person.esMayorDeEdad();
generateDNI();



