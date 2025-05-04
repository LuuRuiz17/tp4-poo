/* Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). Escribe una función
que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. Usa un
bucle para calcular la calificación más alta del alumno y un switch para clasificar al alumno según su calificación
más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4). */

function addGrades(newAlumn) {
    do {
        const grade = parseFloat(prompt("Nota del alumno: "));
        newAlumn.grades.push(grade);
    } while (confirm("¿Desea agregar otra nota?"))
}

function findBestGrade(students){
    let maxGrade = 0;
    for(let i = 0; i < students.length; i++){
        for(let j = 0; j < students[i].grades.length; j++){
            if(students[i].grades[j] > maxGrade){
                maxGrade = students[i].grades[j];
            }
        }
    } 
    console.log(`Nota más alta: ${maxGrade}`);

    switch(maxGrade){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            document.writeln(`<p>Calificación más alta: ${maxGrade} (D)</p>`)
            break;
        case 5:
        case 6:
            document.writeln(`<p>Calificación más alta: ${maxGrade} (C)</p>`)
            break;
        case 7:
        case 8:
            document.writeln(`<p>Calificación más alta: ${maxGrade} (B)</p>`)
            break;
        case 9:
        case 10:
            document.writeln(`<p>Calificación más alta: ${maxGrade} (A)</p>`)
            break;

    }
}

const students = [];

do {
    const newAlumn = {
        nombre: prompt("Nombre del alumno: "),
        curso: prompt("Curso: "),
        grades: [],
    };

    students.push(newAlumn);
    addGrades(newAlumn);

} while (confirm("¿Querés agregar otro alumno?"));

for (let i = 0; i < students.length; i++) {
    document.writeln(`<p>Nombre del alumno: ${students[i].nombre}</p>`);
    document.writeln(`<p>Curso: ${students[i].curso}</p>`);
    document.writeln(`<p>Calificaciones:`);
    for (let j = 0; j < students[i].grades.length; j++) {
        if (j != students[i].grades.length - 1) {
            document.writeln(`${students[i].grades[j]} - `)
        } else {
            document.writeln(`${students[i].grades[j]}`);
        }
    }
    document.writeln(`</p>`)
}

findBestGrade(students);


