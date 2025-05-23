document.addEventListener('DOMContentLoaded', () => {
    // Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);

    // Rellenar los campos del formulario con los datos de la URL
    if (params.has('id')) {
        document.getElementById('titulo').value = params.get('title') || '';
        document.getElementById('descripcion').value = params.get('desc') || '';
        document.getElementById('ubicacion').value = params.get('ubicacion') || '';
        document.getElementById('tipo').value = params.get('tipo') || '';
        document.getElementById('habitaciones').value = params.get('habitaciones') || '';
        document.getElementById('banios').value = params.get('banos') || '';
        document.getElementById('superficie').value = params.get('superficie') || '';
        document.getElementById('precio').value = params.get('price') || '';
        document.getElementById('estacionamiento').value = params.get('estacionamiento') === 'No disponible' ? 'No' : params.get('estacionamiento') || '';
        document.getElementById('reglas').value = params.get('reglas') || '';

        // Precargar amenidades
        const amenidades = params.get('amenidades') ? params.get('amenidades').split(', ') : [];
        document.querySelectorAll('input[name="amenidades"]').forEach(checkbox => {
            checkbox.checked = amenidades.includes(checkbox.value);
        });

        // Precargar servicios
        const servicios = params.get('servicios') ? params.get('servicios').split(', ') : [];
        document.querySelectorAll('input[name="servicios"]').forEach(checkbox => {
            checkbox.checked = servicios.includes(checkbox.value);
        });
    }

    // Mostrar nombres de archivos seleccionados (funcionalidad original del formulario)
    const fileInput = document.getElementById('media');
    const fileNamesDiv = document.getElementById('file-names');
    fileInput.addEventListener('change', () => {
        fileNamesDiv.innerHTML = '';
        Array.from(fileInput.files).forEach(file => {
            const p = document.createElement('p');
            p.textContent = file.name;
            fileNamesDiv.appendChild(p);
        });
    });
});