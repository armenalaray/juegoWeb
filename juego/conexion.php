<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "swingpop";

$conn = new mysqli($servername, $username, $password, $dbname);

//checkdate
if($conn->connect_error){
	die("Connection failed: ". $conn->connect_error);
}

//echo "conexion exitosa";

?>