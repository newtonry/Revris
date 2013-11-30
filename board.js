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
		this.currentPiece = new Tetris.sPiece();
	};
	
	Board.prototype.getAllBlocks = function() {
		return this.deadSpaces.concat(this.currentPiece.blocks);
	};
	
	Board.prototype.update = function() {
		this.moveCurrentPiece([0, 1]);// moves one unit down naturally
		
		
		//check for removed rows if succeeded
		
	};
	
	Board.prototype.moveCurrentPiece = function(dir) {
		if (this.isMoveValid(this.currentPiece, dir)) {
			this.currentPiece.move(dir);
		}
		
		// this.currentPiece.move(dir);
		
		//check if valid move
	};
	
	Board.prototype.isMoveValid = function(piece, dir) {
		var clonedPiece = piece.deepDup();//$.extend(true, {}, piece);
		
		clonedPiece.move(dir);
		
		if (!this.isOnBoard(clonedPiece)) {
			return false;
		}
			
		return true;
		//is on the board
		//doesn't collide
		
		
	};
	
	Board.prototype.isOnBoard = function(piece) {
		for (var i = 0; i < piece.blocks.length ;i++) {
			if (piece.blocks[i].position[0] > 9 || piece.blocks[i].position[0] < 0) {
				console.log('not on board');
				return false;
			} else if (piece.blocks[i].position[1] > 21) {
				return false;
			// } else if (piece.blocks[i].) {
			// 	
			// 	
			}	
		}
		
		return true;
	};

})(this);