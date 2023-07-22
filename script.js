alert ('hola sneakerss') 

function algoritmoCondicional(numero) {
    if (numero > 0) {
      console.log("El número es positivo.");
    } else if (numero < 0) {
      console.log("El número es negativo.");
    } else {
      console.log("El número es cero.");
    }
  }
  
  function algoritmoCiclo() {
    for (let i = 1; i <= 5; i++) {
      console.log("Iteración " + i);
    }
  }
  
  function simuladorInteractivo() {
    let nombre = prompt("Ingrese su nombre:");
    let edad = prompt("Ingrese su edad:");
  
    if (edad >= 18) {
      alert("Hola " + nombre + ", eres mayor de edad.");
    } else {
      alert("Hola " + nombre + ", eres menor de edad.");
    }
  }
  

  algoritmoCondicional(10);
  algoritmoCiclo();
  simuladorInteractivo(); 

  // Función para obtener elementos por su selector
function getElement(selector) {
  return document.querySelector(selector);
}

// Función para crear elementos con atributos y contenido
function createElement(tagName, attributes, content) {
  const element = document.createElement(tagName);
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (content) {
    element.textContent = content;
  }
  return element;
}

// Objeto con la configuración del navbar
const navbarConfig = {
  brand: {
    text: 'sneakers arg',
    href: '#'
  },
  items: [
    { text: 'inicio', href: 'index.html' },
    { text: 'categorias', href: './snkarg/categorias.html' },
    { text: 'contacto', href: './snkarg/contacto.html' },
    { text: 'sobre nosotros', href: './snkarg/sobrenosotros.html' }
  ],
  search: {
    placeholder: 'buscar',
    button: 'buscar'
  }
};

// Crear el navbar
function createNavbar(config) {
  const navbar = createElement('nav', { class: 'navbar navbar-expand-lg' });
  const container = createElement('div', { class: 'container-fluid' });

  // Brand
  const brand = createElement('a', { class: 'navbar-brand', href: config.brand.href }, config.brand.text);
  container.appendChild(brand);

  // Toggle button
  const toggleButton = createElement('button', {
    class: 'navbar-toggler',
    type: 'button',
    'data-bs-toggle': 'collapse',
    'data-bs-target': '#navbarSupportedContent',
    'aria-controls': 'navbarSupportedContent',
    'aria-expanded': 'false',
    'aria-label': 'toggle navigation'
  });
  const toggleIcon = createElement('span', { class: 'navbar-toggler-icon' });
  toggleButton.appendChild(toggleIcon);
  container.appendChild(toggleButton);

  // Navbar items
  const navbarItems = createElement('div', { class: 'collapse navbar-collapse', id: 'navbarSupportedContent' });
  const navbarList = createElement('ul', { class: 'navbar-nav me-auto mb-2 mb-lg-0' });

  config.items.forEach(item => {
    const listItem = createElement('li', { class: 'nav-item' });
    const link = createElement('a', { class: 'nav-link', href: item.href }, item.text);
    listItem.appendChild(link);
    navbarList.appendChild(listItem);
  });

  navbarItems.appendChild(navbarList);
  container.appendChild(navbarItems);

  // Search form
  const searchForm = createElement('form', { class: 'd-flex', role: 'search' });
  const searchInput = createElement('input', { class: 'form-control me-2', type: 'search', placeholder: config.search.placeholder, 'aria-label': 'Search' });
  const searchButton = createElement('button', { class: 'btn btn-outline-warning', type: 'submit' }, config.search.button);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);
  container.appendChild(searchForm);

  navbar.appendChild(container);
  return navbar;
}
// Obtener el elemento de búsqueda y el botón de búsqueda del formulario
const searchInput = document.querySelector('input[type="search"]');
const searchButton = document.querySelector('button[type="submit"]');

// Obtener el valor de búsqueda del localStorage si existe
const savedSearch = localStorage.getItem('searchValue');
if (savedSearch) {
  searchInput.value = savedSearch;
}

// Escuchar el evento de envío del formulario y guardar el valor de búsqueda en el localStorage
searchButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  const searchValue = searchInput.value;
  localStorage.setItem('searchValue', searchValue);
});
async function obtenerDatosUsuario() {
  return new Promise(resolve => {
    setTimeout(() => {
      let nombre = prompt("Ingrese su nombre:");
      let edad = prompt("Ingrese su edad:");
      resolve({ nombre, edad });
    }, 1000); // Simulamos un retraso de 1 segundo
  });
}

// Función asincrónica que utiliza await
async function simuladorInteractivo() {
  const { nombre, edad } = await obtenerDatosUsuario();

  if (edad >= 18) {
    alert(`Hola ${nombre}, eres mayor de edad.`);
  } else {
    alert(`Hola ${nombre}, eres menor de edad.`);
  }
}
function addToCart(itemName, price) {
  const item = {
    name: itemName,
    price: price,
  };
  cartItems.push(item);
  displayCartItems();
  saveCartToLocalStorage();
}

// Function to display items in the cart
function displayCartItems() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  let total = 0;

  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(listItem);

    total += item.price;
  });

  const cartTotal = document.getElementById("cart-total");
  cartTotal.textContent = `$${total}`;
}

document.addEventListener("DOMContentLoaded", function () {
  // Fetch all the required elements
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const clearCartButton = document.getElementById("clear-cart");

  let cart = []; // Array to store the cart items

  // Function to update the cart and display the items
  function updateCart() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.name + " - $" + item.price;
      cartItemsList.appendChild(li);
      total += item.price;
    });

    cartTotal.textContent = "$" + total;
  }

  // Function to handle "Add to Cart" button click
  function addToCartClick(event) {
    const shoeItem = event.target.parentElement;
    const itemName = shoeItem.querySelector("p").textContent;
    const itemPrice = parseFloat(shoeItem.querySelector("button").textContent.replace("Agregar al carrito", "").trim());

    cart.push({ name: itemName, price: itemPrice });
    updateCart();
  }

  // Attach event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCartClick);
  });

  // Function to handle "Vaciar carrito" button click
  function clearCartClick() {
    cart = [];
    updateCart();
  }

  // Attach event listener to "Vaciar carrito" button
  clearCartButton.addEventListener("click", clearCartClick);
});
document.addEventListener("DOMContentLoaded", function () {
  const cartItems = [];
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("total");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const clearCartButton = document.getElementById("clear-cart");

  // Product data with image, name, and price
  const sneakersData = [
    {
      image: "./imagenes/chicago.jpeg",
      name: "Air Jordan 1 Retro High OG Chicago Lost Found",
      price: 150,
    },
    {
      image: "./imagenes/mocha.jpeg",
      name: "Air Jordan Retro 1 Retro High OG",
      price: 120,
    },
    {
      image: "./imagenes/travis.jpeg",
      name: "Travis Scott x Air Jordan 1 Low OG SP Black Phanto",
      price: 180,
    },
    {
      image: "./imagenes/1.jpg",
      name: "Off-White x Air Jordan 1 Retro High OG UNC",
      price: 200,
    },
    {
      image: "./imagenes/grises.jpeg",
      name: "Dunk Low 'Grey Fog'",
      price: 90,
    },
    {
      image: "./imagenes/jordanretro.jpeg",
      name: "Air Jordan 1 Retro High OG 'Hyper Royal'",
      price: 160,
    },
  ]
  // Función para mostrar las zapatillas en la página
function displaySneakers() {
  const shoesContainer = document.querySelector('.shoes-container');
  shoesContainer.innerHTML = '';

  sneakersData.forEach((sneaker) => {
    const shoeItem = document.createElement('div');
    shoeItem.classList.add('shoe-item');

    const image = document.createElement('img');
    image.src = sneaker.image;
    image.alt = sneaker.name;
    shoeItem.appendChild(image);

    const name = document.createElement('p');
    name.textContent = sneaker.name;
    shoeItem.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `$${sneaker.price}`;
    shoeItem.appendChild(price);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Agregar al carrito';
    addToCartButton.classList.add('add-to-cart');
    addToCartButton.addEventListener('click', () => addToCart(sneaker));
    shoeItem.appendChild(addToCartButton);

    shoesContainer.appendChild(shoeItem);
  });
}

// Función para agregar una zapatilla al carrito
function addToCart(sneaker) {
  cartItems.push(sneaker);
  updateCartTotal();
}

// Función para actualizar el total del carrito en la página
function updateCartTotal() {
  const totalElement = document.getElementById('cart-total');
  const total = cartItems.reduce((acc, sneaker) => acc + sneaker.price, 0);
  totalElement.textContent = `$${total}`;
}
// Función para vaciar el carrito
function clearCart() {
  cartItems = [];
  updateCartTotal();
  displayCartItems();
}

// Función para mostrar los elementos del carrito en la página
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  cartItems.forEach((sneaker) => {
    const cartItem = document.createElement('li');
    cartItem.textContent = sneaker.name;
    cartItemsContainer.appendChild(cartItem);
  }]
  const apiUrl = "https://fakestoreapi.com/products/category/shoes";

// Función para obtener datos de la API de zapatillas
async function fetchSneakersData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Error al obtener datos de la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}