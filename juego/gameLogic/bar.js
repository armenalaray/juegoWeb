function Bar(_x0, _y0, _length, _ctx){
	this.x0 = _x0;
	this.y0 = _y0;
	this.length = _length;
	//this.value = _value; 
	this.endCanvas = false;
	this.ctx = _ctx;
	
	this.setX0 = function(increment, maxWidth, _xInicial){
		this.x0 += increment;
		
		if(this.x0 >= maxWidth){
			this.x0 = _xInicial;
		}
	};	
	
	/*this.setValue = function(){
		
	};*/
	
	
	
	this.drawBar = function(){
		this.ctx.beginPath();
		this.ctx.moveTo(this.x0,this.y0);
		this.ctx.lineTo(this.x0 + this.length,this.y0);
		this.ctx.lineWidth = 7;
		this.ctx.strokeStyle = "red";
		this.ctx.stroke();
	};
	
	
}