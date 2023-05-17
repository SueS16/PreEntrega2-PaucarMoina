//Dar la Bienvenida a la Tienda

alert("¡Bienvenid@ a la Tienda Virtual Ayleen Store!");

//Primer Paso:

function seleccionar() {
    let categorias = prompt("En esta tienda podrás encontrar articulos variaos, mira nuestras categorias: \n 1. Comprar productos \n 2. Ver precios \n 3. Carrito de Compras \n 4. Metodo de Pago");
    if (categorias == "1") {
        let escogerProductos1 = prompt("Escoge los productos que deseas llevar: \n A. Ropa Bebe \n B. Regalos \n C. Volver a Inicio");
        if (escogerProductos1 == "A") {

        }else if (escogerProductos1 == "B") {

        }else if (escogerProductos1 == "C") {
            let volverInicio = alert("Volver al Inicio");
            seleccionar(categorias);
        }
    }else if (categorias == "2") {
        let escogerProductos2 = prompt("Ve aquí nuestros precios más accesibles: \n A. Ofertas \n B. Rebajas \n C. Volver a Inicio");
        if (escogerProductos2 == "A") {

        }else if (escogerProductos2 == "B") {

        }else if (escogerProductos2 == "C") {
            seleccionar(categorias);
        }
    }else if (categorias == "3") {
        let escogerProductos3 = prompt("Revisa tus productos agregados al carrito: \n A. Ver Carrito \n B. Volver a Inicio");
        if (escogerProductos3 == "A") {

        }else if (escogerProductos3 == "B") {
            seleccionar(categorias);
        }
    } else if (categorias == "4") {
        tarjetaCompras();
    }
}
seleccionar();

//Segundo Paso:

function tarjetaCompras() {
    let edad = 18;
    for (let edad = 18; edad >= 18; edad ++) {
        edad = prompt("Tiene que ser mayor de edad para continuar, Ingrese su edad, por favor:");
        if (edad >= 18) {
            prompt("Puedes usar una tarjeta de Crédito/Débito \n Ingresa tu N° de Tarjeta:");
            adios(terminar);
            break

        }else if(edad < 18) {
            alert("No puedes usar una tarjeta");
            adios(terminar);
            break
        }

    }
}

tarjetaCompras();

//Tercer Paso

function adios(terminar) {
    alert("Gracias por su preferencia");
}

adios()

//BREAK: Finaliza la sentencia actual y transfiere el control del programa a la siguiente sentencia de la sentencia finalizada.
