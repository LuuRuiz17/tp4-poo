/* Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (los hobbies son un array de strings).
Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies 
de la persona. Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos 
de la persona y el nuevo hobby. */

function addHobbie(person, newHobbie) {
    person.hobbies.push(newHobbie);
}

const person = {
    nombre: prompt("Ingresa tu nombre: "),
    age: parseInt(prompt("Ingresa tu edad: ")),
    hobbies: [],
}

console.log(person);

do {
    const newHobbie = prompt("Ingresa tu hobbie: ");
    addHobbie(person, newHobbie);

} while (confirm("¿Querés ingresar otro hobbie?"))

console.log(person);

document.writeln(`<p class = "lead mt-3 ms-3" >Los hobbies de ${person.nombre} (${person.age} años) son: </p><ol class = "ms-3" >`)

for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`Cantidad de hobbies: ${person.hobbies.length}`);
    document.writeln(`<li>${person.hobbies[i]}</li>`);
}
document.writeln(`</ol>`)
