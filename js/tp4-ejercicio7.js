/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

*/


function showMenu() {
    const schedule = new Schedule();
    let option;

    do {
        option = prompt(
            "Menú de Agenda:\n" +
            "1. Añadir contacto\n" +
            "2. Verificar si un contacto existe\n" +
            "3. Listar contactos\n" +
            "4. Buscar contacto por nombre\n" +
            "5. Eliminar contacto\n" +
            "6. Verificar si la agenda está llena\n" +
            "7. Mostrar espacios disponibles\n" +
            "8. Salir"
        );

        switch (option) {
            case "1":
                const name1 = prompt("Ingrese el nombre del contacto:");
                const phone1 = prompt("Ingrese el teléfono del contacto:");
                const newContact = new Contact(name1, phone1);
                schedule.addContact(newContact);
                break;

            case "2":
                const name2 = prompt("Ingrese el nombre del contacto a verificar:");
                const checkContact = new Contact(name2, "");
                
                if (schedule.contactExists(checkContact)) {
                    document.writeln("<p>El contacto existe.</p>");
                } else {
                    document.writeln("<p>El contacto no existe.</p>");
                }
                break;
                

            case "3":
                schedule.listContacts();
                break;

            case "4":
                const searchName = prompt("Ingrese el nombre a buscar:");
                schedule.searchContact(searchName);
                break;

            case "5":
                const deleteName = prompt("Ingrese el nombre del contacto a eliminar:");
                const deleteContact = new Contact(deleteName, "");
                schedule.deleteContact(deleteContact);
                break;

            case "6":
                if (schedule.isFull()) {
                    document.writeln("<p>La agenda está llena.</p>");
                } else {
                    document.writeln("<p>Todavía hay espacio en la agenda.</p>");
                }
                break;
                

            case "7":
                document.writeln(`<p>Espacios disponibles: ${schedule.availableSlots()}</p>`);
                break;

            case "8":
                alert("Saliendo del programa...");
                break;

            default:
                alert("Opción inválida. Intente nuevamente.");
        }

    } while (option !== "8");
}

class Contact {
    #name;
    #phone;

    constructor(name, phone) {
        this.#name = name;
        this.#phone = phone;
    }

    get name() {
        return this.#name;
    }

    get phone() {
        return this.#phone;
    }

    set name(newName) {
        this.#name = newName;
    }

    set phone(newPhone) {
        this.#phone = newPhone;
    }

    showContact() {
        return `Nombre: ${this.#name}. <br>Teléfono: ${this.#phone}`;
    }
}

class Schedule {
    #contacts;
    #capacity;

    constructor(capacity = 10) {
        this.#capacity = capacity;
        this.#contacts = [];
    }

    addContact(contact) {
        if (this.isFull()) {
            document.writeln(`<p>La agenda está llena.</p>`)
        }

        if (this.contactExists(contact)) {
            alert("<p>Este contacto ya existe.</p>");
            return;
        }

        this.#contacts.push(contact);
        document.writeln("<p>Contacto agregado correctamente.</p>");
    }

    contactExists(contact) {
        for (let i = 0; i < this.#contacts.length; i++) {
            if (this.#contacts[i].name.toLowerCase() === contact.name.toLowerCase()) {
                return true;
            }
        }
        return false;
    }


    listContacts() {
        if (this.#contacts.length === 0) {
            document.writeln("<p>La agenda está vacía.</p>");
        } else {
            document.writeln("<h3>Lista de contactos:</h3>");
            document.writeln("<ul>");
            for (let i = 0; i < this.#contacts.length; i++) {
                document.writeln(`<li>${this.#contacts[i].showContact()}</li>`);
            }
            document.writeln("</ul>");
        }
    }

    searchContact(name) {
        let contact = null;
        for (let i = 0; i < this.#contacts.length; i++) {
            if (this.#contacts[i].name.toLowerCase() === name.toLowerCase()) {
                contact = this.#contacts[i];
                break;
            }
        }

        if (contact) {
            document.writeln(`<p>El número de ${name} es: ${contact.phone}</p>`);
        } else {
            document.writeln(`<p>No se encontró ningún contacto con el nombre "${name}".</p>`);
        }
    }

    deleteContact(contact) {
        let found = false;
    
        for (let i = 0; i < this.#contacts.length; i++) {
            if (this.#contacts[i].name.toLowerCase() === contact.name.toLowerCase()) {
                this.#contacts.splice(i, 1);
                found = true;
                break;
            }
        }
    
        if (found) {
            document.writeln("<p>Contacto eliminado correctamente.</p>");
        } else {
            document.writeln("<p>No se encontró el contacto.</p>");
        }
    }
    

    isFull() {
        let full = false
        if (this.#contacts.length >= this.#capacity) {
            full = true;
        }
        return full;
    }

    availableSlots() {
        return this.#capacity - this.#contacts.length;
    }
}

showMenu();
