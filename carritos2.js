const carrito = {montoTotal: 10, productos: ["Leche"]};

class Changuito {
    montoTotal = 0;
    productos = [];
}

const Changuito1 = new Changuito();

function agregarProducto(nombre, precio, unidades){
    //if(carrito.productos === nombre){ ((( ver no funcionaba )))
    if (carrito.productos.includes(nombre)) {    
        console.log (`El Producto ${nombre} ya existe en el carro` )
    }
    else{
        carrito.productos= carrito.productos + ", " + nombre;
        carrito.montoTotal= carrito.montoTotal + precio * unidades;
    }
    }
    

    console.log (carrito)

    agregarProducto("Leche", 5, 2)