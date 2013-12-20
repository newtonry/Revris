(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var Block = Tetris.Block = function(pos) {
		// var colors = ['red', 'blue', 'yellow', 'orange', 'black', 'pink']; //delete this, for testing only
		var colors = ["rgba(0,255,0,1)","rgba(0,200,0,1)","rgba(0,150,0,1)","rgba(0,100,0,1)", "rgba(0,75,0,1)"];
		
		this.position = pos;
		this.color = colors[Math.floor(Math.random()*colors.length)];
	};
})(this);