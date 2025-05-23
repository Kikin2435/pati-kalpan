// Datos de los alojamientos (incluye todos los de Menu.html)
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
        reglas: "No fiestas, no mascotas",
        estatus: "Disponible",
        reservas: 0
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
        reglas: "No se permite fumar",
        estatus: "No disponible",
        reservas: 0
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
        reglas: "No fiestas",
        estatus: "Disponible",
        reservas: 0
    },
    {
        id: 4,
        title: "Christian Study Room",
        desc: "Misa los domingos",
        price: 1000,
        ubicacion: "Zona Hotelera, Cancún",
        tipo: "Departamento",
        habitaciones: 2,
        banos: 2,
        superficie: 70,
        amenidades: "Sala, comedor, cocina equipada",
        servicios: "Todo incluido",
        estacionamiento: "2 autos",
        reglas: "No mascotas",
        image: "Img/c-4.png",
        estatus: "Disponible",
        reservas: 0
    },
    {
        id: 5,
        title: "Habiatacion en el centro",
        desc: "Vista a la plaza",
        price: 1500,
        ubicacion: "Centro, Guadalajara",
        tipo: "Habitación individual",
        habitaciones: 1,
        banos: 1,
        superficie: 18,
        amenidades: "Cama individual, escritorio",
        servicios: "Agua, luz, internet",
        estacionamiento: "No disponible",
        reglas: "No fumar, no visitas",
        image: "Img/c-5.png",
        estatus: "Disponible",
        reservas: 0
    },
    {
        id: 6,
        title: "Cuarto equipado",
        desc: "Muebles incluidos",
        price: 1300,
        ubicacion: "Roma Norte, CDMX",
        tipo: "Loft",
        habitaciones: 1,
        banos: 1,
        superficie: 40,
        amenidades: "Estudio, libreros, cocina",
        servicios: "Agua, luz, internet, gas",
        estacionamiento: "1 lugar",
        reglas: "No fiestas, no ruido después de las 10",
        image: "Img/c-6.png",
        estatus: "Disponible",
        reservas: 0
    },
    {
        id: 7,
        title: "Study room",
        desc: "Incluye baño propio",
        price: 3000,
        ubicacion: "Col. Doctores, CDMX",
        tipo: "Departamento",
        habitaciones: 1,
        banos: 1,
        superficie: 25,
        amenidades: "Cama, cocina, baño privado",
        servicios: "Agua, luz",
        estacionamiento: "No",
        reglas: "No mascotas",
        image: "Img/c-7.png",
        estatus: "Disponible",
        reservas: 0
    },
    {
        id: 8,
        title: "Hbitacion compartida",
        desc: "Maximo 3 personas",
        price: 2500,
        ubicacion: "Zapopan, Jalisco",
        tipo: "Casa compartida",
        habitaciones: 3,
        banos: 2,
        superficie: 100,
        amenidades: "Sala, cocina, patio",
        servicios: "Todos incluidos",
        estacionamiento: "Calle",
        reglas: "No fiestas, respeto mutuo",
        image: "Img/c-8.png",
        estatus: "Disponible",
        reservas: 0
    }
];

// Inicializar el conteo de reservas y estatus desde localStorage
alojamientos.forEach(alojamiento => {
    const storedReservas = localStorage.getItem(`reservas_${alojamiento.id}`);
    alojamiento.reservas = storedReservas ? parseInt(storedReservas) : 0;

    const storedEstatus = localStorage.getItem(`estatus_${alojamiento.id}`);
    alojamiento.estatus = storedEstatus || alojamiento.estatus; // Usar el valor de localStorage si existe
});

// Inicializar DataTable
$(document).ready(function () {
    const table = $('#alojamientosTable').DataTable({
        data: alojamientos,
        columns: [
            { data: 'title' },
            { data: 'ubicacion' },
            { data: 'price', render: function (data) { return '$' + data + ' mensuales'; } },
            { 
                data: 'estatus', 
                render: function (data) { 
                    return `<span class="estatus-${data.toLowerCase().replace(' ', '-')}">${data}</span>`;
                }
            },
            { 
                data: 'reservas', 
                render: function (data) { 
                    return `<span class="reservas-count">${data}</span>`;
                }
            },
            {
                data: null,
                render: function (data, type, row) {
                    return '<button class="btn btn-success btn-sm disponible-btn" data-id="' + row.id + '">Disponible</button>';
                }
            },
            {
                data: null,
                render: function (data, type, row) {
                    return '<button class="btn btn-danger btn-sm no-disponible-btn" data-id="' + row.id + '">No disponible</button>';
                }
            },
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

    // Funcionalidad para el botón Disponible
    $(document).on('click', '.disponible-btn', function () {
        const id = parseInt($(this).data('id'));
        const alojamiento = alojamientos.find(a => a.id === id);
        alojamiento.estatus = "Disponible";
        localStorage.setItem(`estatus_${id}`, "Disponible");
        table.rows().invalidate().draw(); // Actualizar la tabla
    });

    // Funcionalidad para el botón No disponible
    $(document).on('click', '.no-disponible-btn', function () {
        const id = parseInt($(this).data('id'));
        const alojamiento = alojamientos.find(a => a.id === id);
        alojamiento.estatus = "No disponible";
        localStorage.setItem(`estatus_${id}`, "No disponible");
        table.rows().invalidate().draw(); // Actualizar la tabla
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