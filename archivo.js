const productos = ["pizza", "hamburguesa", "sandwich"];

function mostrarProductos() {
  alert("Productos disponibles: " + productos.join(", "));
}

let seguir = true;

while (seguir) {
  mostrarProductos();

  let eleccion = prompt("¿Qué producto desea comprar?");
  console.log("el usuario eligio: ", eleccion);
  
  if (productos.includes(eleccion)) {
    console.log("El usuario eligió: ", eleccion);
    alert("Has elegido: " + eleccion);
    seguir = false; 
  } else {
    alert("Producto no disponible. Por favor, elige uno de la lista.");
  }

  seguir = confirm("desea comprar otro producto?");
}

alert("gracias por su compra");
