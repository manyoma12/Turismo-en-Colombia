/* =====================================
   EXPLORA COLOMBIA
   FUNCIONAMIENTO PRINCIPAL
===================================== */

let ciudadActual = null;
let paginaAnterior = "inicio";


/* =====================================
   CIUDADES
===================================== */

const ciudades = [
    {
        id: "buenaventura",
        nombre: "Buenaventura",
        departamento: "Valle del Cauca",
        imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: "cartagena",
        nombre: "Cartagena",
        departamento: "Bolívar",
        imagen: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: "santa-marta",
        nombre: "Santa Marta",
        departamento: "Magdalena",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: "medellin",
        nombre: "Medellín",
        departamento: "Antioquia",
        imagen: "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: "bogota",
        nombre: "Bogotá",
        departamento: "Cundinamarca",
        imagen: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: "cali",
        nombre: "Cali",
        departamento: "Valle del Cauca",
        imagen: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: "san-andres",
        nombre: "San Andrés",
        departamento: "Archipiélago de San Andrés",
        imagen: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: "pereira",
        nombre: "Pereira",
        departamento: "Risaralda",
        imagen: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: "armenia",
        nombre: "Armenia",
        departamento: "Quindío",
        imagen: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: "manizales",
        nombre: "Manizales",
        departamento: "Caldas",
        imagen: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85"
    }
];


/* =====================================
   HOTELES
===================================== */

const hoteles = [

    {
        id: "cosmos-pacifico",
        ciudad: "Buenaventura",
        nombre: "Cosmos Pacífico Hotel",
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
        rating: 4.5,
        reviews: 1665,
        descripcion:
            "Hotel ubicado en Buenaventura, ideal para viajeros que buscan alojamiento y acceso a los principales puntos de la ciudad.",
        direccion:
            "Cl. 3 #1A-57, Buenaventura, Valle del Cauca"
    },

    {
        id: "hotel-yubarta",
        ciudad: "Buenaventura",
        nombre: "Hotel Yubarta",
        imagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=85",
        rating: 4.4,
        reviews: 290,
        descripcion:
            "Alojamiento en Buenaventura pensado para quienes desean conocer el Pacífico colombiano.",
        direccion:
            "Buenaventura, Valle del Cauca"
    },

    {
        id: "dulces-suenos",
        ciudad: "Buenaventura",
        nombre: "Hotel Dulces Sueños",
        imagen: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=85",
        rating: 4.0,
        reviews: 225,
        descripcion:
            "Alternativa de hospedaje en Buenaventura para viajeros que buscan una estancia práctica.",
        direccion:
            "Buenaventura, Valle del Cauca"
    }
];


/* =====================================
   RESTAURANTES
===================================== */

const restaurantes = [

    {
        id: "uramba",
        ciudad: "Buenaventura",
        nombre: "Uramba Cocina",
        imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
        rating: 4.7,
        reviews: 448,
        descripcion:
            "Restaurante de Buenaventura con una propuesta gastronómica para disfrutar sabores del Pacífico y otras preparaciones.",
        direccion:
            "Buenaventura, Valle del Cauca"
    },

    {
        id: "kalunga",
        ciudad: "Buenaventura",
        nombre: "Kalunga Buenaventura",
        imagen: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85",
        rating: 4.7,
        reviews: 116,
        descripcion:
            "Restaurante ubicado en Buenaventura, una opción para disfrutar de la gastronomía local.",
        direccion:
            "Buenaventura, Valle del Cauca"
    },

    {
        id: "pez-dorado",
        ciudad: "Buenaventura",
        nombre: "Restaurante El Pez Dorado",
        imagen: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1000&q=85",
        rating: 4.8,
        reviews: 57,
        descripcion:
            "Restaurante de Buenaventura con una valoración destacada entre los visitantes.",
        direccion:
            "Buenaventura, Valle del Cauca"
    },

    {
        id: "oregano",
        ciudad: "Buenaventura",
        nombre: "Oregano Gastrobar",
        imagen: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=85",
        rating: 4.5,
        reviews: 149,
        descripcion:
            "Gastrobar en Buenaventura para disfrutar de comida y ambiente social.",
        direccion:
            "Buenaventura, Valle del Cauca"
    }
];


/* =====================================
   ACTIVIDADES
===================================== */

const actividades = [

    {
        id: "ballenas",
        ciudad: "Buenaventura",
        nombre: "Avistamiento de ballenas",
        imagen: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1000&q=85",
        descripcion:
            "Experiencia del Pacífico colombiano que permite buscar ballenas jorobadas durante su temporada de visita.",
        ubicacion:
            "Pacífico colombiano"
    },

    {
        id: "bahia-malaga",
        ciudad: "Buenaventura",
        nombre: "Bahía Málaga",
        imagen: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
        descripcion:
            "Destino natural del Pacífico colombiano conocido por sus paisajes, biodiversidad y actividades de naturaleza.",
        ubicacion:
            "Buenaventura, Valle del Cauca"
    },

    {
        id: "parque-tayrona",
        ciudad: "Santa Marta",
        nombre: "Parque Nacional Natural Tayrona",
        imagen: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85",
        descripcion:
            "Uno de los destinos naturales más conocidos del Caribe colombiano.",
        ubicacion:
            "Santa Marta, Magdalena"
    },

    {
        id: "cafe-pereira",
        ciudad: "Pereira",
        nombre: "Experiencia cafetera",
        imagen: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=85",
        descripcion:
            "Experiencia para conocer el mundo del café y los paisajes cafeteros de la región.",
        ubicacion:
            "Pereira, Risaralda"
    }
];


/* =====================================
   LUGARES TURÍSTICOS
===================================== */

const lugares = [

    {
        id: "muelle-buenaventura",
        ciudad: "Buenaventura",
        nombre: "Muelle Turístico Buenaventura",
        imagen: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
        rating: 4.2,
        reviews: 10591,
        descripcion:
            "Punto de interés turístico de Buenaventura y uno de los lugares de referencia para conocer la ciudad y su conexión con el Pacífico.",
        direccion:
            "Buenaventura, Valle del Cauca"
    },

    {
        id: "malecon-bahia-cruz",
        ciudad: "Buenaventura",
        nombre: "Malecón Bahía de La Cruz",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
        rating: 4.5,
        reviews: 6815,
        descripcion:
            "Espacio turístico frente a la bahía donde visitantes pueden disfrutar del ambiente y los paisajes de Buenaventura.",
        direccion:
            "Buenaventura, Valle del Cauca"
    },

    {
        id: "playa-pianguita",
        ciudad: "Buenaventura",
        nombre: "Playa Pianguita",
        imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
        rating: 4.3,
        reviews: 799,
        descripcion:
            "Playa del Pacífico colombiano conocida por su entorno natural y su ambiente de descanso.",
        direccion:
            "Buenaventura, Valle del Cauca"
    }
];


/* =====================================
   ESTRELLAS
===================================== */

function crearEstrellas(rating) {

    if (!rating) {
        return `
            <div class="valoracion-pendiente">
                ⭐ Valoración no disponible
            </div>
        `;
    }

    return `
        <div class="valoracion-real">
            <span class="estrellas">
                ★★★★★
            </span>

            <strong>
                ${rating}
            </strong>
        </div>
    `;
}


/* =====================================
   CAMBIAR PÁGINA
===================================== */

function mostrarPagina(id) {

    document.querySelectorAll(".pagina").forEach(function (pagina) {
        pagina.classList.remove("activa");
    });

    const pagina = document.getElementById(id);

    if (!pagina) {
        console.error("No existe la página:", id);
        return;
    }

    pagina.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (id === "ciudades") {
        mostrarCiudades();
    }

    if (id === "inicio") {
        paginaAnterior = "inicio";
    }
}


/* =====================================
   MOSTRAR CIUDADES
===================================== */

function mostrarCiudades() {

    const contenedor = document.getElementById("lista-ciudades");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    ciudades.forEach(function (ciudad) {

        const tarjeta = document.createElement("div");

        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = `

            <img
                src="${ciudad.imagen}"
                alt="${ciudad.nombre}"
                loading="lazy"
            >

            <div class="tarjeta-contenido">

                <h3>
                    ${ciudad.nombre}
                </h3>

                <p>
                    ${ciudad.departamento}
                </p>

                <button
                    class="boton-principal"
                    onclick="seleccionarCiudad('${ciudad.id}')"
                    style="margin-top:18px; width:100%; min-width:0;"
                >
                    <span>Explorar</span>
                    <strong>→</strong>
                </button>

            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}


/* =====================================
   SELECCIONAR CIUDAD
===================================== */

function seleccionarCiudad(id) {

    const ciudad = ciudades.find(function (item) {
        return item.id === id;
    });

    if (!ciudad) return;

    ciudadActual = ciudad;

    const banner = document.getElementById("ciudad-seleccionada");

    if (banner) {

        banner.innerHTML = `

            <div>

                <div class="mini-titulo" style="color:#d7ad4b;">
                    DESTINO SELECCIONADO
                </div>

                <h2 style="color:white; margin:0;">
                    ${ciudad.nombre}
                </h2>

                <p style="color:#dce3e8; margin-top:8px;">
                    ${ciudad.departamento}
                </p>

            </div>
        `;
    }

    mostrarPagina("menu-ciudad");
}


/* =====================================
   MOSTRAR CATEGORÍA
===================================== */

function mostrarCategoriaCiudad(categoria) {

    if (!ciudadActual) {

        mostrarPagina("ciudades");

        return;
    }

    paginaAnterior = "menu-ciudad";

    if (categoria === "hoteles") {
        mostrarHotelesCiudad();
        return;
    }

    if (categoria === "restaurantes") {
        mostrarRestaurantesCiudad();
        return;
    }

    if (categoria === "actividades") {
        mostrarActividadesCiudad();
        return;
    }

    if (categoria === "lugares") {
        mostrarLugaresCiudad();
        return;
    }
}


/* =====================================
   HOTELES DE LA CIUDAD
===================================== */

function mostrarHotelesCiudad() {

    const contenedor = document.getElementById("lista-hoteles");

    const titulo = document.getElementById("texto-hoteles");

    if (!contenedor) return;

    const resultados = hoteles.filter(function (hotel) {
        return hotel.ciudad === ciudadActual.nombre;
    });

    if (titulo) {
        titulo.textContent =
            `Hoteles disponibles en ${ciudadActual.nombre}.`;
    }

    contenedor.innerHTML = "";

    if (resultados.length === 0) {

        mostrarSinResultados(
            contenedor,
            "Todavía no tenemos hoteles cargados para esta ciudad."
        );

    } else {

        resultados.forEach(function (hotel) {
            contenedor.innerHTML += crearTarjetaHotel(hotel);
        });
    }

    mostrarPagina("hoteles");
}


/* =====================================
   TARJETA HOTEL
===================================== */

function crearTarjetaHotel(hotel) {

    return `

        <article class="tarjeta">

            <img
                src="${hotel.imagen}"
                alt="${hotel.nombre}"
                loading="lazy"
            >

            <div class="tarjeta-contenido">

                <h3>
                    ${hotel.nombre}
                </h3>

                ${crearEstrellas(hotel.rating)}

                <p>
                    ${hotel.reviews.toLocaleString("es-CO")}
                    reseñas en Google
                </p>

                <p style="margin-top:10px;">
                    ${hotel.descripcion}
                </p>

                <button
                    class="boton-principal"
                    onclick="verHotel('${hotel.id}')"
                    style="margin-top:18px; width:100%; min-width:0;"
                >
                    <span>Ver información</span>
                    <strong>→</strong>
                </button>

            </div>

        </article>
    `;
}


/* =====================================
   RESTAURANTES
===================================== */

function mostrarRestaurantesCiudad() {

    const contenedor =
        document.getElementById("lista-restaurantes");

    const titulo =
        document.getElementById("texto-restaurantes");

    if (!contenedor) return;

    const resultados = restaurantes.filter(function (restaurante) {
        return restaurante.ciudad === ciudadActual.nombre;
    });

    if (titulo) {
        titulo.textContent =
            `Restaurantes disponibles en ${ciudadActual.nombre}.`;
    }

    contenedor.innerHTML = "";

    if (resultados.length === 0) {

        mostrarSinResultados(
            contenedor,
            "Todavía no tenemos restaurantes cargados para esta ciudad."
        );

    } else {

        resultados.forEach(function (restaurante) {

            contenedor.innerHTML += `

                <article class="tarjeta">

                    <img
                        src="${restaurante.imagen}"
                        alt="${restaurante.nombre}"
                        loading="lazy"
                    >

                    <div class="tarjeta-contenido">

                        <h3>
                            ${restaurante.nombre}
                        </h3>

                        ${crearEstrellas(restaurante.rating)}

                        <p>
                            ${restaurante.reviews.toLocaleString("es-CO")}
                            reseñas en Google
                        </p>

                        <p style="margin-top:10px;">
                            ${restaurante.descripcion}
                        </p>

                        <button
                            class="boton-principal"
                            onclick="verRestaurante('${restaurante.id}')"
                            style="margin-top:18px; width:100%; min-width:0;"
                        >
                            <span>Ver información</span>
                            <strong>→</strong>
                        </button>

                    </div>

                </article>
            `;
        });
    }

    mostrarPagina("restaurantes");
}


/* =====================================
   ACTIVIDADES
===================================== */

function mostrarActividadesCiudad() {

    const contenedor =
        document.getElementById("lista-actividades");

    const titulo =
        document.getElementById("texto-actividades");

    if (!contenedor) return;

    const resultados = actividades.filter(function (actividad) {
        return actividad.ciudad === ciudadActual.nombre;
    });

    if (titulo) {
        titulo.textContent =
            `Experiencias para disfrutar en ${ciudadActual.nombre}.`;
    }

    contenedor.innerHTML = "";

    if (resultados.length === 0) {

        mostrarSinResultados(
            contenedor,
            "Todavía no tenemos actividades cargadas para esta ciudad."
        );

    } else {

        resultados.forEach(function (actividad) {

            contenedor.innerHTML += `

                <article class="tarjeta">

                    <img
                        src="${actividad.imagen}"
                        alt="${actividad.nombre}"
                        loading="lazy"
                    >

                    <div class="tarjeta-contenido">

                        <h3>
                            ${actividad.nombre}
                        </h3>

                        <p>
                            ${actividad.descripcion}
                        </p>

                        <p style="margin-top:12px;">
                            📍 ${actividad.ubicacion}
                        </p>

                        <button
                            class="boton-principal"
                            onclick="verActividad('${actividad.id}')"
                            style="margin-top:18px; width:100%; min-width:0;"
                        >
                            <span>Ver información</span>
                            <strong>→</strong>
                        </button>

                    </div>

                </article>
            `;
        });
    }

    mostrarPagina("actividades");
}


/* =====================================
   LUGARES
===================================== */

function mostrarLugaresCiudad() {

    const contenedor =
        document.getElementById("lista-lugares");

    const titulo =
        document.getElementById("texto-lugares");

    if (!contenedor) return;

    const resultados = lugares.filter(function (lugar) {
        return lugar.ciudad === ciudadActual.nombre;
    });

    if (titulo) {
        titulo.textContent =
            `Lugares turísticos de ${ciudadActual.nombre}.`;
    }

    contenedor.innerHTML = "";

    if (resultados.length === 0) {

        mostrarSinResultados(
            contenedor,
            "Todavía no tenemos lugares turísticos cargados para esta ciudad."
        );

    } else {

        resultados.forEach(function (lugar) {

            contenedor.innerHTML += `

                <article class="tarjeta">

                    <img
                        src="${lugar.imagen}"
                        alt="${lugar.nombre}"
                        loading="lazy"
                    >

                    <div class="tarjeta-contenido">

                        <h3>
                            ${lugar.nombre}
                        </h3>

                        ${crearEstrellas(lugar.rating)}

                        <p>
                            ${lugar.reviews.toLocaleString("es-CO")}
                            reseñas en Google
                        </p>

                        <p style="margin-top:10px;">
                            ${lugar.descripcion}
                        </p>

                        <button
                            class="boton-principal"
                            onclick="verLugar('${lugar.id}')"
                            style="margin-top:18px; width:100%; min-width:0;"
                        >
                            <span>Ver información</span>
                            <strong>→</strong>
                        </button>

                    </div>

                </article>
            `;
        });
    }

    mostrarPagina("lugares");
}


/* =====================================
   SIN RESULTADOS
===================================== */

function mostrarSinResultados(contenedor, mensaje) {

    contenedor.innerHTML = `

        <div
            style="
                grid-column:1/-1;
                padding:50px;
                text-align:center;
                background:white;
                border-radius:20px;
            "
        >

            <div style="font-size:45px;">
                🔎
            </div>

            <h3 style="margin-top:15px;">
                Próximamente
            </h3>

            <p style="margin-top:10px;">
                ${mensaje}
            </p>

        </div>
    `;
}


/* =====================================
   VER HOTEL
===================================== */

function verHotel(id) {

    const hotel = hoteles.find(function (item) {
        return item.id === id;
    });

    if (!hotel) return;

    mostrarDetalle({

        tipo: "Hotel",

        nombre: hotel.nombre,

        imagen: hotel.imagen,

        descripcion: hotel.descripcion,

        contenido: `
            ${crearEstrellas(hotel.rating)}

            <div class="detalle-fila">

                <div>
                    ⭐ ${hotel.rating}/5
                </div>

                <div>
                    💬 ${hotel.reviews.toLocaleString("es-CO")} reseñas
                </div>

                <div>
                    📍 ${hotel.direccion}
                </div>

            </div>

            <p class="google-info">
                Valoración y número de reseñas mostrados
                según la información disponible en Google.
            </p>
        `
    });
}


/* =====================================
   VER RESTAURANTE
===================================== */

function verRestaurante(id) {

    const restaurante = restaurantes.find(function (item) {
        return item.id === id;
    });

    if (!restaurante) return;

    mostrarDetalle({

        tipo: "Restaurante",

        nombre: restaurante.nombre,

        imagen: restaurante.imagen,

        descripcion: restaurante.descripcion,

        contenido: `
            ${crearEstrellas(restaurante.rating)}

            <div class="detalle-fila">

                <div>
                    ⭐ ${restaurante.rating}/5
                </div>

                <div>
                    💬 ${restaurante.reviews.toLocaleString("es-CO")} reseñas
                </div>

                <div>
                    📍 ${restaurante.direccion}
                </div>

            </div>

            <p class="google-info">
                Valoración y número de reseñas mostrados
                según la información disponible en Google.
            </p>
        `
    });
}


/* =====================================
   VER ACTIVIDAD
===================================== */

function verActividad(id) {

    const actividad = actividades.find(function (item) {
        return item.id === id;
    });

    if (!actividad) return;

    mostrarDetalle({

        tipo: "Actividad",

        nombre: actividad.nombre,

        imagen: actividad.imagen,

        descripcion: actividad.descripcion,

        contenido: `
            <div class="detalle-fila">

                <div>
                    📍 ${actividad.ubicacion}
                </div>

            </div>
        `
    });
}


/* =====================================
   VER LUGAR
===================================== */

function verLugar(id) {

    const lugar = lugares.find(function (item) {
        return item.id === id;
    });

    if (!lugar) return;

    mostrarDetalle({

        tipo: "Lugar turístico",

        nombre: lugar.nombre,

        imagen: lugar.imagen,

        descripcion: lugar.descripcion,

        contenido: `
            ${crearEstrellas(lugar.rating)}

            <div class="detalle-fila">

                <div>
                    ⭐ ${lugar.rating}/5
                </div>

                <div>
                    💬 ${lugar.reviews.toLocaleString("es-CO")} reseñas
                </div>

                <div>
                    📍 ${lugar.direccion}
                </div>

            </div>

            <p class="google-info">
                Valoración y número de reseñas mostrados
                según la información disponible en Google.
            </p>
        `
    });
}


/* =====================================
   DETALLE
===================================== */

function mostrarDetalle(datos) {

    paginaAnterior =
        document.querySelector(".pagina.activa")?.id ||
        "menu-ciudad";

    const contenedor =
        document.getElementById("contenido-detalles");

    if (!contenedor) return;

    contenedor.innerHTML = `

        <img
            class="detalle-imagen"
            src="${datos.imagen}"
            alt="${datos.nombre}"
        >

        <div class="detalle-informacion">

            <span class="mini-titulo">
                ${datos.tipo}
            </span>

            <h2>
                ${datos.nombre}
            </h2>

            <p class="detalle-descripcion">
                ${datos.descripcion}
            </p>

            ${datos.contenido}

        </div>
    `;

    mostrarPagina("detalles");
}


/* =====================================
   VOLVER AL MENÚ DE CIUDAD
===================================== */

function volverAlMenuCiudad() {

    if (!ciudadActual) {

        mostrarPagina("ciudades");

        return;
    }

    mostrarPagina("menu-ciudad");
}


/* =====================================
   VOLVER ATRÁS
===================================== */

function volverAtras() {

    if (ciudadActual) {

        mostrarPagina("ciudades");

    } else {

        mostrarPagina("inicio");
    }
}


/* =====================================
   VOLVER DESDE DETALLE
===================================== */

function volverDelDetalle() {

    if (paginaAnterior) {

        mostrarPagina(paginaAnterior);

    } else {

        mostrarPagina("menu-ciudad");
    }
}


/* =====================================
   INICIO
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    mostrarPagina("inicio");

});
