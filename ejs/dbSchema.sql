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
('juan05@gmail.com', 'juanHierro', 'contraseña2', '1999-04-12', 23456789, 'images/fotodePerfil.jpg'),
('ana@gmail.com', 'ana123', 'contraseña1', '1995-05-10', 12345678, 'images/users/anaaaa.jpg'),
('luisa@gmail.com', 'luisa_ok', 'contraseña3', '1998-12-01', 34567890, 'images/users/luisa.jpg'),
('marcos@gmail.com', 'markus', 'contraseña4', '1990-03-15', 45678901, '/images/users/marcos.jpg'),
('sofia@gmail.com', 'sofiii', 'contraseña5', '1997-07-07', 56789012, 'images/users/sofiiaaa.jpg');

INSERT INTO productos (nombre, descripcion, imagen) VALUES
('images/products/img-tv-samsung-smart.jpg','Tv Samsung Smart', 'es muy buena'),
('images/products/02dee987-233b-4e0c-8464-b2bc86483fe7.jpg', 'Irobot Roomba', 'Aspirador automata'),
('images/products/6e13385a-2443-47de-985d-b86fb8063f7b.jpg', 'Magsafe charger', 'Cargador inalambrico'),
('images/products/76e8e952-9a85-4db6-826a-f6f6a604891c.jpg', 'Mouse argonomico', 'Mouse para largas sesiones en la computadora con la mejor comodidad.'),
('images/products/52225ff7-ce12-4587-858e-a85090d931e0.jpg', 'Airpods 3 generación', 'Auriculares de inalambricos de Apple.'),
('images/products/img-macbook-pro-2019.jpg', 'Macbook Airpro', 'Laptop carismatica de Apple.'),
('images/products/img-samsung-galaxy-s10.jpg', 'Samsung galaxy', 'Telefono celular de Samsung con disponjibilidad a 5G'),
('images/products/lavarropas_2_800x800.jpg', 'Lavarropas Samsung', 'Lavarropas marca samsung de alta calidad'),
('images/products/samsung-nevera_800x800.jpg', 'Samsung Fridge', 'Heladera inteligente de Samsung con manejo por bluetooth.'),
('images/products/ninja_airfryer_800x800.jpg', 'Ninja Airfryer', 'Freidora de aire marca Ninja.');

INSERT INTO comentarios (producto_id, nombre, comentario, imagen) VALUES
(1, 1, 'Me gusto mucho.', 'images/fotodePerfil.jpg'),
(1, 2, 'Muy utíl.', '/images/fotodePerfil.jpg'),
(1, 3, 'Tan buena.', '/images/fotodePerfil.jpg'),

(2, 5, 'Ni un ruido.', 'images/fotodePerfil.jpg'),
(2, 4, 'Limpio mi cuarto en 2 minutos.', '/images/fotodePerfil.jpg'),
(2, 2, 'A mi perros no les gusta :(', '/images/fotodePerfil.jpg'),

(3, 1, 'No mas cables rotos.', 'images/fotodePerfil.jpg'),
(3, 4, 'Eficiente.', '/images/fotodePerfil.jpg'),
(3, 3, 'Facil de usar.', '/images/fotodePerfil.jpg'),

(4, 5, 'Con este mouse mi mano toco el cielo, muy comodo.', 'images/fotodePerfil.jpg'),
(4, 4, 'Muy bueno para mi trabajo como diseñador.', '/images/fotodePerfil.jpg'),
(4, 2, 'Lo use como por 3 horas seguidas y no senti incomada mi mano 10/10.', '/images/fotodePerfil.jpg'),

(5, 5, 'En el tren, bondi y en cualquier lugar, son infaltables.', 'images/fotodePerfil.jpg'),
(5, 4, 'Aguante Cerati, estos auris le hacen justicia.', '/images/fotodePerfil.jpg'),
(5, 3, 'Los bajos suenan increible', '/images/fotodePerfil.jpg'),

(6, 2, 'Muy bueno el procesamiento.', 'images/fotodePerfil.jpg'),
(6, 5, 'Apple > cauqluier compu.', '/images/fotodePerfil.jpg'),
(6, 1, 'Nunca mas quiero otra computadora.', '/images/fotodePerfil.jpg'),

(7, 2, 'Buena camara', 'images/fotodePerfil.jpg'),
(7, 1, 'Mejor bateria.', '/images/fotodePerfil.jpg'),
(7, 4, 'Muy lindos los colores', '/images/fotodePerfil.jpg'),

(8, 2, 'Limpia en menos de 20 minutos es increible', 'images/fotodePerfil.jpg'),
(8, 5, 'Muy facil de elejir los modo de limepeza.', '/images/fotodePerfil.jpg'),
(8, 4, 'Se rompio y la pieza para arreglarla es casi inconseguible no recomiendo.', '/images/fotodePerfil.jpg'),

(9, 2, 'Manejo la temperatura desde mi telefono :)', 'images/fotodePerfil.jpg'),
(9, 1, 'Comentando desde la misma heladera es increible', '/images/fotodePerfil.jpg'),
(9, 3, 'Mucho espacion para las verduras.', '/images/fotodePerfil.jpg'),

(10, 2, 'Muchos modos y recetas para explorar.', 'images/fotodePerfil.jpg'),
(10, 5, 'No cocino mas comidas con acietes.', '/images/fotodePerfil.jpg'),
(10, 3, 'Lavarla se hace muy complicado.', '/images/fotodePerfil.jpg');
