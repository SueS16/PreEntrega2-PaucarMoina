//Dar la Bienvenida a la Tienda

alert("¡Bienvenid@ a la Tienda Virtual Ayleen Store!");

//Primer Paso:

function seleccionar() {
    let categorias = prompt("En esta tienda podrás encontrar articulos variaos, mira nuestras categorias: \n 1. Comprar productos \n 2. Ver precios \n 3. Carrito de Compras \n 4. Metodo de Pago");
    if (categorias == "1") {
        let escogerProductos1 = prompt("Escoge los productos que deseas llevar: \n A. Ropa Bebe \n B. Perfumes \n C. Volver a Inicio");
        if (escogerProductos1 == "A") {
            function RopaBebe (nombre, precios, medida){
                this.nombre = nombre;
                this.precios = precios;
                this.tamaño = medida;
            }

            let perfume = [
                {nombre: "Recien Ncido", precio: "30", tamaño:"pequeño"},
                {nombre: "Talla 2", precio: "30", tamaño:"2"},
                {nombre: "Talla 4", precio: "30", tamaño:"4"},
                {nombre: "Talla 6", precio: "30", tamaño:"6"},
            ]

        }else if (escogerProductos1 == "B") {
            function Perfumes (nombre, precio, medida){
                this.marca = nombre;
                this.precio = precio;
                this.tamaño = medida;
            }

            let perfume = [
                {nombre: "Soy Glouw", precio: "30", tamaño:"400ml"},
                {nombre: "Soy Latina", precio: "30", tamaño:"400ml"},
                {nombre: "Soy Glouw", precio: "30", tamaño:"400ml"},
                {nombre: "Soy Glouw", precio: "30", tamaño:"400ml"},
            ]

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
            let terminar = alert("Gracias por su preferencia")
            break

        }else if(edad < 18) {
            alert("No puedes usar una tarjeta");
            let terminar = alert("Gracias por su preferencia")
            break
        }

    }
}

tarjetaCompras();





let perfumes = [
    {
        id: 1,
        nombre: "Perfume 1",
        precio: 89.90,
        imagen: "./img/esika1"
    },
    {
        id: 1,
        nombre: "Perfume 1",
        precio: 92.0,
        imagen: "./img/esika2"
    },
    {
        id: 1,
        nombre: "Perfume 1",
        precio: 79.0,
        imagen: "./img/yanbal1"
    },
    {
        id: 1,
        nombre: "Perfume 1",
        precio: 100.0,
        imagen: "./img/yanbal2"
    }

]

//BREAK: Finaliza la sentencia actual y transfiere el control del programa a la siguiente sentencia de la sentencia finalizada.
// \n Dar saltos, espacios entre líneas.
//
