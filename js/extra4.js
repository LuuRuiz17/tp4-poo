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

function findBestGrade(students) {
    let maxGrade = 0;
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students[i].grades.length; j++) {
            if (students[i].grades[j] > maxGrade) {
                maxGrade = students[i].grades[j];
            }
        }
    }
    console.log(`Nota más alta: ${maxGrade}`);

    switch (maxGrade) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            return maxGrade + " (D)"
            break;
        case 5:
        case 6:
            return maxGrade + " (C)"
            break;
        case 7:
        case 8:
            return maxGrade + " (B)"
            break;
        case 9:
        case 10:
            return maxGrade + " (A)"
            break;

    }
}

function countGrades(students) {
    let maxNGrades = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grades.length > maxNGrades) {
            maxNGrades = students[i].grades.length
        }
    }
    console.log(`Cantidad máxima de notas: ${maxNGrades}`);
    return maxNGrades;
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

document.writeln(`<table class="table table-responsive w-75 mt-3 m-auto style="table-layout: fixed">
    <thead>
        <tr>
            <th class="bg-primary-subtle text-center border border-1 border-dark tableTitle">Nombre</th>
            <th class="bg-primary-subtle text-center border border-1 border-dark tableTitle">Curso</th>
            <th class="bg-primary-subtle text-center border border-1 border-dark w-50">Calificaciones</th>
            <th class="bg-primary-subtle text-center border border-1 border-dark tableTitle">Clasificación</th>
        </tr>
    </thead>
    <tbody>
`);

for (let i = 0; i < students.length; i++) {
    document.writeln(`<tr>`);

    document.writeln(`<td class="border-1 border-dark text-center">${students[i].nombre}</td>`);
    document.writeln(`<td class="border-1 border-dark text-center">${students[i].curso}</td>`);
    document.writeln(`<td class="border-1 border-dark p-0 text-center">`);
    document.writeln(`<table class="w-100 m-0" style="table-layout: fixed;"><tr>`);

    for (let j = 0; j < countGrades(students); j++) {
        if (students[i].grades[j]) {
            if (j != countGrades(students) - 1) {
                document.writeln(`<td class="border-end border-dark text-center p-2">${students[i].grades[j]}</td>`);
            } else {
                document.writeln(`<td class="text-center p-2">${students[i].grades[j]}</td>`);
            }
        } else {
            document.writeln(`<td class="border-end border-dark text-center p-2"> - </td>`);
        }
    }


    document.writeln(`</tr></table>`);
    document.writeln(`</td>`);
    document.writeln(`<td class="border-1 border-dark text-center">${findBestGrade(students)}</td>`);
    document.writeln(`</tr>`);
}

document.writeln(`</tbody></table>`);


findBestGrade(students);


