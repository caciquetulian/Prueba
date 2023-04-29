const carrito = {montoTotal: 10, productos: ["Leche"]};

class Changuito {
    montoTotal;
    productos;
}

const Changuito1 = new Changuito();

function agregarProducto(nombre, precio, unidades){
    const existente = this.prductos.find (producto => producto.nombre === nombre);
    if(existente){
        console.log (`El Producto ${nombre} ya existe en el carro` )
    }
    else{
        carrito.productos= carrito.productos + ", " + nombre;
        carrito.montoTotal= carrito.montoTotal + precio * unidades;
    }
    }
    

    console.log (carrito)

    agregarProducto("Papas", 5, 2)