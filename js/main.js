function mostrarLista(lista){
    console.log("\n-----------LISTA DE COMPRAS-----------\n");
    for (let i = 0; i < lista.length; i++) {
        console.log("Prod.: #" + lista[i].id + " - Nombre "+ lista[i].getNombre().toUpperCase() + 
        ", Cant.: " + lista[i].getCantidad() + 
        ", Precio: $" + lista[i].getPrecio() + 
        ", SubTotal: " + lista[i].subtotal() + "\n");
    }
}

function mostrarAporte(aportes){
    let mensaje ='';
    for (let i = 0; i < aportes.length; i++) {
        mensaje += (i+1) + ") " + aportes[i].nombre.toUpperCase() + " -> $" + aportes[i].aporte + "\n";
    }
    return mensaje;
} 

function calcularTotal(lista){
    let total = 0;
    for (const e of lista) {
        total += e.subtotal();
    }
    return total;
}

function buscarProd(id) {
    for (let i = 0; i < lista.length; i++) {
        if(lista[i].getId() == id){
            return i;
        }    
    }
    return -1;
}

function actualizarPrecio(lista){
    let prod = prompt("Ingrese el ID del producto a actualizar: ");
    let i = buscarProd(prod);

    if (i>-1) {
        let nuevo_precio = prompt("Ingrese precio de "+ lista[i].getNombre().toUpperCase() + ": ");
        lista[i].setPrecio(nuevo_precio);
        alert("Prod.: #" + lista[i].id + " - Nombre "+ lista[i].getNombre().toUpperCase() + 
        ", Cant.: " + lista[i].getCantidad() + 
        ", Precio: $" + lista[i].getPrecio() + 
        ", SubTotal: " + lista[i].subtotal() + "\n");     
    } else {
        alert("Ingreso de ID incorrecto.");
    }
}

function actualizarCantidad(lista){
    let prod = prompt("Ingrese el ID del producto a actualizar: ");
    let i = buscarProd(prod);

    if (i>-1) {
        let nuevo_cantidad = prompt("Ingrese cantidad de " + lista[i].getNombre().toUpperCase() + ": ");
        lista[i].setCantidad(nuevo_cantidad);
        alert("\nProd.: #" + lista[i].id + " - Nombre "+ lista[i].getNombre().toUpperCase() + 
        ", Cant.: " + lista[i].getCantidad() + 
        ", Precio: $" + lista[i].getPrecio() + 
        ", SubTotal: " + lista[i].subtotal() + "\n");
    } else {
        alert("ID incorrecto.");
    }
}

function dividirGastos(lista, aportes) {
    let total = calcularTotal(lista);
    let personas = aportes.length;
    let cuota = total / personas;
    let dif;

    console.log("\n-----------CUOTA: $" + cuota + "-----------\n\n");

    let i=0;
    while (i<aportes.length) {
        dif = aportes[i].aporte - cuota;
        if(dif>0){
            console.log(aportes[i].nombre + " puso de mas $" + dif);
        }
        else if (dif <0){
            console.log(aportes[i].nombre + " debe $" + dif*(-1));
        }
        else{
            console.log(aportes[i].nombre + " puso lo justo");
        }

        i++;
    }

}

function agregarProducto(lista){
    let nuevo = new Producto();
    nuevo.setId(prompt("Ingrese un ID unico: "));
    nuevo.setNombre(prompt("Ingrese un nombre: "));
    nuevo.setCantidad(prompt("Ingrese la cantidad: "));
    nuevo.setPrecio(prompt("Ingrese precio: "));
    lista.push(nuevo);
}

function mostrarProducto(lista, prod){
    let j = -1; // Indice buscado
    for (let index = 0; index < lista.length && j<0; index++) {
        if(lista[index].getNombre().toUpperCase() == prod.toUpperCase()) {
            j = index;
        }        
    }
    if( j>-1){
        alert("Prod.: #" + lista[j].id + " - Nombre "+ lista[j].getNombre().toUpperCase() + 
        ", Cant.: " + lista[j].getCantidad() + 
        ", Precio: $" + lista[j].getPrecio() + 
        ", SubTotal: " + lista[j].subtotal() + "\n");
    }
    else{
        alert("No se encuentra producto ingresado.");
    }
}

function mostrarMenu() {
    let respuesta = prompt("MENÚ PRINCIPAL \n1) Mostrar Lista de Compras. \n2) Mostrar Aportes. \n3) Total del azado. \n4) Actualizar Precio de Producto. \n5) Actualizar Cantidad de Producto. \n6) Dividir Gastos. \n7) Buscar Producto. \n8) Agregar Producto. \n9) Salir.");

    switch (respuesta) {
        case '1':
            mostrarLista(lista);
            break;

        case '2':
            alert("\n-----------APORTES-----------\n" + mostrarAporte(aportes));
            ;
        break;

        case '3':
            confirm("Total: $" + calcularTotal(lista));
        break;

        case '4':
            actualizarPrecio(lista);
        break;
        
        case '5':
            actualizarCantidad(lista);
        break;

        case '6': 
            dividirGastos(lista, aportes);
        break;

        case '7':
            mostrarProducto(lista, prompt("Ingrese nombre del producto a mostrar: "));
        break;
        
        case '8':
            agregarProducto(lista);
        break;

        case '9': 
            respuesta = false;
        break;

        default:
            alert("\nIngreso incorrecto. Vuelva a intentarlo.");
            respuesta = true;
            break;
    }

    return respuesta;
}


/*PROGRAMA*/

/*Array de aportes harcodeado*/

const aportes = [
  {nombre: "Ezequiel", aporte: 19262.5},
  {nombre: "Mauro", aporte: 10000},
  {nombre: "Sofía", aporte: 30000},
  {nombre: "Hernan", aporte: 7000}
];

/*Array de Producto harcodeado.*/

let lista = []; // o let lista = new Array();

lista.push(new Producto(1, "Tira de asado", 20000, 1));
lista.push(new Producto(2, "Vacío", 13250, 1));
lista.push(new Producto(3,"Chorizo", 2000, 4));
lista.push(new Producto(4,"Pan", 2500, 4));
lista.push(new Producto(5,"Tomates", 600, 2));
lista.push(new Producto(6,"Lechuga", 500, 1));
lista.push(new Producto(7,"Agua 1.5L", 1500, 4));
lista.push(new Producto(8,"Fernet 750ML", 12500, 1));
lista.push(new Producto(9,"Coca Cola 1.5L", 2800, 2));


let control = true;
while (control) {
    control = mostrarMenu();  
}