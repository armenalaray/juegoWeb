<?php
include "conexion.php";
session_start();

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

$sql = 'UPDATE usuario
SET firstname = "'.$firstname.'", lastname = "'.$lastname.'", password = '.$psw.', email = "'.$email.'"
WHERE usuario.id = '.$_SESSION["id"].';';

if ($conn->query($sql) === TRUE) {
	//if success then get the data back as an echo
	
}
else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

header('Location:mainGame.php');

?>