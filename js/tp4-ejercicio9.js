/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea
dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, 
crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar 
que cada animal emite el sonido adecuado.  */

class Animal {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    set name(newName) {
        this.#name = newName;
    }

    set age(newAge) {
        this.#age = newAge;
    } 

    makeSound(){
        document.writeln(`Sonido de animal 🔊`);
    }
}

class Dog extends Animal{
    constructor(name, age){
        super(name, age);   
    }

    makeSound(){
        document.writeln(`<p>${this.name}, de ${this.age} años, dice Guau Guau 🐶</p>`);
    }
}

class Cat extends Animal{
    constructor(name, age){
        super(name, age);   
    }

    makeSound(){
        document.writeln(`<p>${this.name}, de ${this.age} años, dice Miau Miau 🐈</p>`);
    }
}

const dogName = prompt("Ingresa el nombre del perro: ");
const dogAge = prompt("Ingresa la edad del perro: ");
const catName = prompt("Ingresa el nombre del gato: ");
const catAge = prompt("Ingresa la edad del gato: ");
const dog = new Dog(dogName, dogAge);
const cat = new Cat(catName, catAge);

dog.makeSound();
cat.makeSound();