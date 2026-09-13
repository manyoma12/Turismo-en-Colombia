```javascript
/* =====================================================
   🇨🇴 EXPLORA COLOMBIA
   SISTEMA DE NAVEGACIÓN Y CATÁLOGOS
===================================================== */


/* =====================================================
   VARIABLES
===================================================== */

let ciudadActual = null;
let paginaAnterior = "ciudades";


/* =====================================================
   CIUDADES
===================================================== */

const ciudades = [

    {
        id: "buenaventura",
        nombre: "Buenaventura",
        departamento: "Valle del Cauca",
        imagen: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90",
        descripcion:
            "Destino del Pacífico colombiano reconocido por sus paisajes naturales, gastronomía, playas y experiencias de naturaleza.",
        lugares:
            "Bahía Málaga • Juanchaco • Ladrilleros • La Barra • San Cipriano"
    },

    {
        id: "cartagena",
        nombre: "Cartagena",
        departamento: "Bolívar",
        imagen: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1200&q=90",
        descripcion:
            "Destino del Caribe colombiano famoso por su arquitectura histórica, ciudad amurallada, playas y gastronomía.",
        lugares:
            "Ciudad Amurallada • Getsemaní • Castillo de San Felipe • Islas del Rosario"
    },

    {
        id: "santa-marta",
        nombre: "Santa Marta",
        departamento: "Magdalena",
        imagen: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90",
        descripcion:
            "Destino del Caribe colombiano rodeado de playas, naturaleza y montañas.",
        lugares:
            "Parque Tayrona • Minca • Ciudad Perdida • Playa Grande"
    },

    {
        id: "medellin",
        nombre: "Medellín",
        departamento: "Antioquia",
        imagen: "https://images.unsplash.com/photo-1595936797933-e19e9c4c8b1d?auto=format&fit=crop&w=1200&q=90",
        descripcion:
            "Ciudad de los Andes conocida por su cultura, gastronomía, arte, innovación y paisajes montañosos.",
        lugares:
            "Comuna 13 • Pueblito Paisa • Parque Arví • El Poblado"
    },

    {
        id: "bogota",
        nombre: "Bogotá",
        departamento: "Cundinamarca",
        imagen: "https://images.unsplash.com/photo-1531057242626-ef7d6f2a4c7f?auto=format&fit=crop&w=1200&q=90",
        descripcion:
            "Capital de Colombia con una gran oferta cultural, histórica, gastronómica y artística.",
        lugares:
            "Monserrate • Museo del Oro • La Candelaria • Museo Botero"
    },

    {
        id: "cali",
        nombre: "Cali",
        departamento: "Valle del Cauca",
        imagen: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=90",
        descripcion:
            "Ciudad reconocida por la salsa, su cultura, gastronomía y conexión con el Pacífico.",
        lugares:
            "San Antonio • Cristo Rey • Bulevar del Río • Zoológico de Cali"
    },

    {
        id: "san-andres",
        nombre: "San Andrés",
        departamento: "Archipiélago de San Andrés",
        imagen: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=90",
        descripcion:
            "Destino insular del Caribe conocido por sus playas y aguas de diferentes tonalidades.",
        lugares:
            "Johnny Cay • El Acuario • San Luis • La Piscinita"
    },

    {
        id: "pereira",
        nombre: "Pereira",
        departamento: "Risaralda",
        imagen: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=90",
        descripcion:
            "Destino del Eje Cafetero rodeado de montañas y paisajes cafeteros.",
        lugares:
            "Santa Rosa de Cabal • Fincas cafeteras • Ukumarí • Paisajes cafeteros"
    },

    {
        id: "armenia",
        nombre: "Armenia",
        departamento: "Quindío",
        imagen: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=90",
        descripcion:
            "Destino del Eje Cafetero ideal para conocer la cultura cafetera y sus paisajes.",
        lugares:
            "Parque del Café • Salento • Valle de Cocora • Filandia"
    },

    {
        id: "manizales",
        nombre: "Manizales",
        departamento: "Caldas",
        imagen: "https://images.unsplash.com/photo-1500530855
```
