
const data = {
    usuario: 
    {
        email: "juan05@gmail.com",
        usuario: "Juan Antonio Hierro",
        contraseña:"Perr@123",
        fechaNacimiento:"1992-08-23",
        fotoPerfil: "/images/fotodePerfil.jpg",
    },

    productos: [
        {
            nombre: "Tv Samsung Smart",
            descripcion: "es muy buena",
            imagen: "ejs/public/images/products/img-samsung-galaxy-s10.jpg",
            comentarios: [
                {
                    nombre: "juanHierro",
                    comentario: "Me gusto mucho.",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "ana123",
                    comentario: "Muy utíl.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "luisa_ok",
                    comentario: "Tan buena.",
                    imagen: "/images/fotodePerfil.jpg"
                }
            ]
        },
        {
            nombre: "Irobot Roomba",
            descripcion: "Aspirador automata",
            imagen: "ejs/public/images/products/02dee987-233b-4e0c-8464-b2bc86483fe7.jpg",

            comentarios: [
                {
                    nombre: "sofiii",
                    comentario: "Ni un ruido.",
                   imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "markus",
                    comentario: "Limpio mi cuarto en 2 minutos.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "ana123",
                    comentario: "A mi perros no les gusta :(",
                    imagen: "/images/fotodePerfil.jpg"
                }
            ]
        },

        {
            nombre: "Magsafe charger",
            descripcion: "Cargador inalambrico",
            imagen: "ejs/public/images/products/6e13385a-2443-47de-985d-b86fb8063f7b.jpg",
            comentarios: [
                {
                    nombre: "juanHierro",
                    comentario: "No mas cables rotos.",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "markus",
                    comentario: "Eficiente.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "luisa_ok",
                    comentario: "Facil de usar.",
                    imagen: "/images/fotodePerfil.jpg"
                },
            ]
        },
        {
            nombre: "Mouse argonomico",
            descripcion: "Mouse para largas sesiones en la computadora con la mejor comodidad.",
            imagen: "ejs/public/images/products/76e8e952-9a85-4db6-826a-f6f6a604891c.jpg",
            comentarios: [
                {
                    nombre: "sofiii",
                    comentario: "Con este mouse mi mano toco el cielo, muy comodo.",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "markus",
                    comentario: "Muy bueno para mi trabajo como diseñador.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "ana123",
                    comentario: "Lo use como por 3 horas seguidas y no senti incomada mi mano 10/10.",
                    imagen: "/images/fotodePerfil.jpg"
                },
            ]
        },
        {
            nombre: "Airpods 3 generación",
            descripcion: "Auriculares de inalambricos de Apple.",
            imagen: "ejs/public/images/products/6e13385a-2443-47de-985d-b86fb8063f7b.jpg",
            comentarios: [
                {
                    nombre: "sofiii",
                    comentario: "En el tren, bondi y en cualquier lugar, son infaltables.",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "markus",
                    comentario: "Aguante Cerati, estos auris le hacen justicia.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "luisa_ok",
                    comentario: "Los bajos suenan increible",
                    imagen: "/images/fotodePerfil.jpg"
                },
            ]
        },
        {
            nombre: "Macbook Airpro",
            descripcion: "Laptop carismatica de Apple.",
            imagen: "ejs/public/images/products/6e13385a-2443-47de-985d-b86fb8063f7b.jpg",
            comentarios: [
                {
                    nombre: "ana123",
                    comentario: "Muy bueno el procesamiento.",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "sofiii",
                    comentario: "Apple > cauqluier compu.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "juanHierro",
                    comentario: "Nunca mas quiero otra computadora.",
                    imagen: "/images/fotodePerfil.jpg"
                },
            ]
        },
        {
            nombre: "Samsung galaxy",
            descripcion: "Telefono celular de Samsung con disponjibilidad a 5G",
            imagen: "ejs/public/images/products/6e13385a-2443-47de-985d-b86fb8063f7b.jpg",
            comentarios: [
                {
                    nombre: "ana123",
                    comentario: "Buena camara",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "juanHierro",
                    comentario: "Mejor bateria.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "markus",
                    comentario: "Muy lindos los colores",
                    imagen: "/images/fotodePerfil.jpg"
                },
            ]
        },
        {
            nombre: "Lavarropas Samsung",
            descripcion: "Lavarropas marca samsung de alta calidad",
            imagen: "ejs/public/images/products/lavarropas_2_800x800.jpg",
            comentarios: [
                {
                    nombre: "ana123",
                    comentario: "Limpia en menos de 20 minutos es increible",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "sofiii",
                    comentario: "Muy facil de elejir los modo de limepieza.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "markus",
                    comentario: "Se rompio y la pieza para arreglarla es casi inconseguible no recomiendo.",
                    imagen: "/images/fotodePerfil.jpg"
                },
            ]
        },
        {
            nombre: "Samsung Fridge",
            descripcion: "Heladera inteligente de Samsung con manejo por bluetooth.",
            imagen: "ejs/public/images/products/samsung-nevera_800x800.jpg",
            comentarios: [
                {
                    nombre: "ana123",
                    comentario: "Manejo la temperatura desde mi telefono :)",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "juanHierro",
                    comentario: "Comentando desde la misma heladera es increible",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "luisa_ok",
                    comentario: "Mucho espacion para las verduras.",
                    imagen: "/images/fotodePerfil.jpg"
                },
            ]
        },
        {
            nombre: "Ninja Airfryer",
            descripcion: "Freidora de aire marca Ninja.",
            imagen: "ejs/public/images/products/ninja_airfryer_800x800.jpg",
            comentarios: [
                {
                    nombre: "ana123",
                    comentario: "Muchos modos y recetas para explorar.",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "sofiii",
                    comentario: "No cocino mas comidas con acietes.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "luisa_ok",
                    comentario: "Lavarla se hace muy complicado.",
                    imagen: "/images/fotodePerfil.jpg"
                },
            ]
        },
    ]
}

module.exports = data;
