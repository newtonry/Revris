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
			this.removeLines();
			this.getNewPiece();
		}
	};
	
	Board.prototype.rotateCurrentPiece = function() {
		var clonedPiece = this.currentPiece.deepDup();
		clonedPiece.rotate();

		//should write a collide with dead pieces function
		if (this.isOnBoard(clonedPiece) && !this.collidesWithDeadBlocks(clonedPiece)) {
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
		} else if (this.collidesWithDeadBlocks(clonedPiece)) {
			return false;
		}
			
		return true;
	};

	Board.prototype.collidesWithDeadBlocks = function(piece) {
		for (var i = 0; i < piece.blocks.length; i++) {
			var blockPos = piece.blocks[i].position;
			for (var j = 0; j < this.deadBlocks.length; j++) {
				if ( blockPos[0] === this.deadBlocks[j].position[0] && blockPos[1] === this.deadBlocks[j].position[1])
				return true;
			}
		}
		return false;
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
		var lines = [];
		for (var i = 0; i < this.deadBlocks.length; i++) {
			lines[this.deadBlocks[i].position[1]] = (lines[this.deadBlocks[i].position[1]] || []);
			lines[this.deadBlocks[i].position[1]].push(this.deadBlocks[i]);
		}
		
		for (var i = 0; i < lines.length; i++) {
			if (lines[i] && lines[i].length >= 10) {
				this.destroyLine(i);
				this.deadBlocksFall(i);
			}
		}
	};
	
	Board.prototype.destroyLine = function(lineIndex) {
		var newDeadBlocks = [];
		for (var ind = 0; ind < this.deadBlocks.length; ind++) {
			if (this.deadBlocks[ind].position[1] != lineIndex) {
				newDeadBlocks.push(this.deadBlocks[ind]);
			}
		}
		this.deadBlocks = newDeadBlocks;
		this.controller.flipBoard();
	};

	Board.prototype.deadBlocksFall = function(limit) {
		for (var i = 0; i < this.deadBlocks.length; i++) {
			if (this.deadBlocks[i].position[1] < limit) {
				this.deadBlocks[i].position[1] +=1;
			}
		}
	};

	Board.prototype.isGameOver = function() {};


})(this);