<?php
session_start();
include "conexion.php";


$sql = 'SELECT * FROM contenido WHERE contenido.score > '.$_SESSION["bestscore"].' LIMIT 1';




?>