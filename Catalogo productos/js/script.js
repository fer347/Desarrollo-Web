// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Cargar Header
  fetch('componentes/Header/header.html')
    .then(response => response.text())
    .then(html => document.getElementById('header').innerHTML = html);

  // Cargar Footer
  fetch('componentes/Footer/footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);
});
// Array de productos
const productos = [
  {
    nombre: "Apple Watch",
    precio: "$50",
    descripcion: " reloj inteligente (smartwatch) de Apple, diseñado para ser un compañero de salud, actividad física y conectividad en la muñeca.."
  },
  {
    nombre: "Airpods pro 3 ",
    precio: "$75",
    descripcion: "La mejor Cancelación Activa de Ruido del mundo dentro del oído.."
  },
  {
    nombre: "Airpods Max",
    precio: "$100",
    descripcion: "audífonos circumaurales de diadema premium de Apple, destacados por su diseño en aluminio."
  }
];

// Mostrar productos en el HTML
const productList = document.getElementById('product-list');
productos.forEach(product => {
  const productCard = document.createElement('product-card');
  productCard.setAttribute('nombre', product.nombre);
  productCard.setAttribute('precio', product.precio);
  productCard.setAttribute('descripcion', product.descripcion);
  productList.appendChild(productCard);
});
// Definir el Web Component
class ProductCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Crear el template
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          margin: 10px;
          text-align: center;
        }
        .card h3 {
          font-size: 1.5em;
        }
        .card p {
          color: #555;
        }
      </style>
      <div class="card">
        <h3></h3>
        <p class="price"></p>
        <p class="description"></p>
      </div>
    `;
    
    // Agregar contenido al template
    shadow.appendChild(template.content.cloneNode(true));
  }

  // Cuando el componente es agregado al DOM
  connectedCallback() {
    this.shadowRoot.querySelector('h3').textContent = this.getAttribute('nombre');
    this.shadowRoot.querySelector('.price').textContent = this.getAttribute('precio');
    this.shadowRoot.querySelector('.description').textContent = this.getAttribute('descripcion');
  }
}

// Registrar el componente
customElements.define('product-card', ProductCard);