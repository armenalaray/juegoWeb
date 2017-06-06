function GameManager(_xOrigin, _ctx){
	this.G = -9.780326;
	this.boxes = [];
	this.gameEnd = false;
	
	var xOrigin = _xOrigin;
	
	this.initialize = function(_boxlength){
		for(var i = 0; i < _boxlength; i++){
			this.boxes[i] = new Box(_xOrigin + (i * 100), -200, 70,70,_ctx);
		}
		
	};
	
	this.drawBoxes = function(){
		for(var i = 0; i < this.boxes.length; i++){
			this.boxes[i].drawImage();
		}
		
	}
	
	this.checkIfGameOver = function(){
		
	};
	
	
	
}