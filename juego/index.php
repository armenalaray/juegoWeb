
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>SwingPop Login</title>
		<!--Bootstrap-->
		<!--<link href="css/bootstrap.min.css" rel="stylesheet">-->
		<link href="css/style.css" rel="stylesheet">
	</head>
	<body>
		<span id="logoLogin"><img src="img/swingpoplogo.png" alt="swingpoplogo" width="100%"></span>
		<div id="loginBlock">
			<form action = "login.php" method = "get">
				<div class = "inputLogin">
					<input type="email" name="email" placeholder="Inserta correo">
				</div>
				<div class = "inputLogin">
					<input type="password" name="psw" placeholder="Inserta password">
				</div>
				<div class = "sendLogin">
					<input type = "submit" value="Ingresar">
				</div>
			</form>
		</div>
	</body>
</html>