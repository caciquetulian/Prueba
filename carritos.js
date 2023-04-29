const carrito = {montoTotal: 10, productos: ["Leche"]};

class Changuito {
    montoTotal;
    productos;
}

const Changuito1 = new Changuito();

function agregarProducto(nombre, precio, unidades){
    carrito.productos= carrito.productos + ", " + nombre
    carrito.montoTotal= carrito.montoTotal + precio * unidades
    }

    console.log (carrito)

    agregarProducto('Azucar', 5, 2)