function GameManager(_xOrigin, _ctx, _canvasHeight){
	this.G = 9.780326;
	this.uiBoxes = [];
	this.gameBoxes = [];
	this.gameEnd = false;
	this.points = 0;
	this.ctx = _ctx;
	var canvasHeight = _canvasHeight;
	var xOrigin = _xOrigin;
	
	this.initialize = function(_boxlength){
		for(var i = 0; i < _boxlength; i++){
			this.uiBoxes[i] = new Box(_xOrigin + (i * 100), -200,30,30,this.ctx, _canvasHeight);
		}
		//this.gameBoxes[0] = 0;
		
	};
	
	this.drawBoxes = function(){
		for(var i = 0; i < this.uiBoxes.length; i++){
			this.uiBoxes[i].drawImage();
		}
		
	};
	this.boxFall = function(x,y){
		this.drawPoints();
		if(this.gameBoxes.length != 0){
			for(var i = 0; i < this.gameBoxes.length; i++){
				if (this.gameBoxes[i].getY() < _canvasHeight){
					this.gameBoxes[i].movement();
					this.gameBoxes[i].drawImage();
				}
			}
		}
	};
	
	
	
	this.instanceGameBox = function(x,y){
		if(this.uiBoxes.length > 0){
			var boxTemp = this.uiBoxes.pop();
			boxTemp.x0 = x;
			boxTemp.y0 = y;
			this.gameBoxes.unshift(boxTemp);//añade elemento al principio 
		}
	};
	
	this.drawPoints = function(){
		//points
		this.ctx.font = "40px Arial";
		this.ctx.fillStyle = "red";
		this.ctx.fillText(""+ this.points + " Points",250,-230);
	};
	
	this.deleteBox = function(){
		this.gameBoxes.pop();//elimina el ultimo elemento del arreglo de boxes en el juego
	};
	
	
	this.checkIfGameOver = function(){
		
	};
	
	
	
}