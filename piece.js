(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var Piece = Tetris.Piece = function() {};	
	Piece.prototype.move = function(shift) {
		//needs to check if move is valid THIS SHOULD ACTUALLY HAPPEN IN THE BOARD
		
		for(var i = 0; i < this.blocks.length; i++) {
			var newX = this.blocks[i].position[0] + shift[0];
			var newY = this.blocks[i].position[1] + shift[1];
			this.blocks[i].position = [newX, newY];
			
		}
	};
	
	Piece.prototype.deepDup = function() {
		var dupedPiece = new this.constructor();
		dupedPiece.blocks = [];

		for(var i = 0; i < this.blocks.length; i++) {
			dupedPiece.blocks.push(
				new Tetris.Block([this.blocks[i].position[0], this.blocks[i].position[1]])
			);
		}

		return dupedPiece;
	};
	
	
				
	var iPiece = Tetris.iPiece = function() {	
		this.blocks = [
			new Tetris.Block([4,0]),
			new Tetris.Block([4,1]),
			new Tetris.Block([4,2]),
			new Tetris.Block([4,3])		
		];
		
		this.state = 1; // keeps track of which direction this needs to be rotated
	};
	
	iPiece.prototype.move = Piece.prototype.move;
	iPiece.prototype.deepDup = Piece.prototype.deepDup;
		
	iPiece.prototype.rotate = function() {
		var rotations = [[-1,1], [0,0], [1, -1], [2, -2]];
		
		for(var i = 0; i < this.blocks.length; i++) {
			var newX = this.blocks[i].position[0] + (rotations[i][0] * this.state); 
			var newY = this.blocks[i].position[1] + (rotations[i][1] * this.state);
			this.blocks[i].position = [newX, newY];
		}
		this.state *= -1;
	};


	var sPiece = Tetris.sPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,1]),
			new Tetris.Block([4,0]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,0])
		];
		
		this.state = 0;
		this.rotations = [
			[[1,-1], [1,1], [0,0], [0,2]],
			[[1,1], [-1,1], [0,0], [-2,0]],
			[[-1,1], [-1,-1], [0,0], [0,-2]],
			[[-1,-1], [1,-1], [0,0], [2,0]]
		];
	};
	
	sPiece.prototype.move = Piece.prototype.move;
	sPiece.prototype.deepDup = Piece.prototype.deepDup;

	sPiece.prototype.rotate = function() {
		for(var i = 0; i < this.blocks.length; i++) {
			var newX = this.blocks[i].position[0] + (this.rotations[this.state][i][0]); 
			var newY = this.blocks[i].position[1] + (this.rotations[this.state][i][1]);
			this.blocks[i].position = [newX, newY];				
		}

		this.state = (this.state + 1) % 4;
	};



	var zPiece = Tetris.zPiece = function() {	
		this.blocks = [
			new Tetris.Block([5,0]),
			new Tetris.Block([5,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([4,2])
		];
	};
	
	zPiece.prototype.move = Piece.prototype.move;
	zPiece.prototype.deepDup = Piece.prototype.deepDup;	

	var cubePiece = Tetris.cubePiece = function() {	
		this.blocks = [
			new Tetris.Block([4,0]),
			new Tetris.Block([5,0]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1])
		];
	};
	
	cubePiece.prototype.move = Piece.prototype.move;
	cubePiece.prototype.deepDup = Piece.prototype.deepDup;
	cubePiece.prototype.rotate = function() {};


	var backLPiece = Tetris.backLPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,0]),
			new Tetris.Block([3,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1])
		];
		
		this.state = 0;
		this.rotations = [
			[[2,0], [1,-1], [0,0], [-1,1]],
			[[0,2], [1,1], [0,0], [-1,-1]],
			[[-2,0], [-1,1], [0,0], [1,-1]],
			[[0,-2], [-1,-1], [0,0], [1,1]]
		];
	};
	

		
	backLPiece.prototype.rotate = function() {
		for(var i = 0; i < this.blocks.length; i++) {
			var newX = this.blocks[i].position[0] + (this.rotations[this.state][i][0]); 
			var newY = this.blocks[i].position[1] + (this.rotations[this.state][i][1]);
			this.blocks[i].position = [newX, newY];				
		}

		this.state = (this.state + 1) % 4;
	};

	backLPiece.prototype.move = Piece.prototype.move;
	backLPiece.prototype.deepDup = Piece.prototype.deepDup;


	var lPiece = Tetris.lPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1]),
			new Tetris.Block([5,0])
		];
	};
	
	lPiece.prototype.move = Piece.prototype.move;
	lPiece.prototype.deepDup = Piece.prototype.deepDup;
	

	var centerPiece = Tetris.centerPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1]),
			new Tetris.Block([4,0])
		];
	};
	
	centerPiece.prototype.move = Piece.prototype.move;
	centerPiece.prototype.deepDup = Piece.prototype.deepDup;
	
	
	
})(this);