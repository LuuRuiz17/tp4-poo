/* Crea un objeto libro que tenga propiedades título, autor, año y género. Luego, escribe una función que reciba 
un array de libros y un género y devuelva un array con los libros de ese género usando filter. Usa prompt para 
ingresar los datos de los libros y el género. */

function filtrarPorGenero(arrayLibros, genero) {
    const arrayFiltrado = arrayLibros.filter((itemLibro) => itemLibro.genero === genero);
    return arrayFiltrado;
}

function mostrarLibros(libros) {
    document.writeln(`<table class=" table table-responsive m-auto border border-1 border-dark mt-3">
        <thead><tr>
            <th class="bg-primary-subtle border border-1 border-dark text-center">Título</th>
            <th class="bg-primary-subtle border border-1 border-dark text-center">Autor</th>
            <th class="bg-primary-subtle border border-1 border-dark text-center">Año de Publicación</th>
            <th class="bg-primary-subtle border border-1 border-dark text-center">Género</th>
        </tr></thead><tbody>`);

    for (let i = 0; i < libros.length; i++) {
        document.writeln(`<tr>
            <td class="border border-1 border-dark text-center">${libros[i].titulo}</td>
            <td class="border border-1 border-dark text-center">${libros[i].autor}</td>
            <td class="border border-1 border-dark text-center">${libros[i].anio}</td>
            <td class="border border-1 border-dark text-center px-2">${libros[i].genero}</td>
        </tr>`);
    }
    document.writeln(`</tbody></table>`);
}

function mostrarLibrosPorGenero(librosPorGenero, generoSolicitado) {
    document.writeln(`<div class = "container"><h3 class = "mt-3">Libros del Género ${generoSolicitado}: </h3>`);
    for (let i = 0; i < librosPorGenero.length; i++) {
        document.writeln(`<ol class = "fw-bold"><li>${librosPorGenero[i].titulo}</li></ol>`);
    }
    document.writeln(`</div>`);
}

const libros = [];

do {
    const titulo = prompt("Ingresa el título del libro: ");
    const autor = prompt("Ingresa el autor del libro: ");
    const anio = prompt("Ingresa el año: ");
    const genero = prompt("Ingresa el género del libro: ");

    libros.push({
        titulo,
        autor,
        anio,
        genero
    });

} while (confirm("¿Querés ingresar otro libro?"));

console.log(libros);
const generoSolicitado = prompt("Ingresa el género que deseas buscar: ");
const librosPorGenero = filtrarPorGenero(libros, generoSolicitado);
console.log(librosPorGenero);
mostrarLibros(libros);
mostrarLibrosPorGenero(librosPorGenero, generoSolicitado);

