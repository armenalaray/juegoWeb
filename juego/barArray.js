function barArray(_bar[], _width, _xInicial){
	this.bars = [];
	this.sectionLimits = [];
	this.sectionValues = [10,5,2,5,10];
	
	var canvasSection = _width / 5;
	var xIncial = _xInicial;
	
	
	this.initialize = function(_barSize, _sectionSize){
		//barsize = 5 sectionsize = 6
		for (var i = 0; i < _sectionSize; i++){
			this.sectionLimits[i] = xIncial + i*canvasSection;
		}	
		for (var i = 0; i < _barSize; i++){
			this.bars[i] = new Bar(sectionLimits[i], 300,(canvasSection - 40), sectionValues[i]);
		}		
	};
	
	this moveBars = function(){
		
	}
	
	
}