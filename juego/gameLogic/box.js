function Box(_x0,_y0,_width, _height, _ctx , _canvasheight){
	this.x0 = _x0;
	this.y0 = _y0;
	this.width = _width;
	this.height = _height;
	
	this.G = -9.780326; 
	this.t = 0;
	//this.imagen = _imagen;
	this.ctx = _ctx;
	var yTemp = 0;
	
	this.setPosition = function(_x,_y){
		this.x0 = _x;
		this.y0 = _y;
	};
	
	this.getY = function(){
		return this.y0;
	}
	
	this.drawImage = function(itemSelected){
		/*this.ctx.beginPath();
		this.ctx.lineWidth = "6";
		this.ctx.strokeStyle = "white";
		this.ctx.fillStyle="#FF000"
		this.ctx.fillRect(this.x0,this.y0,this.width,this.height);
		this.ctx.stroke();*/
		this.ctx.drawImage(itemSelected, this.x0, this.y0, this.width, this.height);
	};
	
	/*this.checkIfGameOver=function(){
		if(this.y0 >=  
	};*/
	
	this.movement = function(){
		this.t += .001;
		yTemp += .5 * this.G * Math.pow(this.t,2);
		this.y0 += -yTemp; 
		//this.drawImage();
	};
}