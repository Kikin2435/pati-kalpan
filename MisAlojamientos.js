// Datos de los alojamientos (simulados como los del usuario)
const alojamientos = [
    {
        id: 1,
        title: "Habitación de Juan Jonhson",
        price: 300,
        ubicacion: "Centro, Ciudad de México",
        image: "Img/c-1.png",
        desc: "Muy económico",
        tipo: "Habitación individual",
        habitaciones: 1,
        banos: 1,
        superficie: 20,
        amenidades: "Cama, escritorio, clóset",
        servicios: "Agua, luz, internet",
        estacionamiento: "No disponible",
        reglas: "No fiestas, no mascotas"
    },
    {
        id: 2,
        title: "Cuarto en La Calera",
        price: 500,
        ubicacion: "La Calera, Puebla",
        image: "Img/c-2.png",
        desc: "Decoración rústica",
        tipo: "Habitación compartida",
        habitaciones: 2,
        banos: 1,
        superficie: 35,
        amenidades: "Camas, cocina compartida",
        servicios: "Agua, luz",
        estacionamiento: "1 auto",
        reglas: "No se permite fumar"
    },
    {
        id: 3,
        title: "Abuelita room",
        price: 750,
        ubicacion: "San Pedro, Monterrey",
        image: "Img/c-3.png",
        desc: "Aspecto hogareño",
        tipo: "Estudio",
        habitaciones: 1,
        banos: 1,
        superficie: 28,
        amenidades: "Cama, escritorio, cocina equipada",
        servicios: "Agua, luz, gas, internet",
        estacionamiento: "1 lugar techado",
        reglas: "No fiestas"
    }
];

// Inicializar DataTable
$(document).ready(function () {
    $('#alojamientosTable').DataTable({
        data: alojamientos,
        columns: [
            { data: 'title' },
            { data: 'ubicacion' },
            { data: 'price', render: function (data) { return '$' + data + ' mensuales'; } },
            {
                data: null,
                render: function (data, type, row) {
                    return '<button class="btn btn-danger btn-sm eliminar-btn" data-id="' + row.id + '">Eliminar</button>';
                }
            },
            {
                data: null,
                render: function (data, type, row) {
                    return '<button class="btn btn-primary btn-sm modificar-btn" data-id="' + row.id + '">Modificar</button>';
                }
            }
        ],
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json' // Configuración en español
        }
    });

    // Funcionalidad para el botón Eliminar (simulada)
    $(document).on('click', '.eliminar-btn', function () {
        const id = $(this).data('id');
        alert('Eliminar alojamiento con ID: ' + id + ' (funcionalidad simulada)');
    });

    // Funcionalidad para el botón Modificar (redirige a PublicarAlojamiento.html con datos)
    $(document).on('click', '.modificar-btn', function () {
        const id = $(this).data('id');
        const alojamiento = alojamientos.find(a => a.id === id);

        // Crear los parámetros de la URL con los datos del alojamiento
        const params = new URLSearchParams({
            id: alojamiento.id,
            title: alojamiento.title,
            desc: alojamiento.desc,
            ubicacion: alojamiento.ubicacion,
            tipo: alojamiento.tipo,
            habitaciones: alojamiento.habitaciones,
            banos: alojamiento.banos,
            superficie: alojamiento.superficie,
            amenidades: alojamiento.amenidades,
            servicios: alojamiento.servicios,
            price: alojamiento.price,
            estacionamiento: alojamiento.estacionamiento,
            reglas: alojamiento.reglas
        });

        // Redirigir a PublicarAlojamiento.html con los parámetros
        window.location.href = `PublicarAlojamiento.html?${params.toString()}`;
    });
});