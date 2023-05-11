
//Dar la Biendenida al comprador
function bienvenida() {
    alert("¡Bienvenid@ a la Tienda Virtual Ayleen Store!");
}

function comprarProducto() {
    enunciado = prompt("Nuestros productos son: \n 1: Ropa para bebes \n 2: Cuidado Personal \n 3: Regalos \n 4: Carrito de Compras");
    if (enunciado === "1") {
        alert("escogiste Ropa para bebes para tu compra por un total de " + ropaBebe * 1.18);

    } else if (enunciado === "2") {
        alert("escogiste Cuidado Personal para tu compra por un total de " + cuiPersonal * 1.18);
    
    } else if (enunciado === "3") {
        alert("escogiste Regalos Varios para tu compra por un total de " + regVarios * 1.18);
    
    } else if (enunciado === "4") {        
    }
    opciones = prompt("\n 1: Seguir Comprando \n 2: Ir a Carrito de Compras");

}



function carritoCompras() {
    let nombre = prompt("ingrese su nombre para continuar ");
    alert("Hola! " + nombre + " bienvenido a tu carrito de compras!");


    carrito = prompt("Paga Aquí con: \n 1: Yape (forma de pago virtual) \n 2: Tarjeta de Crédito/Débito \n 3: Efectivo \n 4: Volver a Inicio " )

    if (carrito === "1") {
        alert("Yapea en el siguiente QR");
    } else if (carrito === "2") {
        alert("Debes ser mayor de edad para usar una tarjeta, ingresa tu edad");
    } else if (carrito === "3") {
        alert("Recoge tus compras en nuestro local y nos cancelas allí mismo!");
    }
    


}

//main, acá arranca el programa
let enunciado;
let carrito;
let ropaBebe = 200;
let cuiPersonal = 300;
let regVarios = 400;
bienvenida();
comprarProducto();
carritoCompras();

let opciones = prompt("\n 1: Seguir Comprando \n 2: Ir a Carrito de Compras");
