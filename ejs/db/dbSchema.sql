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
('ana@gmail.com', 'ana123', 'contraseña1', '1995-05-10', 12345678, 'img/perfiles/ana.jpg'),
('luisa@gmail.com', 'luisa_ok', 'contraseña3', '1998-12-01', 34567890, 'img/perfiles/luisa.jpg'),
('marcos@gmail.com', 'markus', 'contraseña4', '1990-03-15', 45678901, 'img/perfiles/marcos.jpg'),
('sofia@gmail.com', 'sofiii', 'contraseña5', '1997-07-07', 56789012, 'img/perfiles/sofia.jpg');

INSERT INTO productos (usuario_id, nombreArchivo, nombreProducto, descripcionProducto) VALUES
(1, 'producto1.jpg', 'Taza Mágica', 'Taza que cambia de color con el calor'),
(1, 'producto2.jpg', 'Cuaderno A5', 'Cuaderno artesanal con hojas recicladas'),
(2, 'producto3.jpg', 'Llavero 3D', 'Llavero impreso en 3D personalizado'),
(2, 'producto4.jpg', 'Cartera de cuero', 'Hecha a mano con cuero ecológico'),
(3, 'producto5.jpg', 'Almohada ergonómica', 'Ideal para dormir mejor'),
(3, 'producto6.jpg', 'Poster vintage', 'Estilo retro para decoración'),
(4, 'producto7.jpg', 'Kit de jardinería', 'Todo para tus plantas en casa'),
(4, 'producto8.jpg', 'Termo de acero', 'Mantiene el calor por 12 horas'),
(5, 'producto9.jpg', 'Portarretratos digital', 'Con pantalla táctil de 7 pulgadas'),
(5, 'producto10.jpg', 'Auriculares Bluetooth', 'Con cancelación de ruido');

INSERT INTO comentarios (producto_id, usuario_id, textoComentario) VALUES
(1, 2, '¡Me encantó este producto!'),
(1, 3, 'Lo compré y es tal cual la foto.'),
(1, 4, 'Buena calidad y envío rápido.'),
(2, 2, 'Muy lindo diseño.'),
(2, 5, 'Perfecto para regalo.'),
(2, 3, 'Volvería a comprar.'),
(3, 1, 'El llavero quedó genial.'),
(3, 4, 'Atención excelente.'),
(3, 5, 'Llegó antes de lo esperado.'),
(4, 1, 'Muy buena cartera, gracias.'),
(4, 3, 'Le encantó a mi hermana.'),
(4, 5, 'Volveré a comprar.'),
(5, 2, 'Dormí muy bien desde que la uso.'),
(5, 4, 'Recomendadísima.'),
(5, 1, 'Buena calidad.'),
(6, 2, 'Amé el diseño vintage.'),
(6, 5, '¡Justo lo que buscaba!'),
(6, 4, 'Hermoso.'),
(7, 1, 'Ideal para principiantes.'),
(7, 3, 'Tiene todo lo que necesito.'),
(7, 5, 'Muy útil.'),
(8, 2, 'Mantiene la temperatura bien.'),
(8, 3, 'Práctico y resistente.'),
(8, 1, 'Gran producto.'),
(9, 4, 'Me encantó el marco digital.'),
(9, 3, 'Buena resolución.'),
(9, 2, 'Funciona perfecto.'),
(10, 1, 'Sonido de alta calidad.'),
(10, 4, 'Buena batería.'),
(10, 2, 'Recomendados.');
