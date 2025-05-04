const auto = {
    marca: prompt("Ingresa la marca del auto: "),
    modelo: prompt("Ingresa el modelo del auto: "),
    color: prompt("Ingresa e color del auto: "),
    estado: false, 

    encender: function(){
        if(auto.estado === false){
            document.writeln(`<p class = "mt-2">Auto encendido</p>`);
            this.estado = true;
        }
    },

    apagar: function(){
        if(auto.estado === true){
            document.writeln(`<p class = "mt-2">El auto se apagó</p>`);
            this.estado = false;
        }
    }
}

auto.encender();
auto.apagar();