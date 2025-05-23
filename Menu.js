// Datos de los alojamientos
const alojamientos = [
    {
        id: 1,
        title: "Habitación de Juan Jonhson",
        desc: "Muy económico",
        price: 300,
        ubicacion: "Centro, Ciudad de México",
        tipo: "Habitación individual",
        habitaciones: 1,
        banos: 1,
        superficie: 20,
        amenidades: "Cama, escritorio, clóset",
        servicios: "Agua, luz, internet",
        estacionamiento: "No disponible",
        reglas: "No fiestas, no mascotas",
        image: "Img/c-1.png",
    },
    {
        id: 2,
        title: "Cuarto en La Calera",
        desc: "Decoración rústica",
        price: 500,
        ubicacion: "La Calera, Puebla",
        tipo: "Habitación compartida",
        habitaciones: 2,
        banos: 1,
        superficie: 35,
        amenidades: "Camas, cocina compartida",
        servicios: "Agua, luz",
        estacionamiento: "1 auto",
        reglas: "No se permite fumar",
        image: "Img/c-2.png",
    },
    {
        id: 3,
        title: "Abuelita room",
        desc: "Aspecto hogareño",
        price: 750,
        ubicacion: "San Pedro, Monterrey",
        tipo: "Estudio",
        habitaciones: 1,
        banos: 1,
        superficie: 28,
        amenidades: "Cama, escritorio, cocina equipada",
        servicios: "Agua, luz, gas, internet",
        estacionamiento: "1 lugar techado",
        reglas: "No fiestas",
        image: "Img/c-3.png",
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
    }
];

// Variable para almacenar el ID del alojamiento seleccionado
let selectedAlojamientoId = null;

// Función para poblar el modal con los datos del alojamiento seleccionado
document.addEventListener('DOMContentLoaded', () => {
    const alojamientosElements = Array.from(document.querySelectorAll('.alojamiento'));

    // Aplicar estilos iniciales según el estatus en localStorage
    alojamientosElements.forEach(element => {
        const id = parseInt(element.getAttribute('data-id'));
        const estatus = localStorage.getItem(`estatus_${id}`) || "Disponible";
        if (estatus === "No disponible") {
            element.classList.add('no-disponible');
        }
    });

    document.querySelectorAll('.M-D-I').forEach(item => {
        item.addEventListener('click', () => {
            const id = parseInt(item.getAttribute('data-id'));
            const estatus = localStorage.getItem(`estatus_${id}`) || "Disponible";
            
            // Solo permitir abrir el modal si el alojamiento está disponible
            if (estatus === "No disponible") {
                alert("Este alojamiento no está disponible actualmente.");
                return;
            }

            selectedAlojamientoId = id; // Guardar el ID del alojamiento seleccionado
            const alojamiento = alojamientos.find(a => a.id === id);

            document.getElementById('modalImage').src = alojamiento.image;
            document.getElementById('modalTitle').textContent = alojamiento.title;
            document.getElementById('modalUbicacion').textContent = alojamiento.ubicacion;
            document.getElementById('modalPrice').textContent = alojamiento.price;
            document.getElementById('modalDesc').textContent = alojamiento.desc;
            document.getElementById('modalTipo').textContent = alojamiento.tipo;
            document.getElementById('modalHabitaciones').textContent = alojamiento.habitaciones;
            document.getElementById('modalBanos').textContent = alojamiento.banos;
            document.getElementById('modalSuperficie').textContent = alojamiento.superficie;
            document.getElementById('modalAmenidades').textContent = alojamiento.amenidades;
            document.getElementById('modalServicios').textContent = alojamiento.servicios;
            document.getElementById('modalEstacionamiento').textContent = alojamiento.estacionamiento;
            document.getElementById('modalReglas').textContent = alojamiento.reglas;
        });
    });

    // Acción del botón "Reservar Ahora"
    document.getElementById('btnReservar').addEventListener('click', () => {
        if (selectedAlojamientoId) {
            // Incrementar el conteo de reservas en localStorage
            const key = `reservas_${selectedAlojamientoId}`;
            let reservas = parseInt(localStorage.getItem(key)) || 0;
            reservas += 1;
            localStorage.setItem(key, reservas.toString());
            alert(`Reserva realizada para el alojamiento con ID: ${selectedAlojamientoId}. Total de reservas: ${reservas}`);
            selectedAlojamientoId = null; // Reiniciar el ID después de usarlo
        } else {
            alert('Error: No se pudo identificar el alojamiento para reservar.');
        }
    });

    // Filtro dinámico
    const filtroUbicacion = document.getElementById('filtroUbicacion');
    const filtroPrecioMin = document.getElementById('filtroPrecioMin');
    const filtroPrecioMax = document.getElementById('filtroPrecioMax');
    const main3Containers = document.querySelectorAll('#Main-3');

    function filtrarAlojamientos() {
        const ubicacion = filtroUbicacion.value.toLowerCase().trim();
        const precioMin = parseFloat(filtroPrecioMin.value) || 0;
        const precioMax = parseFloat(filtroPrecioMax.value) || Infinity;

        // Separar alojamientos que coinciden y los que no
        const matchingElements = [];
        const nonMatchingElements = [];

        alojamientosElements.forEach(element => {
            const id = parseInt(element.getAttribute('data-id'));
            const alojamiento = alojamientos.find(a => a.id === id);
            const estatus = localStorage.getItem(`estatus_${id}`) || "Disponible";
            const matchesUbicacion = ubicacion === '' || alojamiento.ubicacion.toLowerCase().includes(ubicacion);
            const matchesPrecio = alojamiento.price >= precioMin && alojamiento.price <= precioMax;

            if (matchesUbicacion && matchesPrecio && estatus === "Disponible") {
                matchingElements.push(element);
                element.style.display = 'block';
            } else {
                nonMatchingElements.push(element);
                element.style.display = 'none';
            }
        });

        // Combinar los elementos: primero los que coinciden, luego los que no
        const reorderedElements = [...matchingElements, ...nonMatchingElements];

        // Distribuir los elementos en los contenedores #Main-3 (4 por fila)
        main3Containers.forEach((container, index) => {
            // Limpiar el contenedor
            container.innerHTML = '';

            // Obtener los elementos que irán en este contenedor (4 por contenedor)
            const start = index * 4;
            const end = start + 4;
            const elementsForContainer = reorderedElements.slice(start, end);

            // Agregar los elementos al contenedor
            elementsForContainer.forEach(element => {
                container.appendChild(element);
            });
        });
    }

    filtroUbicacion.addEventListener('input', filtrarAlojamientos);
    filtroPrecioMin.addEventListener('input', filtrarAlojamientos);
    filtroPrecioMax.addEventListener('input', filtrarAlojamientos);
});