/* RECUPERATORIO
Hacer un programa que simule la compra que hace un cliente en un supermercado. 

El cliente va tener que ingresar por teclado la
  a) CANTIDAD de productos que va a llevar.
  b)PRODUCTOS que va a comprar. 
  c) PRECIO UNITARIO de cada producto.
  d)CANTIDAD A COMPRAR DE CADA producto.

Finalizada la compra, el programa va a mostrar por pantalla el
  a) Detalle de la compra.
  b) Productos. 
  c) Cantidad. 
  d) Precio unitario.  
  e) Precio total.
 Dependiendo del monto comprado, el cliente participa de un sorteo:
 • si compra menos de 1000 no participa por nada
• si compra a partir de 1000 pero menos de 2000 participa un tv led
• si compra a partir de 2000 pero menos de 3000 participa por una moto 0k
• si compra a partir de 3000 participa por un 0km*/

//Declaro variables

let dimension: number = Number(
  prompt("Indique la cantidad de productos que desea ingresar")
);
let productos: string[] = new Array(dimension);
let precios: number[] = new Array(dimension);
let cantidadesProductos: number[] = new Array(dimension);
let subtotales: number[] = new Array(dimension);

//Realizo función para cargar productos y sumar total
let cargarCompra = (
  dimension: number,
  producto: string[],
  precio: number[],
  cantidadProducto: number[],
  subtotal: number[]
) => {
  let indice: number;
  let total: number = 0;

  for (indice = 0; indice < dimension; indice++) {
    producto[indice] = prompt("Ingrese el nombre del producto");
    precio[indice] = Number(prompt("Ingrese el valor para el vector" + indice));
    cantidadProducto[indice] = Number(
      prompt("Indique la cantidad de productos")
    );
    subtotal[indice] = precio[indice] * cantidadProducto[indice];

    total += subtotal[indice];
  }
  console.log(
    producto +
      " precio unitario " +
      precio +
      " x " +
      cantidadProducto +
      " subtotal " +
      subtotal
  );
  return total;
};

let total: number = cargarCompra(
  dimension,
  productos,
  precios,
  cantidadesProductos,
  subtotales
);
console.log("El total es " + total);

let mostrarBeneficio = (total: number) => {
  if (total >= 3000) {
    console.log("Usted participa por un 0 Km");
  }
  if (total >= 2000 && total < 3000) {
    console.log("Usted participa por una moto 0 Km");
  }
  if (total >= 1000 && total < 2000) {
    console.log("Usted participa por un tv Led");
  } else {
    console.log("Gracias por su compra");
  }
};

mostrarBeneficio(total);
