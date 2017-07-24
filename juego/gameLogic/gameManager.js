function GameManager(_xOrigin, _ctx, _canvasHeight, _canvasWidth){
	this.G = 9.780326;
	this.uiBoxes = [];
	this.gameBoxes = [];
	this.uiPositions = [];
	this.gameEnd = false;
	this.score = 0;
	this.pointRange = [];
	this.ctx = _ctx;
	
	this.barras = new BarArray(_canvasWidth, -450,_ctx);
	
	var canvasHeight = _canvasHeight;
	var xOrigin = _xOrigin;
	var uiPosTempX = 0;
	var uiPosTempY = 0;
	var gameOver = false;
	//var itemSelected = "";
	this.initialize = function(_boxlength,  _barSize){
		for(var i = 0; i < _boxlength; i++){
			this.uiBoxes[i] = new Box(_xOrigin + (i * 100), -200,70,70,this.ctx, canvasHeight);
		}
		this.barras.initialize(_barSize,_barSize);
		//this.gameBoxes[0] = 0;
		
	};
	
	this.drawBoxes = function(itemSelected){
			for(var i = 0; i < this.uiBoxes.length; i++){
				this.uiBoxes[i].drawImage(itemSelected);
			}		
	};
	this.boxFall = function(itemSelected){
		if(this.gameBoxes.length != 0){
			this.checkBoxCatched();
			for(var i = 0; i < this.gameBoxes.length; i++){
				if (this.gameBoxes[i].getY() < canvasHeight){
					this.gameBoxes[i].movement();
					this.gameBoxes[i].drawImage(itemSelected);
				}
				else{
					this.gameBoxes.pop();
					this.uiPositions.pop();
					if(this.uiBoxes.length == 0){
						//ya no hay boxes;
						gameOver = true;
					}
				}
			}
		}
	};
	
	this.addScore = function(){
		//score += 
	};
	
	this.checkBoxCatched = function(){
		if(this.gameBoxes.length > 0){
			for (var j = 0; j < this.gameBoxes.length; j++){
				for(var i = 0; i < this.barras.bars.length; i++){
					if((this.gameBoxes[j].y0 + this.gameBoxes[j].height)>= this.barras.bars[i].y0 && (this.gameBoxes[j].y0 + this.gameBoxes[j].height) < canvasHeight - 300){
						//la caja esta a la altura de la barra
						if(this.gameBoxes[j].x0 >= this.barras.bars[i].x0 && this.gameBoxes[j].x0 <= (this.barras.bars[i].x0 + this.barras.bars[i].length)){
							//esta tocando la barra planamente
							this.score += 10;
							//se cambia la posicion del gameBoxe
							this.requestPoints();
							var boxTemp = this.gameBoxes.pop();
							//boxTemp.setPosition(
							
							this.uiBoxes.push(this.uiPositions.pop());
							//console.log(this.uiBoxes);
							
							break;
							//boxTemp.x0 = 
						}
					}
					
				}
			}
		}
		
	};

	
	this.gameLoop = function(itemSelected){
		
		this.drawBoxes(itemSelected);//ui boxes
		this.boxFall(itemSelected); //movimiento de caja
		this.drawPoints(); // score
		this.barras.moveBars();	//movimiento de barras
		if(gameOver && this.gameBoxes.length == 0 && this.uiBoxes.length == 0){
			this.gameOver();
			return true;
		}
		return false;
	}
	
	this.requestPoints = function(){
		var nextScore = $("#nextScore").text();
		if(this.score >= nextScore){
			var actualScore = this.score;
			//logro desbloquear el siguiente item 
			$(document).ready(function(){
				$("#itemUnlocked").css({
					"visibility":"visible"
				});
			});
			//TODO:Ajax
			//var actualScore = {"actualScore": this.score};
			$.post(
				"getNextItem.php",
				{
					actualScore:actualScore
				},
				function(data, status){
					
					//TODO:update itemList and NextItem
					var json = eval(data);
					//console.log(json);
					
					
					$("#nextScore").text(json[json.length - 1].score);
					
					$(".nextSkinImage > img").attr("src",json[json.length - 1].img);
					
					
					
					$("#bestScoreNumber").text(actualScore);
					var temp = "";
					for(var i = 0; i < json.length -1; i+=1){
						temp += '<li id="idItem" item_id = "'+json[i].id+'"><img src="'+json[i].img+'" alt="swingpoplogo" width="80%"></li>';
					}
					
					$("#playerSkins > ul").html(temp);
					
					
					//alert("Data: " + data + "\nStatus: " + status);
					//$("#nextScore").text();
					
				}
			);
			
			this.score = 0;
			/*$.ajax({
				url:"getNextItem.php", data:{data:actualScore},type:"GET", 
				success:function(result){
					//var json = eval(result);
					//console.log(result);
				},
				/*error: function(xhr){
					alert("An error occured: " + xhr.status + " " + xhr.statusText);
				}
			});*/
		}
	};
	this.drawPoints = function(){
		//points
		this.ctx.font = "40px Arial";
		this.ctx.fillStyle = "red";
		this.ctx.fillText(""+ this.score + " Points",250,-230);
	};
	
	this.instanceGameBox = function(x,y){
		if(this.uiBoxes.length > 0){
			var boxTemp = this.uiBoxes.pop();
			this.uiPositions.unshift(boxTemp);
			//console.log(this.uiPositions);
			this.gameBoxes.unshift(new Box(x,y,70,70,this.ctx,canvasHeight));//añade elemento al principio 
			//console.log(this.gameBoxes);
		}
	};

	this.deleteBox = function(){
		this.gameBoxes.pop();//elimina el ultimo elemento del arreglo de boxes en el juego
	};
	
	this.gameOver = function(){
		this.ctx.font = "30px Arial";
		this.ctx.fillStyle = "red";
		this.ctx.fillText("Game Over. Your Score: "+ this.score + " Points",-230,-100);
		
		
	};
	
	
	
}