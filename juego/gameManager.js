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
	
	
	this.initialize = function(_boxlength,  _barSize){
		for(var i = 0; i < _boxlength; i++){
			this.uiBoxes[i] = new Box(_xOrigin + (i * 100), -200,30,30,this.ctx, canvasHeight);
		}
		this.barras.initialize(_barSize,_barSize);
		//this.gameBoxes[0] = 0;
		
	};
	
	this.drawBoxes = function(){
		for(var i = 0; i < this.uiBoxes.length; i++){
			this.uiBoxes[i].drawImage();
		}
		
	};
	this.boxFall = function(){
		if(this.gameBoxes.length != 0){
			this.checkBoxCatched();
			for(var i = 0; i < this.gameBoxes.length; i++){
				if (this.gameBoxes[i].getY() < canvasHeight){
					this.gameBoxes[i].movement();
					this.gameBoxes[i].drawImage();
				}
				else{
					this.gameBoxes.pop();
					this.uiPositions.pop();
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
						if(this.gameBoxes[j].x0 >= this.barras.bars[i].x0 && this.gameBoxes[j].x0 + this.gameBoxes[j].width <= (this.barras.bars[i].x0 + this.barras.bars[i].length)){
							//esta tocando la barra planamente
							this.score += 10;
							//se cambia la posicion del gameBoxe
							
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

	
	this.gameLoop = function(){
		this.drawBoxes();//ui boxes
		this.boxFall(); //movimiento de caja
		this.drawPoints(); // score
		this.barras.moveBars();	//movimiento de barras
		
		
	}
	
	this.instanceGameBox = function(x,y){
		if(this.uiBoxes.length > 0){
			var boxTemp = this.uiBoxes.pop();
			this.uiPositions.unshift(boxTemp);
			console.log(this.uiPositions);
			this.gameBoxes.unshift(new Box(x,y,30,30,this.ctx,canvasHeight));//añade elemento al principio 
			console.log(this.gameBoxes);
		}
	};
	
	this.drawPoints = function(){
		//points
		this.ctx.font = "40px Arial";
		this.ctx.fillStyle = "red";
		this.ctx.fillText(""+ this.score + " Points",250,-230);
	};
	
	this.deleteBox = function(){
		this.gameBoxes.pop();//elimina el ultimo elemento del arreglo de boxes en el juego
	};
	
	
	this.checkIfGameOver = function(){
		
	};
	
	
	
}