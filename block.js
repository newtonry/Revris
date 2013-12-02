(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var Block = Tetris.Block = function(pos) {
		var colors = ['red', 'blue', 'yellow', 'orange', 'black', 'pink']; //delete this, for testing only
		
		this.position = pos;
		this.color = colors[Math.floor(Math.random()*colors.length)];
	};
	
	
})(this);