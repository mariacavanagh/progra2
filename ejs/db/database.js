
const data = {
    usuario: [
    {
        email: "juan05@gmail.com",
        usuario: "Juan Antonio Hierro",
        contraseña:"Perr@123",
        fechaNacimiento:"1992-08-23",
        fotoPerfil: "/images/fotodePerfil.jpg",
    }
    ],

    productos: [
        {
            nombre: "tele",
            descripcion: "es muy buena",
            imagen: "/images/tele.png",
            comentarios: [
                {
                    nombre: "juan",
                    comentario: "me gusto mucho",
                    imagen: "/imagenes/users/usuario1.png"
                }
            ]
        },
    ]

}

module.exports = data;
