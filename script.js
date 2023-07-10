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

