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
		
		this.deadBlocks = [];
		this.currentPiece = null;
	};

	Board.prototype.getNewPiece = function() {
		var pieces = [Tetris.iPiece, Tetris.lPiece, Tetris.backLPiece, Tetris.cubePiece, Tetris.sPiece, Tetris.zPiece, Tetris.centerPiece];
		var pickedPiece = pieces[Math.floor(Math.random()*pieces.length)];
		
		
		this.currentPiece = new pickedPiece();
	};
	
	Board.prototype.getAllBlocks = function() {
		return this.deadBlocks.concat(this.currentPiece.blocks);
	};
	
	Board.prototype.update = function() {
		this.moveCurrentPiece([0, 1]);// moves one unit down naturally
	};
	
	Board.prototype.moveCurrentPiece = function(dir) {
		if (this.isMoveValid(this.currentPiece, dir)) {
			this.currentPiece.move(dir);
		} else if (dir[1] > 0) { //if the piece wasn't valid and the move was down, we know the piece hit a floor
			this.addPieceToDead(this.currentPiece);
			this.getNewPiece();			
		}
	};
	
	Board.prototype.rotateCurrentPiece = function() {
		var clonedPiece = this.currentPiece.deepDup();
		clonedPiece.rotate();
		if (this.isOnBoard(clonedPiece)) {
			this.currentPiece.rotate();
		}
	};
	
	Board.prototype.addPieceToDead = function(piece) {
		for (var i = 0; i < piece.blocks.length; i++) {
			this.deadBlocks.push(piece.blocks[i]);
		}
	}
	
	Board.prototype.isMoveValid = function(piece, dir) {
		var clonedPiece = piece.deepDup();
		
		clonedPiece.move(dir);
		
		if (!this.isOnBoard(clonedPiece)) {
			return false;
		}
		
		for (var i = 0; i < clonedPiece.blocks.length; i++) {
			var blockPos = clonedPiece.blocks[i].position;
			for (var j = 0; j < this.deadBlocks.length; j++) {
				if ( blockPos[0] === this.deadBlocks[j].position[0] && blockPos[1] === this.deadBlocks[j].position[1])
				return false;
			}
		}
			
		return true;
	};
	
	Board.prototype.isOnBoard = function(piece) {
		for (var i = 0; i < piece.blocks.length; i++) {
			if (piece.blocks[i].position[0] > 9 || piece.blocks[i].position[0] < 0) {
				return false;
			} else if (piece.blocks[i].position[1] > 21) {
				return false;
			}	
		}
		
		return true;
	};
	
	Board.prototype.removeLines = function() {
		//next thing to do is add a lines check and lines remove
		
	};
	

})(this);