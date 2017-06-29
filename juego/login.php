<?php
session_start();
$email = "";
$psw = "";

if( isset($_GET["email"])){
	$email = $_GET["email"];
}
if( isset($_GET["psw"])){
	$psw = $_GET["psw"];
}

include "conexion.php";

$sql = 'SELECT * FROM usuario WHERE email = "'.$email.'" AND password = "'.$psw.'"';
echo $sql;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	/*significa que si hay un dato existente con ese usuario y contraseña*/
	while($row = $result->fetch_assoc()) {
		$_SESSION["id"] = $row["id"];//id del usuario que esta conectado
		$_SESSION["nombre"] = $row["firstname"].' '.$row["lastname"];
		$_SESSION["bestscore"]=$row["bestscore"];
		$_SESSION["conected"] = true;
	}
	header('Location:mainGame.php');
	echo "tabla encontrada";
}
else{
	session_destroy();
	header('Location:index.php');
	
}

?>