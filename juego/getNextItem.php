<?php
session_start();
include "conexion.php";
$actualScore = "";
if(isset($_POST["actualScore"])){
	$actualScore =json_decode($_POST["actualScore"]);
}

$sql = 'UPDATE usuario
SET bestscore = '.$actualScore.'
WHERE usuario.id = '.$_SESSION["id"].';';

if ($conn->query($sql) === TRUE) {
	//if success then get the data back as an echo
	echo json_encode($actualScore);
}
else {
	//echo "Error: " . $sql . "<br>" . $conn->error;
}

//$table[0] = $actualScore;

/*$sql2 = 'SELECT * FROM contenido WHERE contenido.score > '.$_SESSION["bestscore"].' LIMIT 1';*/




?>