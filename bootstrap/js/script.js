
function mostrarAlerta(texto, tipo) {
  document.getElementById("zonaAlerta").innerHTML =
    '<div class="alert alert-' + tipo + ' alert-dismissible fade show">' +
      texto +
      '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
    '</div>';
}


function iniciarSesion() {
  var correo = document.getElementById("correo").value;
  var clave  = document.getElementById("clave").value;
  var alerta = document.getElementById("alertaLogin");

  if (correo === "" || clave === "") {
    alerta.innerHTML = '<div class="alert alert-danger">Completa todos los campos.</div>';
    return;
  }

  if (correo === "demo@correo.com" && clave === "123456") {
    alerta.innerHTML = '<div class="alert alert-success">¡Sesión iniciada correctamente! 👋</div>';
  } else {
    alerta.innerHTML = '<div class="alert alert-danger">Correo o contraseña incorrectos.</div>';
  }
}