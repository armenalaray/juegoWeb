function BarArray(_width, _xInicial, _ctx){
	this.bars = [];
	this.sectionLimits = [];
	this.sectionValues = [10,5,2,5,10];
	
	var canvasSection = _width / 4;
	var xInicial = _xInicial;
	
	
	
	this.initialize = function(_barSize, _sectionSize){
		//barsize = 5 sectionLimits = 5
		for (var i = 0; i < 5; i++){
			this.sectionLimits[i] = xInicial + (i*canvasSection);
		}	
		for (var i = 0; i < 5; i++){
			this.bars[i] = new Bar(this.sectionLimits[i], 500,(canvasSection - 120), _ctx);
		}		
	};
	
	this.moveBars = function(){
		for (var i = 0; i < this.bars.length; i++){
			this.bars[i].drawBar();
			this.bars[i].setX0(0.5,(xInicial + _width),(xInicial - canvasSection));
		}
		
	};
	
	
}