function Box(_x0,_y0,_width, _height, _ctx){
	this.x0 = _x0;
	this.y0 = _y0;
	this.width = _width;
	this.height = _height;
	
	//this.imagen = _imagen;
	this.ctx = _ctx;
	
	
	this.drawImage = function(){
		this.ctx.beginPath();
		this.ctx.lineWidth = "6";
		this.ctx.strokeStyle = "white";
		this.ctx.fillStyle="#FF000"
		this.ctx.fillRect(this.x0,this.y0,this.width,this.height);
		this.ctx.stroke();
		
	};
}