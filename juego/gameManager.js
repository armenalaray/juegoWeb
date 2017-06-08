function GameManager(_xOrigin, _ctx, _canvasHeight){
	this.G = -9.780326;
	this.uiBoxes = [];
	this.gameBoxes = [];
	this.gameEnd = false;
	
	var canvasHeight = _canvasHeight;
	var xOrigin = _xOrigin;
	
	this.initialize = function(_boxlength){
		for(var i = 0; i < _boxlength; i++){
			this.uiBoxes[i] = new Box(_xOrigin + (i * 100), -200,30,30,_ctx, _canvasHeight);
		}
		
	};
	
	this.drawBoxes = function(){
		for(var i = 0; i < this.uiBoxes.length; i++){
			this.uiBoxes[i].drawImage();
		}
		
	}
	this.boxFall = function(x,y){
		//this.instanceGameBox(x,y);
		//sino no se movera
		for(var i = 0; i < this.gameBoxes.length; i++){
			if (this.gameBoxes[i].getY() < _canvasHeight){
				this.gameBoxes[i].movement();
				this.gameBoxes[i].drawImage();
			}
		}
	}
	
	
	
	this.instanceGameBox = function(x,y){
		var boxTemp = new Box(x,y, 30,30,_ctx, _canvasHeight);
		this.gameBoxes.unshift(boxTemp);//añade elemento al principio
	}
	
	this.deleteBox = function(){
		this.gameBoxes.pop();//elimina el ultimo elemento del arreglo de boxes en el juego
	}
	
	
	this.checkIfGameOver = function(){
		
	};
	
	
	
}