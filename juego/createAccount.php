<?php
include "conexion.php";

$firstname = "";
$lastname = "";
$email = "";
$psw = "";

if(isset($_GET["firstname"])){
	$firstname = $_GET["firstname"];
}
if(isset($_GET["lastname"])){
	$lastname = $_GET["lastname"];
}
if(isset($_GET["email"])){
	$email = $_GET["email"];
}
if(isset($_GET["psw"])){
	$psw = $_GET["psw"];
}

//echo "".$firstname." ".$lastname." ".$email." ".$psw;

$sql = 'INSERT INTO usuario (firstname,lastname, password,email, bestscore)VALUES("'.$firstname.'","'.$lastname.'","'.$psw.'","'.$email.'",0);';


$last_id_usuario = "";
if ($conn->query($sql) === TRUE) {
	//getlast id inserted
	$last_id_usuario = $conn->insert_id;
	echo $last_id_usuario;
	//header('Location:creaentrada.php');
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$sql2= 'INSERT INTO usuariocontenido (idusuario, idcontenido) VALUES ('.$last_id_usuario.', 2)';

$last_id_usuario_contenido = "";
if ($conn->query($sql2) === TRUE) {
	//getlast id inserted
	$last_id_usuario_contenido = $conn->insert_id;
	//header('Location:creaentrada.php');
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

header('Location:index.php');

?>