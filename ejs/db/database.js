
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
            imagen: "ejs/public/images/products/img-tv-samsung-smart.jpg",
            comentarios: [
                {
                    nombre: "Juan",
                    comentario: "Me gusto mucho.",
                    imagen: "ejs/public/images/fotodePerfil.jpg"
                },
                {
                    nombre: "Ana",
                    comentario: "Muy utíl.",
                    imagen: "/images/fotodePerfil.jpg"
                },
                {
                    nombre: "Luisa",
                    comentario: "Tan buena.",
                    imagen: "/images/fotodePerfil.jpg"
                },

            ]
        },
    
    ]
        

}

module.exports = data;
