<?php
session_start();
include "conexion.php";
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title>Bootstrap 101 Template</title>
		<!--Bootstrap-->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
		<!--<link href="css/responsivo.css" rel="stylesheet">-->
		
	</head>
	<body>
			<div class ="text-align-center sidebar">
				<!--contenido sidebar-->
				<ul>
					<li id="title"><img src="img/swingpoplogo.png" alt="swingpoplogo" height="50%" width="60%"></li>
					<?php
						if($_SESSION['conected'] == true){
							echo '<li id="nombre"><h1><B>Hello '.$_SESSION["nombre"].'</B></h1></li>
							<li id="bestScore"><h2><B>Best Score:</B> '.$_SESSION["bestscore"].' pts</h2></li>
							<li id="playerSkins"><h2>Skins:</h2>
							<ul>
							';
							
							$sql = 'SELECT usuariocontenido.idusuario,usuariocontenido.idcontenido,contenido.* 
							FROM usuariocontenido
							INNER JOIN contenido
							ON usuariocontenido.idcontenido = contenido.id
							WHERE usuariocontenido.idusuario = '.$_SESSION["id"].';';
							
							$result = $conn->query($sql);
							if($result->num_rows > 0){
								//$itemArray = array();
								while($row = $result->fetch_assoc()){
									echo '<li item_id = "'.$row["id"].'"><img src="'.$row["img"].'" alt="swingpoplogo" width="80%"></li>';
									
									//array_push($itemArray,);
								}
							
							}
							
							echo '</ul>
								</li>';
						}
						else{
							session_destroy(); 
							header('Location:index.php');
						}
					?>
					<!--
					<li id="playerSkins"><h2>Skins:</h2>
						<ul>
							<li><img src="img/dropItems/backpack.png" alt="swingpoplogo" width="80%"></li>
							<li><img src="img/dropItems/belt.png" alt="swingpoplogo"  width="80%"></li>
							<li><img src="img/dropItems/bomb.png" alt="swingpoplogo" width="80%"></li>
						</ul>
					</li>-->
					
				</ul>
				<div id="settings">
					<button id="modifyAccount">Delete Account</button>
					<button id="modifyAccount">Modify Account</button>
					<a id="modifyAccount" href="logout.php">Log Out Session</a>
				</div>
			</div>
			<div class="relativo">
			<!--<div class="letrero"><h1>Resolucion minima de 960px, favor de redimencionar</h1></div>-->
				
				<img id="gameBackground" width="900px" height="900px" src="img/background/background.jpg" alt="gameBack">
				<canvas id="myCanvas" width="900px" height="900px" style="border:1px solid #c3c3c3;" >
					Your browser does not support the canvas element.
				</canvas>
				<button id="restart" >Restart</button>
				<div id="itemUnlocked">
					<b>Congratulations</b> Skin Unlocked!
					<?php
					?>
				</div>
				
				<div id="nextSkin">
					<?php
						if($_SESSION['conected'] == true){
							$sql='SELECT * FROM contenido WHERE contenido.score > '.$_SESSION["bestscore"].' LIMIT 1';
							
							$result = $conn->query($sql);
							
							if($result->num_rows > 0){
								while($row = $result->fetch_assoc()){
									echo '<div id="nextSkinBlock"><h2><B><div id="nextScore" style="display: inline-block;">'.$row["score"].'</div> points</B> to next skin!</h2></div>
					<div class ="nextSkinImage"><img src="'.$row["img"].'" alt="swingpoplogo" height="100%" width="100%"></div>';
								}
							}
						}
					?>
					
				</div>
				<div id="audio">
					<audio controls preload="none">
						<source src="Audio/Motion.wav" type="audio/wav">	
						<!--<source src="horse.mp3" type="audio/mpeg">-->
						Your browser does not support the audio element.
					</audio>
				</div>
				
			</div>
	

	<!--JQuery-->
		<script src="jQuery/jquery.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="gameLogic/pendulo.js"></script>
		<script src="gameLogic/penduloDoble.js"></script>
		<script src="gameLogic/position.js"></script>
		<script src="gameLogic/bar.js"></script>
		<script src="gameLogic/barArray.js"></script>
		<script src="gameLogic/box.js"></script>
		<script src="gameLogic/gameManager.js"></script>
		<script>
		
		
		$(document).ready(function(){
			$("#audio").trigger('load');
			
			//$("#audio").trigger('play');
			var canvas = $("#myCanvas")[0];
			var ctx = canvas.getContext('2d');
			var isPaused = false;
			
			var p1 = new Pendulo(90.0,0.0,1.0,200.0);
			var p2 = new Pendulo(90.0,0.0,1.0,200.0);
			
			var doublePendulum = new PenduloDoble(p1,p2,ctx);
			
			var gameBackground = $("#gameBackground")[0];
			var itemSelected = $("#playerSkins").find("li").eq(0).children()[0];
			
			var gameManager = new GameManager(-400, ctx,canvas.height,canvas.width);
			gameManager.initialize(7, 6);
			
			$("#myCanvas").on("click", function(){
				//cuando se le de click al canvas se soltara una bolita.
				gameManager.instanceGameBox(p2.GetX(), p2.GetY());
				//console.log(gameManager.gameBoxes);
			});
			
			$("#playerSkins").find("li").on("click", function(){
				itemSelected = $(this).children()[0];
				//console.log(itemSelected);
				
			});
			
			var nextScore = $("#nextScore").text();
			console.log(nextScore);
			
			//TRANSLATION -aqui empiezan los calculos del pendulo doble
			ctx.translate(450,300);
			
			var interval = setInterval(function(){ 
				ctx.clearRect(-450,-300,900,900);
				//background image
				ctx.drawImage(gameBackground, -450,-300);
				doublePendulum.SetPendulumsPos();
				if(gameManager.gameLoop(itemSelected, nextScore)){
					$("#restart").css("visibility","visible");
				}
				
				
			}, 10);
			
			$(document).keypress(function(event){
				var x = event.which;
				//console.log(x);
				if(x==112){
					if(!isPaused){
						//triggers pause
						pauseGame();
						
					}
					else{
						interval = setInterval(function(){ 
						ctx.clearRect(-450,-300,900,900);
						//points
						ctx.drawImage(gameBackground, -450,-300);
						doublePendulum.SetPendulumsPos();
						if(gameManager.gameLoop(itemSelected)){
							$("#restart").css("visibility","visible");
						}
						
						}, 10);
						
					}
					isPaused = !isPaused;
				}
			});
			
			$("#restart").click(function(){
				location.reload();
			});
			/*function getKeyPressed(event){
				var x = event.which || event.KeyCode;
				
			}*/
			
			function pauseGame(){
				clearInterval(interval);
			}
			
			//var interval2 = setInterval(function(){  }, 10);
			
			/*
			//draws line
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(200,100);
			ctx.lineWidth = 2;
			ctx.strokeStyle = "white";
			ctx.stroke();
			
			//draws circle
			ctx.beginPath();
			ctx.arc(200,100,20,0,2*Math.PI);
			ctx.fillStyle = "red";
			ctx.fill();
			ctx.lineWidth = 2;
			ctx.strokeStyle = "white";
			ctx.stroke();
			
			//draws line
			ctx.beginPath();
			ctx.moveTo(200,100);
			ctx.lineTo(200,300);
			ctx.lineWidth = 2;
			ctx.strokeStyle = "white";
			ctx.stroke();*/
		
		});
			
	
		
		</script>
	</body>
</html>