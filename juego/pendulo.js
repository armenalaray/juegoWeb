
function Pendulo(_angle,_w, _mass, _length){
	_angle *= (Math.PI / 180);
	//variables
	this.w = _w;
	this.angle = _angle;
	this.mass = _mass;
	this.length = _length;
	this.radius = 0.25;
	this.wNext =0;
	this.angleNext = 0;
	this.x = 0;
	this.y = 0;
	
	//methods
	//getters
	this.GetW = function() {
		return w;
	};
	
	this.GetWNext = function(){
		return wNext;
	};
	
	this.GetAngle = function(){
		return angle;
	};
	
	this.GetAngleNext = function(){
		return angleNext;
	};
	
	this.GetMass = function(){
		return mass;
	};
	
	this.GetLength = function(){
		return length;
	};
	
	this.GetX = function(){
		return x;
	};
	
	this.GetY = function(){
		return y;
	};
	//setters
	this.SetW = function(_w){
		this.w = _w;
	};
	this.SetWNext = function(_wNext){
		this.wNext = _wNext;
	};
	this.SetAngle = function(_angle){
		this.angle = _angle;
	};
	this.SetAngleNext = function(_angleNext){
		this.angleNext = _angleNext;
	};
	this.SetMass = function(_mass){
		this.mass = _mass;
	};
	this.SetLength = function(_length){
		this.length = _length;
	};
	this.SetX = function(_x){
		this.x = _x;
	};
	this.SetY = function(_y){
		this.y = _y;
	};
	
	this.CalcX = function(_anguloNext1Pendulo, _length1Pendulo){
		if(typeof _anguloNext1Pendulo !== "undefined" && typeof _length1Pendulo !== "undefined"){
			//segundo pendulo
			this.x = (_length1Pendulo * Math.sin(_anguloNext1Pendulo)) + (this.length * Math.sin(this.angleNext));
		}	
		else{
			//primer pendulo
			this.x = this.length * Math.sin(this.angleNext);
		}	
	}
	
	this.CalcY = function(_anguloNext1Pendulo, _length1Pendulo){
		if(typeof _anguloNext1Pendulo !== "undefined" && typeof _length1Pendulo !== "undefined"){
			//segundo pendulo
			this.y = -(_length1Pendulo * Math.cos(_anguloNext1Pendulo)) - (this.length * Math.cos(this.angleNext));
		}	
		else{
			//primer pendulo
			this.y = -(this.length * Math.cos(this.angleNext));
		}	
	}
}



