
//Dar la Biendenida a la Tienda

function bienvenida() {
    alert("¡Bienvenid@ a la Tienda Virtual Ayleen Store!");
}

bienvenida();


//Primer Paso JS.

function seleccionar(){
    let categorias = prompt ("En esta tienda podrás encontrar articulos variaos, mira nuestras categorias: \n 1. Comprar productos \n 2. Ver precios \n 3. Carrito de Compras \n 4. Metodo de Pago");
    if(categorias === "1"){
        alert ("Escoge los productos que deseas llevar");
    }else if(categorias === "2"){
        alert ("Ve aquí nuestros precios más accesibles");
    }else if(categorias === "3"){
        alert("Revisa tus productos agregados al carrito");
    }else if(categorias === "4"){
        tarjetaCompras()
    }
}

seleccionar();

//Segundo Paso

function tarjetaCompras(){
    let edad = 18;
    
    edad = prompt("Ingrese su edad");
    
    if(edad >= 18){
        prompt ("Puedes usar una tarjeta de Crédito/Débito \n Ingresa tu N° de Tarjeta:" );
    }else{
        alert("No puedes usar una tarjeta");
    }
}

tarjetaCompras();


//Tercer Paso

function adios(){
    alert("Gracias por su preferencia");
}

adios();