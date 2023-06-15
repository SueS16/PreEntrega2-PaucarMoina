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
        imagen: "./img/esika1",
    },
    {
        id: 2,
        nombre: "Perfume 1",
        precio: 92.0,
        imagen: "./img/esika2",
    },
    {
        id: 3,
        nombre: "Perfume 1",
        precio: 79.0,
        imagen: "./img/yanbal1",
    },
    {
        id: 4,
        nombre: "Perfume 1",
        precio: 100.0,
        imagen: "./img/yanbal2",
    },
];

const contenedor = document.getElementById("contaPerfumes")
perfumes.forEach((perfume,indice)=>{
    let card=document.createElement("div");
    card.classList.add("card","col.sm.12","col-lg-3")
    card.innerHTML=`<img src="${perfume.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${perfume.nombre}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#cart" class="btn btn-info" onClick="futuraFuncion(${indice})>Agregar</a>
    </div>`;
    contenedor.appendChild(card); 
});

let modalCarrito = document.getElementById("cart");

const crearCarrito=()=>{
    modalCarrito.className = "cart"
    modalCarrito.innerHTML = ""
    carritoDeCompras.forEach((perfume, indice) =>{
        const carritocontainer = document.createElement("div")
        carritocontainer.className("perfume-carrito");
        carritocontainer.innerHTML=`<img src="${perfume.imagen}" class="card-img" alt="..."
        />
    <div class="products-details">${
        perfume.nombre}
    </div>
    <div class="product-details"> Cantidad: ${perfume.cantidad}</div>
    <div class="product-details"> Precio:${perfume.precio}</div>
    <div class="product-details"> Subtotal: ${
        perfume.precio*perfume.cantidad}</div>
    <button class="btn btn-info" id="remove-prudct" onClick="removeProduct(${indice})">Eliminar producto</button>`;
    });

    modalCarrito.appendChild(carritocontainer);
  


}


let carritoDeCompras = []




















//BREAK: Finaliza la sentencia actual y transfiere el control del programa a la siguiente sentencia de la sentencia finalizada.
// \n Dar saltos, espacios entre líneas.
//
