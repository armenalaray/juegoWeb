<?php
include "conexion.php";
session_start();

$firstname = "";
$lastname = "";
$email = "";
$psw = "";

if(isset($_POST["firstname"])){
	$firstname = $_POST["firstname"];
}
if(isset($_POST["lastname"])){
	$lastname = $_POST["lastname"];
}
if(isset($_POST["email"])){
	$email = $_POST["email"];
}
if(isset($_POST["psw"])){
	$psw = $_POST["psw"];
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