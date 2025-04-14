
const data = {
    usuario: [
    {
        id: 1,
        email: "juan05@gmail.com",
        usuario: "Juan Antonio Hierro",
        contraseña:"Perr@123",
        fechaNacimiento:"1992-08-23",
        fotoPerfil: "/images/fotodePerfil.jpg",
    }
    ],

    productos: [
        { id: 1, usuario_id: 1, nombreArchivo: 'producto1.jpg', nombreProducto: '', descripcionProducto: '' },
        { id: 2, usuario_id: 1, nombreArchivo: 'producto2.jpg', nombreProducto: '', descripcionProducto: '' },
        { id: 3, usuario_id: 2, nombreArchivo: 'producto3.jpg', nombreProducto: '', descripcionProducto: '' },
        { id: 4, usuario_id: 2, nombreArchivo: 'producto4.jpg', nombreProducto: '', descripcionProducto: '' },
        { id: 5, usuario_id: 3, nombreArchivo: 'producto5.jpg', nombreProducto: '', descripcionProducto: '' },
        { id: 6, usuario_id: 3, nombreArchivo: 'producto6.jpg', nombreProducto: '', descripcionProducto: 'Estilo retro para decoración' },
        { id: 7, usuario_id: 4, nombreArchivo: 'producto7.jpg', nombreProducto: '', descripcionProducto: '' },
        { id: 8, usuario_id: 4, nombreArchivo: 'producto8.jpg', nombreProducto: '', descripcionProducto: '' },
        { id: 9, usuario_id: 5, nombreArchivo: 'producto9.jpg', nombreProducto: '', descripcionProducto: 's' },
        { id: 10, usuario_id: 5, nombreArchivo: 'producto10.jpg', nombreProducto: 'Auriculares Bluetooth', descripcionProducto: 'Con cancelación de ruido' }
      ]

}

module.exports = data;
