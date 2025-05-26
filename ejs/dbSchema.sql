CREATE DATABASE miProyecto;
USE miProyecto;

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
  usuarioId INT UNSIGNED NOT NULL,
  nombreArchivo VARCHAR(255) NOT NULL,
  nombreProducto VARCHAR(255) NOT NULL,
  descripcionProducto TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  productoId INT UNSIGNED NOT NULL,
  usuarioId INT UNSIGNED NOT NULL,
  textoComentario TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
  FOREIGN KEY (productoId) REFERENCES productos(id)
);


INSERT INTO usuarios (email, contraseña, fechaNacimiento, dni, fotoPerfil) VALUES
('juan05@gmail.com', 'contraseña2', '1999-04-12', 23456789, 'images/fotodePerfil.jpg'),
('ana@gmail.com', 'contraseña1', '1995-05-10', 12345678, 'images/users/anaaaa.jpg'),
('luisa@gmail.com', 'contraseña3', '1998-12-01', 34567890, 'images/users/luisa.jpg'),
('marcos@gmail.com', 'contraseña4', '1990-03-15', 45678901, '/images/users/marcos.jpg'),
('sofia@gmail.com', 'contraseña5', '1997-07-07', 56789012, 'images/users/sofiiaaa.jpg');


INSERT INTO productos (usuarioId, nombreArchivo, nombreProducto, descripcionProducto) VALUES
(1, 'images/products/img-tv-samsung-smart.jpg','Tv Samsung Smart', 'es muy buena'),
(2, 'images/products/02dee987-233b-4e0c-8464-b2bc86483fe7.jpg', 'Irobot Roomba', 'Aspirador autómata'),
(3, 'images/products/6e13385a-2443-47de-985d-b86fb8063f7b.jpg', 'Magsafe charger', 'Cargador inalámbrico'),
(4, 'images/products/76e8e952-9a85-4db6-826a-f6f6a604891c.jpg', 'Mouse ergonómico', 'Mouse para largas sesiones en la computadora con la mejor comodidad.'),
(5, 'images/products/52225ff7-ce12-4587-858e-a85090d931e0.jpg', 'Airpods 3ra generación', 'Auriculares inalámbricos de Apple.'),
(1, 'images/products/img-macbook-pro-2019.jpg', 'Macbook AirPro', 'Laptop carismática de Apple.'),
(2, 'images/products/img-samsung-galaxy-s10.jpg', 'Samsung Galaxy', 'Teléfono celular de Samsung con disponibilidad a 5G'),
(3, 'images/products/lavarropas_2_800x800.jpg', 'Lavarropas Samsung', 'Lavarropas marca Samsung de alta calidad'),
(4, 'images/products/samsung-nevera_800x800.jpg', 'Samsung Fridge', 'Heladera inteligente de Samsung con manejo por bluetooth.'),
(5, 'images/products/ninja_airfryer_800x800.jpg', 'Ninja Airfryer', 'Freidora de aire marca Ninja.');


INSERT INTO comentarios (productoId, usuarioId, textoComentario) VALUES
(1, 1, 'Me gustó mucho.'),
(1, 2, 'Muy útil.'),
(1, 3, 'Tan buena.'),

(2, 5, 'Ni un ruido.'),
(2, 4, 'Limpió mi cuarto en 2 minutos.'),
(2, 2, 'A mis perros no les gusta :('),

(3, 1, 'No más cables rotos.'),
(3, 4, 'Eficiente.'),
(3, 3, 'Fácil de usar.'),

(4, 5, 'Con este mouse mi mano tocó el cielo, muy cómodo.'),
(4, 4, 'Muy bueno para mi trabajo como diseñador.'),
(4, 2, 'Lo usé por 3 horas seguidas y no sentí incomodidad en mi mano, 10/10.'),

(5, 5, 'En el tren, bondi y en cualquier lugar, son infaltables.'),
(5, 4, 'Aguante Cerati, estos auris le hacen justicia.'),
(5, 3, 'Los bajos suenan increíble.'),

(6, 2, 'Muy bueno el procesamiento.'),
(6, 5, 'Apple > cualquier compu.'),
(6, 1, 'Nunca más quiero otra computadora.'),

(7, 2, 'Buena cámara.'),
(7, 1, 'Mejor batería.'),
(7, 4, 'Muy lindos los colores.'),

(8, 2, 'Limpia en menos de 20 minutos, es increíble.'),
(8, 5, 'Muy fácil de elegir los modos de limpieza.'),
(8, 4, 'Se rompió y la pieza para arreglarla es casi inconseguible, no recomiendo.'),

(9, 2, 'Manejo la temperatura desde mi teléfono :)'),
(9, 1, 'Comentando desde la misma heladera, es increíble.'),
(9, 3, 'Mucho espacio para las verduras.'),

(10, 2, 'Muchos modos y recetas para explorar.'),
(10, 5, 'No cocino más comidas con aceites.'),
(10, 3, 'Lavarla se hace muy complicado.');
