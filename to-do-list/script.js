// ===== VARIABLES =====
const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

let totalTareas = 0;

// ===== FUNCIONES =====
function actualizarContador() {
  contador.textContent = totalTareas;
}

function agregarTarea(texto) {
  const li = document.createElement("li");
  li.textContent = texto;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("btn-eliminar");

  botonEliminar.addEventListener("click", function () {
    lista.removeChild(li);
    totalTareas--;
    actualizarContador();
  });

  li.appendChild(botonEliminar);
  lista.appendChild(li);

  totalTareas++;
  actualizarContador();
}

// ===== EVENTOS =====
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita recargar la página

  const texto = inputTarea.value.trim();

  if (texto === "") return; // Evita tareas vacías

  agregarTarea(texto);

  inputTarea.value = "";
});