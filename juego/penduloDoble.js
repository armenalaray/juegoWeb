function PenduloDoble(_p1,_p2, _ctx){
	//variables
	this.p1 = _p1;
	this.p2 = _p2;
	var p1Mass = this.p1.GetMass();
	this.mu = (p1Mass + this.p2.GetMass()) / p1Mass;
	this.H = 0.04;
	this.G = -9.780326;
	this.ctx = _ctx;
	
	//methods
	this.CalcW1Derivative = function(){
		var w1Prima = (this.G * Math.sin(this.p2.GetAngle()) * Math.cos(this.p1.GetAngle() - this.p2.GetAngle()))-(this.mu * this.G * Math.sin(this.p1.GetAngle()))-(this.p1.GetLength() * Math.pow(this.p1.GetW(), 2)* Math.sin(this.p1.GetAngle()-this.p2.GetAngle())* Math.cos(this.p1.GetAngle()- this.p2.GetAngle())) - (this.p2.GetLength() * Math.pow(this.p2.GetW(), 2) * Math.sin(this.p1.GetAngle() - this.p2.GetAngle()));
		w1Prima /= (this.p1.GetLength() * (this.mu - Math.pow(Math.cos(this.p1.GetAngle()- this.p2.GetAngle()),2)));
		return w1Prima;
	};
	this.CalcW2Derivative = function(){
		var w2Prima = (this.mu * this.G * Math.sin(this.p1.GetAngle()) * Math.cos(this.p1.GetAngle()-this.p2.GetAngle())) - (this.G * this.mu * Math.sin(this.p2.GetAngle())) + (this.mu * this.p1.GetLength() * Math.pow(this.p1.GetW(),2)*Math.sin(this.p1.GetAngle() - this.p2.GetAngle())) + (this.p2.GetLength()* Math.pow(this.p2.GetW(),2) * Math.sin(this.p1.GetAngle() - this.p2.GetAngle())*Math.cos(this.p1.GetAngle() - this.p2.GetAngle()));
		w2Prima /= (this.p2.GetLength() * (this.mu - Math.pow(Math.cos(this.p1.GetAngle()- this.p2.GetAngle()),2)));
		return w2Prima;
	};
	this.CalcNextW1 = function(){
		var w1Next = this.p1.GetW() + (this.H * this.CalcW1Derivative());
		this.p1.SetWNext(w1Next);
	};
	this.CalcNextTeta1 = function(){
		var angle1Next = this.p1.GetAngle() + (this.H * this.p1.GetW());
		this.p1.SetAngleNext(angle1Next);
	};
	this.CalcNextW2 = function(){
		var w2Next = this.p2.GetW() + (this.H* this.CalcW2Derivative());
		this.p2.SetWNext(w2Next);
	};
	this.CalcNextTeta2 = function(){
		var angle2Next = this.p2.GetAngle() + (this.H * this.p2.GetW());
		this.p2.SetAngleNext(angle2Next);
	};

	this.SetPendulumsPos = function(){
		//var myObject = this.CalcNextW1.call(myObject);
		this.ctx.clearRect(-450,-300,900,900);
		
		var grd=this.ctx.createRadialGradient(0,0,10,0,0,700);
			grd.addColorStop(0, "black");
			grd.addColorStop(1,"white");
			
			//create rectangle
			this.ctx.fillStyle = grd;
			this.ctx.fillRect(-450,-300,900,900);
		
		//draws circle
			this.ctx.beginPath();
			this.ctx.arc(0,0,20,0,2*Math.PI);
			this.ctx.fillStyle = "red";
			this.ctx.fill();
			this.ctx.lineWidth = 2;
			this.ctx.strokeStyle = "white";
			this.ctx.stroke();
			
			
		
		this.CalcNextW1();
		this.CalcNextTeta1();
		this.CalcNextW2();
		this.CalcNextTeta2();

		this.p1.CalcX();
		this.p1.CalcY();
		this.p2.CalcX(this.p1.GetAngleNext(), this.p1.GetLength());
		this.p2.CalcY(this.p1.GetAngleNext(), this.p1.GetLength());
		
		this.p1.DrawSphere(this.ctx);
		this.p2.DrawSphere(this.ctx);
		this.DrawLines();
		
		//console.log(this.p1.GetAngle());
		/*glBegin(GL_LINE_LOOP);
		glColor3f(0.0f, 1.0f, 1.0f);
		glVertex2d(p2.GetX(), p2.GetY());
		glEnd();
		*/
		//set new original angles and w's
		this.p1.SetAngle(this.p1.GetAngleNext());
		this.p1.SetW(this.p1.GetWNext());
		this.p2.SetAngle(this.p2.GetAngleNext());
		this.p2.SetW(this.p2.GetWNext());
	};
	
	this.DrawLines = function(){
		this.ctx.beginPath();
		this.ctx.moveTo(0,0);
		this.ctx.lineTo(this.p1.GetX(),this.p1.GetY());
		this.ctx.lineTo(this.p2.GetX(),this.p2.GetY());
		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = "white";
		this.ctx.stroke();
	};
}


