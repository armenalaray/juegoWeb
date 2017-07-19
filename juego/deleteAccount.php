<?php
include "conexion.php";
session_start();

$sql = 'DELETE FROM usuariocontenido WHERE usuariocontenido.idusuario = '.$_SESSION["id"].';';

if ($conn->query($sql) === TRUE) {
	$sql2 = 'DELETE FROM usuario WHERE `id` = '.$_SESSION["id"].';';

	if ($conn->query($sql2) === TRUE) {
	}
	else {
		echo "Error: " . $sql2 . "<br>" . $conn->error;
	}
}
else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

session_destroy();

?>