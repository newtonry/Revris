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
		// check if piece is dead
		//check should be done above move so that user can shift the block for 1 s after
		if (this.isPieceDead(this.currentPiece)) {
			this.addPieceToDead(this.currentPiece);
			this.getNewPiece();			
		} else if (this.isMoveValid(this.currentPiece, dir)) {
			this.currentPiece.move(dir);
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
	
	Board.prototype.isPieceDead = function(piece) {
		for (var i = 0; i < piece.blocks.length; i++) {
			if (piece.blocks[i].position[1] + 1 > 21 ) {
				return true;
			}
		}
		return false;
	};
	
	
	Board.prototype.isMoveValid = function(piece, dir) {
		var clonedPiece = piece.deepDup();//$.extend(true, {}, piece);
		
		clonedPiece.move(dir);
		
		if (!this.isOnBoard(clonedPiece)) {
			return false;
		}
			
		return true;

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