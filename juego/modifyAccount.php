<?php
include "conexion.php";
session_start();

$firstname = "";
$lastname = "";
$email = "";
$psw = "";

if(isset($_POST["firstName"])){
	$firstname = $_POST["firstName"];
}
if(isset($_POST["lastName"])){
	$lastname = $_POST["lastName"];
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
	$sql2 = 'SELECT * FROM usuario WHERE id='.$_SESSION["id"].';';
	$result = $conn->query($sql2);
	if($result->num_rows > 0){
		while($row = $result->fetch_assoc()) {
			$_SESSION["nombre"] = $row["firstname"].' '.$row["lastname"];
			$fila = array("firstname"=>$row["firstname"],"lastname"=>$row["lastname"]);
		}
		echo json_encode($fila);
	}
	
}
else {
	//echo "Error: " . $sql . "<br>" . $conn->error;
}



//header('Location:mainGame.php');

?>