function validateForm(event) {
    event.preventDefault(); // Evita el envío inmediato del formulario
    console.log("Validación iniciada"); // Mensaje de depuración
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const telefono = document.getElementById('telefono');
    const errorMessage = document.getElementById('errorMessage');

    if (!nombre || !apellidos || !email || !password || !confirmPassword || !telefono || !errorMessage) {
        console.log("Error: Uno o más elementos no se encontraron en el DOM");
        return false;
    }

    const nombreValue = nombre.value.trim();
    const apellidosValue = apellidos.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const telefonoValue = telefono.value.trim();

    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if (nombreValue === "") {
        errorMessage.textContent = 'El nombre no puede estar vacío.';
        errorMessage.style.display = 'block';
        return false;
    }

    if (apellidosValue === "") {
        errorMessage.textContent = 'Los apellidos no pueden estar vacíos.';
        errorMessage.style.display = 'block';
        return false;
    }

    if (emailValue === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        errorMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
        errorMessage.style.display = 'block';
        return false;
    }

    if (passwordValue === "") {
        errorMessage.textContent = 'La contraseña no puede estar vacía.';
        errorMessage.style.display = 'block';
        return false;
    }

    if (passwordValue !== confirmPasswordValue) {
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        errorMessage.style.display = 'block';
        return false;
    }

    if (telefonoValue === "" || !/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(telefonoValue)) {
        errorMessage.textContent = 'El teléfono debe tener el formato ###-###-####.';
        errorMessage.style.display = 'block';
        return false;
    }

    console.log("Validación exitosa, enviando formulario");
    document.getElementById('registerForm').submit();
    return true;
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    const errorMessage = document.getElementById('errorMessage');

    if (error) {
        if (error === '1') {
            errorMessage.textContent = 'Error al registrar el usuario. El correo ya existe.';
        } else if (error === '2') {
            errorMessage.textContent = 'Por favor, completa todos los campos correctamente.';
        }
        errorMessage.style.display = 'block';
    }
};