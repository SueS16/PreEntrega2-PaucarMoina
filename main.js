
//Dar la Biendenida a la Tienda

    alert("¡Bienvenid@ a la Tienda Virtual Ayleen Store!");

//Primer Paso JS.

function seleccionar(){
    while (true) {
        let categorias = prompt ("En esta tienda podrás encontrar articulos variaos, mira nuestras categorias: \n 1. Comprar productos \n 2. Ver precios \n 3. Carrito de Compras \n 4. Metodo de Pago");
        if(categorias == "1"){
            let escogerProductos = prompt ("Escoge los productos que deseas llevar: \n A. Ropa Bebe \n B. Regalos \n C. Volver a Inicio");
            if(escogerProductos == "A"){

            }
            else if (escogerProductos == "B"){}
            else if (escogerProductos == "C"){

            }
        }else if(categorias == "2"){
            alert ("Ve aquí nuestros precios más accesibles");
        }else if(categorias == "3"){
            alert("Revisa tus productos agregados al carrito");
        }else if(categorias == "4"){
            tarjetaCompras()
        }
    }
}

seleccionar();

//Segundo Paso

function tarjetaCompras(){
    let edad = 18;
    
    for(let edad = 18; edad >= 18; edad ++){
        
        edad = prompt("Tiene que ser mayor de edad para continuar, Ingrese su edad, por favor:");
        
        if(edad >= 18){prompt ("Puedes usar una tarjeta de Crédito/Débito \n Ingresa tu N° de Tarjeta:" );
        }else{
            alert("No puedes usar una tarjeta");
            let adios = alert("Gracias por su preferencia");

        } 
    }
}

tarjetaCompras();


let adios = alert("Gracias por su preferencia");
//Tercer Paso
    
