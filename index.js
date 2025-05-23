window.onload = function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
        console.log("Enviando datos: ", usuario, contrasenia);
        
        event.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const contrasenia = document.getElementById('contrasenia').value.trim();
        const errorMessage = document.getElementById('errorMessage');

        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        if (!usuario || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario)) {
            errorMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
            errorMessage.style.display = 'block';
            return;
        }

        if (!contrasenia) {
            errorMessage.textContent = 'La contraseña no puede estar vacía.';
            errorMessage.style.display = 'block';
            return;
        }

        form.submit();
    });

    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    const errorMessage = document.getElementById('errorMessage');

    if (error) {
        if (error === '1') {
            errorMessage.textContent = 'Correo y/o contraseña incorrectos.';
        } else if (error === '2') {
            errorMessage.textContent = 'Ingresa los datos.';
        }
        errorMessage.style.display = 'block';
    }
};
