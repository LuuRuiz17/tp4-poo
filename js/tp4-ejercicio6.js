/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar
la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

// function morePages(){
//     if()
// }

class Book {
    #isbn;
    #title;
    #author;
    #pages;

    constructor(isbn, title, author, pages) {
        this.#isbn = isbn;
        this.#title = title;
        this.#author = author;
        this.#pages = pages;
    }

    get isbn() {
        return this.#isbn;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get pages() {
        return this.#pages;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }

    set author(newAuthor) {
        this.#author = newAuthor;
    }

    set pages(newPages) {
        this.#pages = newPages;
    }

    mostrarLibro(){
        document.writeln(`<p>El libro "${this.#title}" con ISBN ${this.#isbn} creado por el autor ${this.#author} tiene ${this.#pages} páginas.</p>`);
    }
}

let maxLenght = 0;
let libroMasLargo = "";

for(let i = 0; i < 2; i++){
    const isbn = prompt("Ingresa el ISBN del libro: ");
    const title = prompt("Ingresa el título del libro: ");
    const author = prompt("Ingresa el autor del libro: ");
    const pages = parseInt(prompt("Ingresa la cantidad de páginas del libro: "));
    const book = new Book(isbn, title, author, pages);
    book.mostrarLibro();
    if(pages > maxLenght){
        maxLenght = pages;
        libroMasLargo = book.title; 
    }
}

document.writeln(`El libro más largo es: ${libroMasLargo}`);