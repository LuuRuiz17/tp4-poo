/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y
"despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
"saludar" y "despedirse". */

class Person{
    #name
    #age
    #profession

    constructor(name, age, profession){
        this.#name = name;
        this.#age = age;
        this.#profession = profession;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get profession() {
        return this.#profession;
    }

    set name(newName) {
        this.#name = newName;
    }

    set age(newAge) {
        this.#age = newAge;
    }

    set profession(newProfession) {
        this.#profession = newProfession;
    }

    sayHello(){
        document.writeln(`<p>${this.#name} dice: Hola!</p>`);
    }

    sayGoodbye(){
        document.writeln(`<p>${this.#name} dice: Adiós!</p>`);
    }
}

for(let i = 0; i < 2; i++){
    const name = prompt("Ingresa el nombre de la persona: ");
    const age = prompt("Ingresa la edad de la persona: ");
    const profession = prompt("Ingresa la profesión de la persona: ");
    const person = new Person(name, age, profession);
    person.sayHello();
    person.sayGoodbye();
}