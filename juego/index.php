<?php
	
?>
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
					<input type="email" name="email" placeholder="Email">
				</div>
				<div class = "inputLogin">
					<input type="password" name="psw" placeholder="Password">
				</div>
				<div class = "sendLogin">
					<input type = "submit" value="Ingresar">
				</div>
		
				
			</form>
			<button id="createAccount">Create Account</button>
		</div>
		<div id="loginBlock" class="createAccount "style="visibility:hidden">
			<form action = "createAccount.php" method="get">
				<div class = "inputLogin"><input type="text" name="firstname" placeholder="First Name"></div>
				<div class = "inputLogin"><input type="text" name="lastname" placeholder="Last Name"></div>
				<div class = "inputLogin"><input type="email" name="email" placeholder="Email"></div>
				<div class = "inputLogin"><input type="password" name="psw" placeholder="Password"></div>
				<div class = "sendLogin"><input type = "submit" value="Create Account"></div>
			<form>
		</div>
		
		<script src="jQuery/jquery.js"></script>
		<script>
		$(document).ready(function(){
			$("#createAccount").on("click",function(){
				$(".createAccount").css({"visibility":"visible"});
			});
		});
		
		
		</script>
		
	</body>
</html>