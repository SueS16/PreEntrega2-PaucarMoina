//Baby items
const pañales = 10;
const babero = 5;
const ropaVerano = 12;
const jugueteMusical = 10;
const ropaInvierno = 15;
//Perfume items
const perfumeMia = 15;
const perfumeDancing = 7;
const perfumeGlowp = 10;
const perfumeOsadia = 10;
const perfumeSoyLatina = 15;

let totalVenta = 0;

function bienvenidos() {
  let categoryOption = "";
  while (categoryOption !== "3") {
    categoryOption = prompt(
      "¡Bienvenido a nuestra tienda virtual!, Por favor elije la categoria la cual desees comprar: \n 1. Articulos para bebés \n 2. Perfumería  \n 3. Salir"
    );
    switch (categoryOption) {
      case "1":
        babyItems();
        break;
      case "2":
        perfumeItems();
        break;
      case "3":
        alert("¡Gracias por visitarnos!");
        break;
      default:
        alert("La opción elegida no es valida, por favor intente nuevamente.");
        break;
    }
  }
}

function babyItems() {
  const itemParaCompra = prompt(
    "Por favor elija el producto que desea comprar:\n 1. Pañales $10 \n 2. Babero $5 \n 3. Ropa de Verano $12 \n 4. Jueguete Musical  $10 \n 5. Ropa de Invierno $15"
  );
  if (
    itemParaCompra == "1" ||
    itemParaCompra == "2" ||
    itemParaCompra == "3" ||
    itemParaCompra == "4" ||
    itemParaCompra == "5"
  ) {
    const cuantity = prompt(
      "Por favor elija la cantidad de productos que desea comprar"
    );
    buyItemsMale(itemParaCompra, cuantity);
  } else {
    alert("El producto que desea no existe, por favor intente nuevamente");
  }
}

function perfumeItems() {
  const itemParaCompra = prompt(
    "Por favor elija el producto que desea comprar:\n 1. Perfme Mía $15 \n 2. Perfume Dancing $7 \n 3. Perfume Glowp $10 \n 4. Perfume Osadía  $10 \n 5. Perfume Soy Latina $15"
  );
  if (
    itemParaCompra == "1" ||
    itemParaCompra == "2" ||
    itemParaCompra == "3" ||
    itemParaCompra == "4" ||
    itemParaCompra == "5"
  ) {
    const cuantity = prompt(
      "Por favor elija la cantidad de productos que desea comprar"
    );
    buyItemsFemale(itemParaCompra, cuantity);
  } else {
    alert("El producto que desea no existe, por favor intente nuevamente");
  }
}

function buyItemsMale(itemParaCompra, cuantity) {
  switch (itemParaCompra) {
    case "1":
      totalVenta = pañales * Number(cuantity);
      break;
    case "2":
      totalVenta = babero * Number(cuantity);
      break;
    case "3":
      totalVenta = ropaVerano * Number(cuantity);
      break;
    case "4":
      totalVenta = jugueteMusical * Number(cuantity);
      break;
    case "5":
      totalVenta = ropaInvierno * Number(cuantity);
      break;

    default:
      break;
  }
  printTotal(totalVenta);
}

function buyItemsFemale(itemParaCompra, cuantity) {
  switch (itemParaCompra) {
    case "1":
      totalVenta = perfumeMia * Number(cuantity);
      break;
    case "2":
      totalVenta = perfumeDancing * Number(cuantity);
      break;
    case "3":
      totalVenta = perfumeGlowp * Number(cuantity);
      break;
    case "4":
      totalVenta = perfumeOsadia * Number(cuantity);
      break;
    case "5":
      totalVenta = perfumeSoyLatina * Number(cuantity);
      break;

    default:
      break;
  }
  printTotal(totalVenta);
}

function printTotal(totalVenta) {
  console.log(totalVenta);
  alert(
    "el total de su compra es $" +
      totalVenta +
      ". Gracias por comprar con nosotros. \n"
  );
}

bienvenidos();