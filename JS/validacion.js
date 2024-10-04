function validarFormulario() {
    // Validar nombre
    const nombre = document.getElementById("nombre").value;
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }

    // Validar apellido
    const apellido = document.getElementById("apellido").value;
    if (apellido.length < 3) {
        alert("El apellido debe tener al menos 3 caracteres.");
        return false;
    }

    // Validar email
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un email válido.");
        return false;
    }

    // Validar teléfono
    const telefono = document.getElementById("telefono").value;
    const telefonoRegex = /^[0-9]{9}$/;  // Acepta 9 dígitos
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, introduce un teléfono válido de 9 dígitos.");
        return false;
    }

    // Validar comentario
    const comentario = document.getElementById("comentario").value;
    if (comentario.length < 10) {
        alert("El comentario debe tener al menos 10 caracteres.");
        return false;
    }

    // Validar checkbox de política de privacidad
    const privacidad = document.getElementById("privacidad");
    if (!privacidad.checked) {
        alert("Debes aceptar la política de privacidad.");
        return false;
    }

    // Si todo está correcto
    return true;
}
