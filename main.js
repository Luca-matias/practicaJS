const productos = ["pizza", "hamburguesa", "sandwich"];

const listaProductos = document.getElementById("listaProductos");
const carritoHTML = document.getElementById("carrito");
const mensaje = document.getElementById("mensaje");
const input = document.getElementById("productoInput");
const boton = document.getElementById("comprarBtn");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Mostrar productos que estan disponibles
productos.forEach((producto) => {
  const li = document.createElement("li");
  li.textContent = producto;
  listaProductos.appendChild(li);
});

// Mostrar carrito de compras
function mostrarCarrito() {
  carritoHTML.innerHTML = "";
  carrito.forEach((prod) => {
    const li = document.createElement("li");
    li.textContent = prod;
    carritoHTML.appendChild(li);
  });
}

mostrarCarrito();

// Evento comprar
boton.addEventListener("click", () => {
  const eleccion = input.value.toLowerCase();

  if (productos.includes(eleccion)) {
    carrito.push(eleccion);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mensaje.textContent = `usted compro: ${eleccion}`;
    mensaje.style.color = "green";
    mostrarCarrito();
  } else {
    mensaje.textContent = `El producto no está disponible: ${eleccion}`;
    mensaje.style.color = "red";
  }

  input.value = "";
});


