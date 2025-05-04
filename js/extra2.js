/* Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, 
escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa un bucle para recorrer 
el array. Usa prompt para ingresar los datos de los estudiantes. */

function calcularMedia(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade;
    }
    return (sum / students.length).toFixed(2);
}

const students = [];

do {
    const newAlumn = {
        nombre: prompt("Nombre del alumno: "),
        grade: parseFloat(prompt("Calificación del alumno")),
    };
    students.push(newAlumn);
} while (confirm("¿Querés agregar otro alumno?"));

console.log(students);
console.log(`Promedio de los estudiantes: ${calcularMedia(students)}`);

document.writeln(`<h5 class = "mt-3">Calificación de los Alumnos</h5>`);

document.writeln(`<ul>`);

for(let i = 0; i < students.length; i++){
    document.writeln(`<li>${students[i].nombre}: ${students[i].grade}</li>`);
}

document.writeln(`</ul>`);

document.writeln(`<h5 class = "mt-3">Promedio de los estudiantes:</h5>${calcularMedia(students)}`);