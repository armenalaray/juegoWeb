function Bar(_x0, _y0, _length, _value){
	this.x0 = _x0;
	this.y0 = _y0;
	this.length = _length;
	this.value = _value; 
	this.endCanvas = false;
	
	this.setx0 = function(_x0){
		this.x0 = _x0;
	};	
	
	this.setValue = function(){
		this.x0 = _x0;
	};
	
	this.drawBar = function(
		this.ctx.beginPath();
		this.ctx.moveTo(this.x0,this.y0);
		this.ctx.lineTo(this.x0 + length,this.y0);
		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = "white";
		this.ctx.stroke();
	);
	
	
}