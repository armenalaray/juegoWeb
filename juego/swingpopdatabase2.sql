-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-06-2017 a las 17:53:30
-- Versión del servidor: 5.7.14
-- Versión de PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `swingpop`
--
CREATE DATABASE IF NOT EXISTS `swingpop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `swingpop`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenido`
--

CREATE TABLE `contenido` (
  `id` int(100) NOT NULL,
  `img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fontskin` tinyint(1) NOT NULL,
  `score` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `contenido`
--

INSERT INTO `contenido` (`id`, `img`, `fontskin`, `score`) VALUES
(1, 'img/background/background.jpg', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(100) NOT NULL,
  `firstname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bestscore` int(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `firstname`, `lastname`, `password`, `email`, `bestscore`) VALUES
(1, 'Alejandro', 'Armenta', '1111', 'armenalaray@gmail.com', NULL),
(2, 'SwingPop', '', '', 'eget.metus.eu@Praesent.ca', NULL),
(3, 'Bertha', 'Ayala', '1', 'baagayala@gmail.com', NULL),
(4, 'Ana Maria', 'Armenta', '2', 'armenta.anam@gmail.com', NULL),
(5, 'Zoe', 'Stephens', 'YrX57HqE4XR', 'in.lobortis.tellus@sitametconsectetuer.org', NULL),
(6, 'Risa', 'Mccarthy', 'HmN57WhH1RE', 'auctor.velit.eget@vitaeposuereat.net', NULL),
(7, 'Aaron', 'Lott', 'LjH55TmT7EO', 'mus.Donec.dignissim@Inat.com', NULL),
(8, 'Natalie', 'Wall', 'SvR18JqV6YM', 'ornare.In.faucibus@porttitorinterdumSed.net', NULL),
(9, 'Shad', 'Warren', 'YbR21FxE5HX', 'felis.adipiscing@sed.org', NULL),
(10, 'Macy', 'Boone', 'NyD91GzP2XI', 'dignissim@rhoncus.net', NULL),
(11, 'Francesca', 'Brooks', 'CsT17AvO7TT', 'nisi@tortordictumeu.org', NULL),
(12, 'Jarrod', 'Buckley', 'FvZ77OhB8FL', 'Vivamus@odiosagittis.co.uk', NULL),
(13, 'Amela', 'Thompson', 'KvN32AuO0BO', 'Sed@euismodacfermentum.ca', NULL),
(14, 'Lucas', 'Chaney', 'HhC48TxD6ZI', 'Vestibulum.accumsan.neque@Suspendissesagittis.org', NULL),
(15, 'Ria', 'Battle', 'WoR55DqI2FM', 'commodo.hendrerit.Donec@vitaesemperegestas.co.uk', NULL),
(16, 'Lana', 'Bowen', 'SsZ49YpD1LU', 'sed.leo.Cras@eu.com', NULL),
(17, 'Buffy', 'Delaney', 'EoS07KxA4AC', 'amet.diam@per.ca', NULL),
(18, 'Evangeline', 'Zamora', 'DzV72IsS9AK', 'habitant.morbi.tristique@liberolacusvarius.ca', NULL),
(19, 'Kirk', 'Solomon', 'GiE57IwX4YF', 'amet@elitNulla.ca', NULL),
(20, 'Harlan', 'Browning', 'ZlZ11HuS3JG', 'non.dui.nec@malesuada.net', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariocontenido`
--

CREATE TABLE `usuariocontenido` (
  `id` int(100) NOT NULL,
  `idusuario` int(100) NOT NULL,
  `idcontenido` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contenido`
--
ALTER TABLE `contenido`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuariocontenido`
--
ALTER TABLE `usuariocontenido`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contenido`
--
ALTER TABLE `contenido`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `usuariocontenido`
--
ALTER TABLE `usuariocontenido`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
