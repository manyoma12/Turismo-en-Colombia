/* =========================================
   EXPLORA COLOMBIA 🇨🇴
   SISTEMA PRINCIPAL
========================================= */


/* =========================================
   CIUDADES
========================================= */

const ciudades = [

    {
        nombre: "Buenaventura",
        departamento: "Valle del Cauca",
        estrellas: 5,
        puntuacion: "4.8",
        imagen: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Destino del Pacífico colombiano con playas, selva, gastronomía y experiencias de naturaleza.",
        presupuesto:
            "$160.000 - $400.000 por día"
    },

    {
        nombre: "Cartagena",
        departamento: "Bolívar",
        estrellas: 5,
        puntuacion: "4.9",
        imagen: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Ciudad histórica del Caribe famosa por su arquitectura, playas, gastronomía y vida nocturna.",
        presupuesto:
            "$180.000 - $450.000 por día"
    },

    {
        nombre: "Santa Marta",
        departamento: "Magdalena",
        estrellas: 5,
        puntuacion: "4.9",
        imagen: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Destino de playa y naturaleza con acceso al Parque Tayrona y la Sierra Nevada.",
        presupuesto:
            "$150.000 - $400.000 por día"
    },

    {
        nombre: "Medellín",
        departamento: "Antioquia",
        estrellas: 5,
        puntuacion: "4.8",
        imagen: "https://images.unsplash.com/photo-1595936797933-e19e9c4c8b1d?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Ciudad de cultura, gastronomía, innovación, montañas y entretenimiento.",
        presupuesto:
            "$140.000 - $380.000 por día"
    },

    {
        nombre: "San Andrés",
        departamento: "Archipiélago de San Andrés",
        estrellas: 5,
        puntuacion: "4.9",
        imagen: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Isla caribeña famosa por sus playas y sus aguas de diferentes tonalidades.",
        presupuesto:
            "$220.000 - $500.000 por día"
    },

    {
        nombre: "Bogotá",
        departamento: "Cundinamarca",
        estrellas: 4,
        puntuacion: "4.6",
        imagen: "https://images.unsplash.com/photo-1531057242626-ef7d6f2a4c7f?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Capital colombiana con museos, historia, gastronomía, arte y una enorme oferta cultural.",
        presupuesto:
            "$130.000 - $350.000 por día"
    },

    {
        nombre: "Cali",
        departamento: "Valle del Cauca",
        estrellas: 4,
        puntuacion: "4.6",
        imagen: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Capital de la salsa, con gastronomía, cultura, música y experiencias del Pacífico.",
        presupuesto:
            "$120.000 - $320.000 por día"
    },

    {
        nombre: "Pereira",
        departamento: "Risaralda",
        estrellas: 4,
        puntuacion: "4.7",
        imagen: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Destino del Eje Cafetero rodeado de naturaleza y fincas cafeteras.",
        presupuesto:
            "$120.000 - $320.000 por día"
    },

    {
        nombre: "Armenia",
        departamento: "Quindío",
        estrellas: 4,
        puntuacion: "4.6",
        imagen: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Ciudad del Eje Cafetero ideal para conocer fincas, paisajes y pueblos tradicionales.",
        presupuesto:
            "$120.000 - $320.000 por día"
    },

    {
        nombre: "Manizales",
        departamento: "Caldas",
        estrellas: 4,
        puntuacion: "4.7",
        imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Ciudad de montaña con paisajes cafeteros, cultura y acceso a los Nevados.",
        presupuesto:
            "$120.000 - $330.000 por día"
    },

    {
        nombre: "Villa de Leyva",
        departamento: "Boyacá",
        estrellas: 5,
        puntuacion: "4.8",
        imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Pueblo histórico con arquitectura colonial, plazas, museos y naturaleza.",
        presupuesto:
            "$150.000 - $380.000 por día"
    },

    {
        nombre: "Salento",
        departamento: "Quindío",
        estrellas: 5,
        puntuacion: "4.8",
        imagen: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Destino cafetero conocido por el Valle de Cocora, sus montañas y su arquitectura.",
        presupuesto:
            "$140.000 - $360.000 por día"
    },

    {
        nombre: "Popayán",
        departamento: "Cauca",
        estrellas: 4,
        puntuacion: "4.5",
        imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Ciudad histórica conocida por su arquitectura blanca y gastronomía tradicional.",
        presupuesto:
            "$110.000 - $300.000 por día"
    },

    {
        nombre: "Leticia",
        departamento: "Amazonas",
        estrellas: 4,
        puntuacion: "4.7",
        imagen: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80",
        descripcion:
            "Puerta de entrada a la Amazonía colombiana con selva, ríos y fauna.",
        presupuesto:
            "$180.000 - $450.000 por día"
    }

];


/* =========================================
   HOTELES
========================================= */

const hoteles = [

    {
        nombre: "Hotel Torre Mar",
        ciudad: "Buenaventura",
        estrellas: 4,
        puntuacion: "4.5",
        precio: "$180.000",
        detallePrecio: "por noche",
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
        servicios: "Piscina • Restaurante • Wi-Fi • Vista a la bahía"
    },

    {
        nombre: "Hotel Caribe Real",
        ciudad: "Cartagena",
        estrellas: 4,
        puntuacion: "4.6",
        precio: "$280.000",
        detallePrecio: "por noche",
        imagen: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80",
        servicios: "Piscina • Desayuno • Wi-Fi • Aire acondicionado"
    },

    {
        nombre: "Hotel Sierra Verde",
        ciudad: "Medellín",
        estrellas: 4,
        puntuacion: "4.5",
        precio: "$220.000",
        detallePrecio: "por noche",
        imagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
        servicios: "Wi-Fi • Desayuno • Gimnasio • Restaurante"
    },

    {
        nombre: "Hotel Tayrona Azul",
        ciudad: "Santa Marta",
        estrellas: 5,
        puntuacion: "4.7",
        precio: "$350.000",
        detallePrecio: "por noche",
        imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        servicios: "Piscina • Restaurante • Playa cercana • Wi-Fi"
    }

];


/* =========================================
   RESTAURANTES
========================================= */

const restaurantes = [

    {
        nombre: "Sabor del Pacífico",
        ciudad: "Buenaventura",
        estrellas: 5,
        puntuacion: "4.7",
        precio: "$35.000 - $70.000",
        detallePrecio: "por persona",
        imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
        servicios: "Mariscos • Cocina del Pacífico • Bebidas"
    },

    {
        nombre: "Caribe Gourmet",
        ciudad: "Cartagena",
        estrellas: 5,
        puntuacion: "4.8",
        precio: "$60.000 - $120.000",
        detallePrecio: "por persona",
        imagen: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80",
        servicios: "Cocina Caribe • Internacional • Cocteles"
    },

    {
        nombre: "Casa Paisa",
        ciudad: "Medellín",
        estrellas: 4,
        puntuacion: "4.6",
        precio: "$30.000 - $65.000",
        detallePrecio: "por persona",
        imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
        servicios: "Comida colombiana • Parrilla • Almuerzos"
    },

    {
        nombre: "Pacífico y Mar",
        ciudad: "Cali",
        estrellas: 5,
        puntuacion: "4.7",
        precio: "$40.000 - $85.000",
        detallePrecio: "por persona",
        imagen: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
        servicios: "Cocina del Pacífico • Mariscos • Fusión"
    }

];


/* =========================================
   ACTIVIDADES
========================================= */

const actividades = [

    {
        nombre: "Avistamiento de ballenas",
        ciudad: "Buenaventura",
        estrellas: 5,
        puntuacion: "4.9",
        precio: "$150.000",
        detallePrecio: "por persona",
        imagen: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1000&q=80",
        servicios: "Lancha • Bahía Málaga • Guía"
    },

    {
        nombre: "Parque Tayrona",
        ciudad: "Santa Marta",
        estrellas: 5,
        puntuacion: "4.9",
        precio: "$80.000",
        detallePrecio: "por persona",
        imagen: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
        servicios: "Senderismo • Playas • Naturaleza"
    },

    {
        nombre: "Tour del café",
        ciudad: "Pereira",
        estrellas: 5,
        puntuacion: "4.8",
        precio: "$90.000",
        detallePrecio: "por persona",
        imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
        servicios: "Finca cafetera • Degustación • Guía"
    },

    {
        nombre: "Tour histórico",
        ciudad: "Cartagena",
        estrellas: 5,
        puntuacion: "4.8",
        precio: "$70.000",
        detallePrecio: "por persona",
        imagen: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80",
        servicios: "Ciudad amurallada • Historia • Guía"
    }

];


/* =========================================
   CREAR ESTRELLAS
========================================= */

function crearEstrellas(numero) {

    let resultado = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= numero) {
            resultado += "★";
        } else {
            resultado += "☆";
        }

    }

    return resultado;
}


/* =========================================
   MOSTRAR PÁGINAS
========================================= */

function mostrarPagina(nombrePagina) {

    document.querySelectorAll(".pagina").forEach(function(pagina) {

        pagina.classList.remove("activa");

    });


    const pagina = document.getElementById(nombrePagina);

    if (pagina) {

        pagina.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   TARJETAS DE CIUDADES
========================================= */

function mostrarCiudades() {

    const contenedor =
        document.getElementById("lista-ciudades");

    if (!contenedor) return;

    contenedor.innerHTML = "";


    ciudades.forEach(function(ciudad) {

        const tarjeta = document.createElement("article");

        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = `

            <img
                src="${ciudad.imagen}"
                alt="${ciudad.nombre}"
                class="tarjeta-imagen"
            >

            <div class="tarjeta-contenido">

                <h3>
                    ${ciudad.nombre}
                </h3>

                <div class="ubicacion">
                    📍 ${ciudad.departamento}
                </div>

                <div>

                    <span class="estrellas">
                        ${crearEstrellas(ciudad.estrellas)}
                    </span>

                    <span class="puntuacion">
                        ${ciudad.puntuacion}/5
                    </span>

                </div>

                <div class="etiquetas">

                    <span class="etiqueta-card">
                        🌎 Destino
                    </span>

                    <span class="etiqueta-card">
                        📍 Colombia
                    </span>

                </div>

                <div class="precio">

                    ${ciudad.presupuesto}

                    <small>
                        presupuesto orientativo
                    </small>

                </div>

                <button
                    class="boton-tarjeta"
                    onclick="verCiudad('${ciudad.nombre}')"
                >
                    Explorar ciudad
                </button>

            </div>

        `;

        contenedor.appendChild(tarjeta);

    });

}


/* =========================================
   TARJETAS DE HOTELES
========================================= */

function mostrarHoteles() {

    const contenedor =
        document.getElementById("lista-hoteles");

    if (!contenedor) return;

    contenedor.innerHTML = "";


    hoteles.forEach(function(hotel) {

        const tarjeta = document.createElement("article");

        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = `

            <img
                src="${hotel.imagen}"
                alt="${hotel.nombre}"
                class="tarjeta-imagen"
            >

            <div class="tarjeta-contenido">

                <h3>
                    ${hotel.nombre}
                </h3>

                <div class="ubicacion">
                    📍 ${hotel.ciudad}
                </div>

                <div>

                    <span class="estrellas">
                        ${crearEstrellas(hotel.estrellas)}
                    </span>

                    <span class="puntuacion">
                        ${hotel.puntuacion}/5
                    </span>

                </div>

                <div class="etiquetas">

                    <span class="etiqueta-card">
                        🏨 Hotel
                    </span>

                    <span class="etiqueta-card">
                        ⭐ ${hotel.estrellas} estrellas
                    </span>

                </div>

                <div class="precio">

                    ${hotel.precio}

                    <small>
                        ${hotel.detallePrecio}
                    </small>

                </div>

                <button
                    class="boton-tarjeta"
                    onclick="verHotel('${hotel.nombre}')"
                >
                    Ver hotel
                </button>

            </div>

        `;

        contenedor.appendChild(tarjeta);

    });

}


/* =========================================
   TARJETAS DE RESTAURANTES
========================================= */

function mostrarRestaurantes() {

    const contenedor =
        document.getElementById("lista-restaurantes");

    if (!contenedor) return;

    contenedor.innerHTML = "";


    restaurantes.forEach(function(restaurante) {

        const tarjeta = document.createElement("article");

        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = `

            <img
                src="${restaurante.imagen}"
                alt="${restaurante.nombre}"
                class="tarjeta-imagen"
            >

            <div class="tarjeta-contenido">

                <h3>
                    ${restaurante.nombre}
                </h3>

                <div class="ubicacion">
                    📍 ${restaurante.ciudad}
                </div>

                <div>

                    <span class="estrellas">
                        ${crearEstrellas(restaurante.estrellas)}
                    </span>

                    <span class="puntuacion">
                        ${restaurante.puntuacion}/5
                    </span>

                </div>

                <div class="etiquetas">

                    <span class="etiqueta-card">
                        🍽️ Restaurante
                    </span>

                    <span class="etiqueta-card">
                        ⭐ ${restaurante.estrellas} estrellas
                    </span>

                </div>

                <div class="precio">

                    ${restaurante.precio}

                    <small>
                        ${restaurante.detallePrecio}
                    </small>

                </div>

                <button
                    class="boton-tarjeta"
                    onclick="verRestaurante('${restaurante.nombre}')"
                >
                    Ver restaurante
                </button>

            </div>

        `;

        contenedor.appendChild(tarjeta);

    });

}


/* =========================================
   TARJETAS DE ACTIVIDADES
========================================= */

function mostrarActividades() {

    const contenedor =
        document.getElementById("lista-actividades");

    if (!contenedor) return;

    contenedor.innerHTML = "";


    actividades.forEach(function(actividad) {

        const tarjeta = document.createElement("article");

        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = `

            <img
                src="${actividad.imagen}"
                alt="${actividad.nombre}"
                class="tarjeta-imagen"
            >

            <div class="tarjeta-contenido">

                <h3>
                    ${actividad.nombre}
                </h3>

                <div class="ubicacion">
                    📍 ${actividad.ciudad}
                </div>

                <div>

                    <span class="estrellas">
                        ${crearEstrellas(actividad.estrellas)}
                    </span>

                    <span class="puntuacion">
                        ${actividad.puntuacion}/5
                    </span>

                </div>

                <div class="etiquetas">

                    <span class="etiqueta-card">
                        🏝️ Actividad
                    </span>

                    <span class="etiqueta-card">
                        ⭐ ${actividad.estrellas} estrellas
                    </span>

                </div>

                <div class="precio">

                    ${actividad.precio}

                    <small>
                        ${actividad.detallePrecio}
                    </small>

                </div>

                <button
                    class="boton-tarjeta"
                    onclick="verActividad('${actividad.nombre}')"
                >
                    Ver actividad
                </button>

            </div>

        `;

        contenedor.appendChild(tarjeta);

    });

}


/* =========================================
   VER CIUDAD
========================================= */

function verCiudad(nombre) {

    const ciudad = ciudades.find(function(item) {

        return item.nombre === nombre;

    });


    if (!ciudad) return;


    const contenido =
        document.getElementById("contenido-detalles");


    contenido.innerHTML = `

        <img
            src="${ciudad.imagen}"
            alt="${ciudad.nombre}"
            class="detalle-imagen"
        >

        <h2>
            ${ciudad.nombre}
        </h2>

        <div class="estrellas">

            ${crearEstrellas(ciudad.estrellas)}

            <span class="puntuacion">
                ${ciudad.puntuacion}/5
            </span>

        </div>

        <div class="detalle-informacion">

            <div class="detalle-fila">
                <strong>📍 Departamento</strong>
                <span>${ciudad.departamento}</span>
            </div>

            <div class="detalle-fila">
                <strong>💰 Presupuesto</strong>
                <span>${ciudad.presupuesto}</span>
            </div>

            <div class="detalle-fila">
                <strong>⭐ Clasificación</strong>
                <span>${ciudad.estrellas}/5</span>
            </div>

        </div>

        <p style="margin-top:25px; line-height:1.7;">
            ${ciudad.descripcion}
        </p>

        <div class="aviso">

            ℹ️ Las estrellas de esta primera versión son
            una clasificación turística de demostración.
            Las puntuaciones reales de Google se incorporarán
            posteriormente mediante datos verificados.

        </div>

    `;


    mostrarPagina("detalles");

}


/* =========================================
   VER HOTEL
========================================= */

function verHotel(nombre) {

    const hotel = hoteles.find(function(item) {

        return item.nombre === nombre;

    });


    if (!hotel) return;


    const contenido =
        document.getElementById("contenido-detalles");


    contenido.innerHTML = `

        <img
            src="${hotel.imagen}"
            alt="${hotel.nombre}"
            class="detalle-imagen"
        >

        <h2>
            ${hotel.nombre}
        </h2>

        <div class="estrellas">

            ${crearEstrellas(hotel.estrellas)}

            <span class="puntuacion">
                ${hotel.puntuacion}/5
            </span>

        </div>

        <div class="detalle-informacion">

            <div class="detalle-fila">
                <strong>📍 Ciudad</strong>
                <span>${hotel.ciudad}</span>
            </div>

            <div class="detalle-fila">
                <strong>💰 Precio</strong>
                <span>
                    ${hotel.precio} ${hotel.detallePrecio}
                </span>
            </div>

            <div class="detalle-fila">
                <strong>⭐ Clasificación</strong>
                <span>${hotel.estrellas}/5</span>
            </div>

            <div class="detalle-fila">
                <strong>🏨 Servicios</strong>
                <span>${hotel.servicios}</span>
            </div>

        </div>

        <div class="aviso">
            ℹ️ Los precios son orientativos y deben verificarse
            antes de reservar.
        </div>

    `;


    mostrarPagina("detalles");

}


/* =========================================
   VER RESTAURANTE
========================================= */

function verRestaurante(nombre) {

    const restaurante = restaurantes.find(function(item) {

        return item.nombre === nombre;

    });


    if (!restaurante) return;


    const contenido =
        document.getElementById("contenido-detalles");


    contenido.innerHTML = `

        <img
            src="${restaurante.imagen}"
            alt="${restaurante.nombre}"
            class="detalle-imagen"
        >

        <h2>
            ${restaurante.nombre}
        </h2>

        <div class="estrellas">

            ${crearEstrellas(restaurante.estrellas)}

            <span class="puntuacion">
                ${restaurante.puntuacion}/5
            </span>

        </div>

        <div class="detalle-informacion">

            <div class="detalle-fila">
                <strong>📍 Ciudad</strong>
                <span>${restaurante.ciudad}</span>
            </div>

            <div class="detalle-fila">
                <strong>💰 Precio</strong>
                <span>
                    ${restaurante.precio}
                    ${restaurante.detallePrecio}
                </span>
            </div>

            <div class="detalle-fila">
                <strong>🍽️ Servicios</strong>
                <span>${restaurante.servicios}</span>
            </div>

            <div class="detalle-fila">
                <strong>⭐ Clasificación</strong>
                <span>${restaurante.estrellas}/5</span>
            </div>

        </div>

        <div class="aviso">
            ℹ️ Los precios son orientativos y deben verificarse
            directamente con el establecimiento.
        </div>

    `;


    mostrarPagina("detalles");

}


/* =========================================
   VER ACTIVIDAD
========================================= */

function verActividad(nombre) {

    const actividad = actividades.find(function(item) {

        return item.nombre === nombre;

    });


    if (!actividad) return;


    const contenido =
        document.getElementById("contenido-detalles");


    contenido.innerHTML = `

        <img
            src="${actividad.imagen}"
            alt="${actividad.nombre}"
            class="detalle-imagen"
        >

        <h2>
            ${actividad.nombre}
        </h2>

        <div class="estrellas">

            ${crearEstrellas(actividad.estrellas)}

            <span class="puntuacion">
                ${actividad.puntuacion}/5
            </span>

        </div>

        <div class="detalle-informacion">

            <div class="detalle-fila">
                <strong>📍 Ciudad</strong>
                <span>${actividad.ciudad}</span>
            </div>

            <div class="detalle-fila">
                <strong>💰 Precio</strong>
                <span>
                    ${actividad.precio}
                    ${actividad.detallePrecio}
                </span>
            </div>

            <div class="detalle-fila">
                <strong>🏝️ Incluye</strong>
                <span>${actividad.servicios}</span>
            </div>

            <div class="detalle-fila">
                <strong>⭐ Clasificación</strong>
                <span>${actividad.estrellas}/5</span>
            </div>

        </div>

        <div class="aviso">
            ℹ️ Los precios son orientativos y deben verificarse
            con el operador de la actividad antes de reservar.
        </div>

    `;


    mostrarPagina("detalles");

}


/* =========================================
   VOLVER
========================================= */

function volverAtras() {

    mostrarPagina("ciudades");

}


/* =========================================
   INICIAR TODO
========================================= */

mostrarCiudades();
mostrarHoteles();
mostrarRestaurantes();
mostrarActividades();
