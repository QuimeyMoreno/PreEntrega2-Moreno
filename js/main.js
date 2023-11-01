// Objetos
class Producto {
    
    constructor(nombre,precio,codigo){
        this.nombre = nombre;
        this.precio = precio;
        this.codigo = codigo;
    }
}

// Inicio
const listaProductos = [
    new Producto("Pancho", 400, 1),
    new Producto("Hamburguesa", 400, 2),
    new Producto("Chico", 450, 3),
    new Producto("Salvado Chico", 500, 4),
    new Producto("Grande", 700, 5),
    new Producto("Salvado Grande", 750, 6),
]

const boleta = [];

let operacion = prompt("Que operación desea realizar? 1- Realizar una boleta / 2- Ver el total de la boleta / 0- Quiere SALIR");


    while (operacion != 0){
        switch(operacion){
            case "1":
                realizarBoleta();
                break;
            
            case "2":
                finalizarBoleta();
                break;
            
            default:
                alert("El numero que selecciono no corresponde a ninguna operacion");
                break;
        }

        operacion = prompt("Que operación desea realizar? 1- Realizar una boleta / 2- Ver el total de la boleta / 0- Quiere SALIR");
    }
   
    



// Funciones


function productoEnSistema(codigoDelProducto){
    let encontrado = false;

    for(const producto of listaProductos){
        if(producto.codigo === codigoDelProducto){
            encontrado = true;
            break;
        }
    }
    return encontrado;
}

function realizarBoleta() {
    let ingreseProducto = Number(prompt("1) Ingrese un el codigo del producto. 2) Escriba 0 para SALIR"));

    while(ingreseProducto != "0"){
        while(!productoEnSistema(ingreseProducto)){
            ingreseProducto = prompt("El producto ingresado no existe en el sistema. Ingrese otro codigo:");
        }

        let productoSeleccionado = listaProductos.find(producto => producto.codigo === ingreseProducto);
        let cantidad = Number(prompt("Ingrese la cantidad"));

        let nombre = productoSeleccionado.nombre;
        let total = cantidad * productoSeleccionado.precio;

        boleta.push({
            nombre: productoSeleccionado.nombre,
            cantidad: cantidad,
            total: total,
            precio: productoSeleccionado.precio,
        });

        alert("PRODUCTO AGREGADO CON ÉXITO :D");

        
        ingreseProducto = Number(prompt("1) Ingrese un el codigo del producto. 2) Escriba 0 para SALIR"));
    }
    
}


function finalizarBoleta(){
    let mensaje = "Los productos que agregó son: \n";

    for (const productoAgregadosALaBoleta of boleta){
        mensaje += productoAgregadosALaBoleta.cantidad + " " + productoAgregadosALaBoleta.nombre + " " + productoAgregadosALaBoleta.precio + " = $" +  productoAgregadosALaBoleta.total + " \n";
    }
    alert(mensaje);

    const totalBoleta = boleta.reduce( (acc, producto) => {

        acc += producto.total;
    
        return acc;
    }, 0);

    alert("El total de la boleta es de: $" + totalBoleta);
}



