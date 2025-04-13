
const data = {
    usuario: [
    { 
        id: 1,
        email: "juan05@gmail.com",
        usuario: "Juan Antonio Hierro",
        contraseña:"Perr@123",
        fechaNacimiento:"1992-08-23",
        fotoPerfil: "/images/fotodePerfil.jpg",
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
    },
    {
        id: 2,
        email: 'ana@gmail.com',
        usuario: 'ana123',
        contraseña: 'contraseña1',
        fechaNacimiento: '1995-05-10',
        dni: 12345678,
        fotoPerfil: 'img/perfiles/ana.jpg'
      },
      {
        id: 3,
        email: 'luisa@gmail.com',
        usuario: 'luisa_ok',
        contraseña: 'contraseña3',
        fechaNacimiento: '1998-12-01',
        dni: 34567890,
        fotoPerfil: 'img/perfiles/luisa.jpg'
      },
      {
        id: 4,
        email: 'marcos@gmail.com',
        usuario: 'markus',
        contraseña: 'contraseña4',
        fechaNacimiento: '1990-03-15',
        dni: 45678901,
        fotoPerfil: 'img/perfiles/marcos.jpg'
      },
      {
        id: 5,
        email: 'sofia@gmail.com',
        usuario: 'sofiii',
        contraseña: 'contraseña5',
        fechaNacimiento: '1997-07-07',
        dni: 56789012,
        fotoPerfil: 'img/perfiles/sofia.jpg'
      }
    ],

    productos: {
        productos: [
            { id: 1, usuario_id: 1, nombreArchivo: 'producto1.jpg', nombreProducto: 'Taza Mágica', descripcionProducto: 'Taza que cambia de color con el calor' },
            { id: 2, usuario_id: 1, nombreArchivo: 'producto2.jpg', nombreProducto: 'Cuaderno A5', descripcionProducto: 'Cuaderno artesanal con hojas recicladas' },
            { id: 3, usuario_id: 2, nombreArchivo: 'producto3.jpg', nombreProducto: 'Llavero 3D', descripcionProducto: 'Llavero impreso en 3D personalizado' },
            { id: 4, usuario_id: 2, nombreArchivo: 'producto4.jpg', nombreProducto: 'Cartera de cuero', descripcionProducto: 'Hecha a mano con cuero ecológico' },
            { id: 5, usuario_id: 3, nombreArchivo: 'producto5.jpg', nombreProducto: 'Almohada ergonómica', descripcionProducto: 'Ideal para dormir mejor' },
            { id: 6, usuario_id: 3, nombreArchivo: 'producto6.jpg', nombreProducto: 'Poster vintage', descripcionProducto: 'Estilo retro para decoración' },
        ]
    }

}

module.exports = data;

