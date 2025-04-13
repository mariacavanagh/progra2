CREATE DATABASE mi_proyecto;
USE mi_proyecto;

CREATE TABLE usuarios (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  contraseña VARCHAR(255) NOT NULL,
  fechaNacimiento DATE NOT NULL,
  dni INT UNSIGNED NOT NULL,
  fotoPerfil VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT UNSIGNED NOT NULL,
  nombreArchivo VARCHAR(255) NOT NULL,
  nombreProducto VARCHAR(255) NOT NULL,
  descripcionProducto TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  producto_id INT UNSIGNED NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  textoComentario TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);
INSERT INTO usuarios (email, usuario, contraseña, fechaNacimiento, dni, fotoPerfil) VALUES
('juan05@gmail.com', 'juanHierro', 'contraseña2', '1999-04-12', 23456789, '/images/fotodePerfil.jpg'),
('ana@gmail.com', 'ana123', 'contraseña1', '1995-05-10', 12345678, ''),
('luisa@gmail.com', 'luisa_ok', 'contraseña3', '1998-12-01', 34567890, ''),
('marcos@gmail.com', 'markus', 'contraseña4', '1990-03-15', 45678901, ''),
('sofia@gmail.com', 'sofiii', 'contraseña5', '1997-07-07', 56789012, '');

INSERT INTO productos (usuario_id, nombreArchivo, nombreProducto, descripcionProducto) VALUES
(1, 'producto1.jpg', '', ''),
(1, 'producto2.jpg', '', ''),
(2, 'producto3.jpg', '', ''),
(2, 'producto4.jpg', '', ''),
(3, 'producto5.jpg', '', ''),
(3, 'producto6.jpg', '', ''),
(4, 'producto7.jpg', '', ''),
(4, 'producto8.jpg', '', ''),
(5, 'producto9.jpg', '', ''),
(5, 'producto10.jpg', 'Auriculares Bluetooth', 'Con cancelación de ruido');

INSERT INTO comentarios (producto_id, usuario_id, textoComentario) VALUES
(1, 2, ''),
(1, 3, ''),
(1, 4, ''),
(2, 2, ''),
(2, 5, ''),
(2, 3, ''),
(3, 1, ''),
(3, 4, ''),
(3, 5, ''),
(4, 1, ''),
(4, 3, ''),
(4, 5, ''),
(5, 2, ''),
(5, 4, ''),
(5, 1, ''),
(6, 2, ''),
(6, 5, ''),
(6, 4, ''),
(7, 1, ''),
(7, 3, ''),
(7, 5, ''),
(8, 2, ''),
(8, 3, ''),
(8, 1, 'Gran producto.'),
(9, 4, 'Me encantó el marco digital.'),
(9, 3, 'Buena resolución.'),
(9, 2, 'Funciona perfecto.'),
(10, 1, 'Sonido de alta calidad.'),
(10, 4, 'Buena batería.'),
(10, 2, 'Recomendados.');
