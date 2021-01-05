function CreateEmail() {
    return this.name + this.surname + "@clubdelcodigo.com";
}

function CreateArray() {
    var num_clients = prompt('Ingrese el numero de clientes que desea ingresar');
    var clients = [];
    for (i=0; i < num_clients; i++) {
        clients.push(null);
    }
    return clients;
}

var clients = CreateArray();

