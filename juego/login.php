<?php
session_start();
$email = "";
$psw = "";

if( isset($_POST["email"])){
	$email = $_POST["email"];
}
if( isset($_POST["psw"])){
	$psw = $_POST["psw"];
}

include "conexion.php";

$sql = "SELECT * FROM usuario WHERE usuario.correo = "."'$email'"." AND usuario.contra = "."'$psw'";
$result = $conn->query($sql);



if ($result->num_rows > 0) {
	/*significa que si hay un dato existente con ese usuario y contraseña*/
	while($row = $result->fetch_assoc()) {
	$_SESSION['id'] = $row['id'];//id del usuario que esta conectado
	$_SESSION['nombre'] = $row['nombre'].' '.$row['app'];
	$_SESSION['conected'] = true;
	}
	header('Location:cuenta.php');
}
else{
	session_destroy();
	header('Location:index.php');
	
}

?>