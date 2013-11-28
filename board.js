(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var Board = Tetris.Board = function() {
		this.grid = [];
		
		for(var x = 0; x < 10; x++) {
			this.grid[x] = [];
			for(var y = 0; y < 22; y++) {
				this.grid[x][y] = null;
			}
		}
		
		this.deadSpaces = [];
		this.currentPiece = null;
	};

	Board.prototype.getNewPiece = function() {
		this.currentPiece = new Tetris.Piece();
	};
	
	Board.prototype.getAllBlocks = function() {
		return this.deadSpaces.concat(this.currentPiece.blocks);
	};
	
	Board.prototype.update = function() {
		this.currentPiece.move([0, 1]);// moves one unit down naturally
		
		
		//check for removed rows if succeeded
		
	};
	
	Board.prototype.moveCurrentPiece = function(dir) {
		this.currentPiece.move(dir);
		
		//check if valid move
	}
	
	
	
	
	// Board.prototype.grid = function() {
	// 	console.log('hi')
	// };
	
	
})(this);