function saludar() {
    let nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre.";
    } else {
        document.getElementById("resultado").innerText = "Hola " + nombre + ", bienvenido al sistema.";
    }
}

// Parte F - Nueva función de validación
function validarCorreo() {
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
}