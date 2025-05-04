class Rectangulo{
    #ancho 
    #alto

    constructor(ancho, alto){
        this.#ancho = ancho;
        this.#alto = alto;
    }

    get width(){
        return this.#ancho;
    }

    get height(){
        return this.#alto;
    }

    set width(newWidth){
        this.#ancho = newWidth;
    }

    set height(newHeight){
        this.#alto = newHeight;
    }

    mostrarRectangulo(){
        document.writeln(`
            <p><b>Ancho:</b> ${this.#ancho} metros</p>
            <p><b>Altura:</b> ${this.#alto} metros</p>`);
    }

    calcularPerimetro(){
        const perimetro = 2 * this.#ancho + 2 * this.#alto;
        return document.writeln(`<p><b>Perímetro del rectángulo:</b> ${perimetro} metros.</p>`);
    }

    calcularArea(){
        const area = this.#ancho * this.#alto;
        return document.writeln(`<p><b>Área del rectángulo:</b> ${area} metros.</p>`);
    }
}

const ancho = parseInt(prompt("Ingresa el ancho del rectángulo: "));
const alto = parseInt(prompt("Ingresa el alto del rectángulo: "));
const rectanguloUno = new Rectangulo(ancho, alto);
rectanguloUno.mostrarRectangulo();
rectanguloUno.calcularPerimetro();
rectanguloUno.calcularArea();