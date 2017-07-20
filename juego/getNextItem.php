<?php
session_start();
include "conexion.php";
$actualScore = "";

if(isset($_POST["actualScore"])){
	$actualScore =json_decode($_POST["actualScore"]);
}

$_SESSION["bestscore"] = $actualScore;
$sql = 'UPDATE usuario
SET bestscore = '.$actualScore.'
WHERE usuario.id = '.$_SESSION["id"].';';

if ($conn->query($sql) === TRUE) {
	//if success then get the data back as an echo
	//echo json_encode($actualScore);
}
else {
	//echo "Error: " . $sql . "<br>" . $conn->error;
}

//$table[0] = $actualScore;
//get id from item atained 
$sql2 = 'SELECT * FROM contenido WHERE contenido.score <= '.$actualScore.' ORDER BY score DESC LIMIT 1';

$result = $conn->query($sql2);
$idContenido = "";
if ($result->num_rows > 0) {
	/*significa que si hay un dato existente con ese usuario y contraseña*/
	while($row = $result->fetch_assoc()) {
		$idContenido = $row["id"];
	}
}
//TODO Be careful se duplican los datos
//update usuariocontenido table
$sql3 ='INSERT INTO usuariocontenido (idusuario, idcontenido) VALUES ('.$_SESSION["id"].','.$idContenido.');';

if ($conn->query($sql3) === TRUE) {
	//if success then get the data back as an echo
	//echo json_encode($actualScore);
}
else {
	//echo "Error: " . $sql . "<br>" . $conn->error;
}

/*echo data to ajax
	todos los items del usuario
*/
$sql4 = 'SELECT usuariocontenido.idusuario,usuariocontenido.idcontenido,contenido.* FROM usuariocontenido
INNER JOIN contenido
ON usuariocontenido.idcontenido = contenido.id
WHERE usuariocontenido.idusuario = '.$_SESSION["id"].';';

$result = $conn->query($sql4);
$itemList = array();
$i = 0;
if ($result->num_rows > 0) {
	/*significa que si hay un dato existente con ese usuario y contraseña*/
	while($row = $result->fetch_assoc()) {
		$fila = array("id"=>$row["id"],"img"=>$row["img"]);
		$itemList[$i]=$fila;
		$i += 1;
	}
	
}



$sql5 = 'SELECT * FROM contenido WHERE contenido.score > '.$actualScore.' LIMIT 1';
$result = $conn->query($sql5);
if ($result->num_rows > 0) {
	/*significa que si hay un dato existente con ese usuario y contraseña*/
	while($row = $result->fetch_assoc()) {
		$fila = array("score"=>$row["score"],"img"=>$row["img"]);
	}
	array_push($itemList, $fila);
	echo json_encode($itemList);
}








?>