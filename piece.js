(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var Piece = Tetris.Piece = function(type) {
		//needs to generate the blocks based on the type
		this.blocks = [new Tetris.Block([4,0])];
		this.velocity;
	};
	
	Piece.prototype.move = function(shift) {
		//needs to check if move is valid THIS SHOULD ACTUALLY HAPPEN IN THE BOARD
		
		for(var i = 0; i < this.blocks.length; i++) {
			var newX = this.blocks[i].position[0] + shift[0];
			var newY = this.blocks[i].position[1] + shift[1];
			this.blocks[i].position = [newX, newY];
			
		}
		
		
	};
	
})(this);