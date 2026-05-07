function saludar() {
    let nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre.";
    } else {
        document.getElementById("resultado").innerText = "Hola " + nombre + ", bienvenido al sistema.";
    }
}

// Parte F - Nueva función de validación
/*function validarCorreo() {
    // Aquí buscamos el ID "correo" que pusimos en el HTML
    let correoElemento = document.getElementById("correo");
    
    if (!correoElemento) {
        console.error("No se encontró el elemento con ID 'correo'");
        return;
    }

    let correo = correoElemento.value;

    if (correo === "") {
        document.getElementById("mensajeCorreo").innerText = "Ingrese un correo electrónico."; [cite= 439]
    } else {
        document.getElementById("mensajeCorreo").innerText = "Correo registrado correctamente."; [cite= 442]
    }
}*/
// version mejorada: Validaciion mas completa y mensajes dinamicos
function validarCorreo() {
    let correoElemento = document.getElementById("correo");
    let mensajeElemento = document.getElementById("mensajeCorreo");
    let correo = correoElemento.value;

    if (correo === "") {
        mensajeElemento.innerText = "Error: Debe ingresar un correo electrónico.";
        mensajeElemento.className = "mensaje-error"; // Aplica estilo rojo
    } else {
        mensajeElemento.innerText = "¡Éxito! El correo " + correo + " fue registrado correctamente.";
        mensajeElemento.className = "mensaje-exito"; // Aplica estilo verde
        correoElemento.value = ""; // Limpia la caja de texto
    }
}
// Nueva función para limpiar el formulario
function limpiarFormulario() {
    // Vaciar la caja de texto
    document.getElementById("correo").value = "";
    
    // Quitar el mensaje y sus colores
    let mensajeElemento = document.getElementById("mensajeCorreo");
    mensajeElemento.innerText = "";
    mensajeElemento.className = ""; // Esto quita el estilo verde o rojo
}