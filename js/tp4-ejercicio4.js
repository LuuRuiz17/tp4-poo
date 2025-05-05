class Product{
    #code
    #name 
    #price

    constructor(code, name, price){
        this.#code = code;
        this.#name = name;
        this.#price = price;
    }

    get code(){
        return this.#code;
    }

    set code(newCode){
        this.#code = newCode;
    }

    get price(){
        return this.#price;
    }

    set price(newPrice){
        this.#price = newPrice;
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        this.#name = newName;
    }

    showInfo(){
        document.writeln(`<p><b>- Nombre del Producto:</b> ${this.#name}</p>`);
        document.writeln(`<p><b>- Precio del Producto:</b> ${this.#price}</p>`);
        document.writeln(`<p><b>- Código del Producto:</b> ${this.#code}</p><br>`);
    }

}

const products = [];

for(let i = 0; i < 3; i++){
    const name = prompt("Ingresa el nombre del producto: ");
    const code = parseInt(prompt("Ingresa el código del producto: "));
    const price = parseFloat(prompt("Ingresa el precio del producto: "));
    const product = new Product(code, name, price);
    products.push(product);
    products[i].showInfo();
}

