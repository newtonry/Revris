(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var Piece = Tetris.Piece = function() {};	
	Piece.prototype.move = function(shift) {		
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
	
	Piece.prototype.rotate = function() {
		var rotationBlock = this.blocks[2];//this is just what I chose, should set to 0 and fix if statement in for loop

		for (var i = 0; i < this.blocks.length; i++) {
			if (i != 2) {

				var xDiff = spaceship(this.blocks[i].position[0], rotationBlock.position[0]);
				var yDiff = spaceship(this.blocks[i].position[1], rotationBlock.position[1]) * -1;

				//top if is for adjacent pieces. else are for diagonal ones
				if ((xDiff === 0) || (yDiff === 0)) {					
						var yPos = (this.blocks[i].position[0] - rotationBlock.position[0]) + rotationBlock.position[1];
						var xPos = (this.blocks[i].position[1] - rotationBlock.position[1]) * -1 + rotationBlock.position[0]; 
						this.blocks[i].position = [xPos, yPos];
					} else if (xDiff * yDiff > 0) {
						this.blocks[i].position[1] = (this.blocks[i].position[1] - rotationBlock.position[1]) * -1 + rotationBlock.position[1];
					} else  if (xDiff * yDiff < 0){
						this.blocks[i].position[0] = (this.blocks[i].position[0] - rotationBlock.position[0]) * -1 + rotationBlock.position[0];
					}
			}
		}
	};
	
	//move elsewhere
	root.spaceship = function(val1, val2) {
		if (val1 > val2) {
			return 1;
		} else if (val2 > val1) {
			return -1;
		} else {
			return 0;
		}
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

	};
	
	sPiece.prototype.move = Piece.prototype.move;
	sPiece.prototype.deepDup = Piece.prototype.deepDup;
	sPiece.prototype.rotate = Piece.prototype.rotate;
	
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
	zPiece.prototype.rotate = Piece.prototype.rotate;

	var cubePiece = Tetris.cubePiece = function() {	
		this.blocks = [
			new Tetris.Block([4,0]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,0]),
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
	};
	
	backLPiece.prototype.move = Piece.prototype.move;
	backLPiece.prototype.deepDup = Piece.prototype.deepDup;
	backLPiece.prototype.rotate = Piece.prototype.rotate;


	var lPiece = Tetris.lPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,1]),
			new Tetris.Block([5,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,0])
		];
	};
	
	lPiece.prototype.move = Piece.prototype.move;
	lPiece.prototype.rotate = Piece.prototype.rotate;
	lPiece.prototype.deepDup = Piece.prototype.deepDup;
	

	var centerPiece = Tetris.centerPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,1]),
			new Tetris.Block([5,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([4,0])
		];
	};
	
	centerPiece.prototype.move = Piece.prototype.move;
	centerPiece.prototype.deepDup = Piece.prototype.deepDup;
	centerPiece.prototype.rotate = Piece.prototype.rotate;	
	
	
})(this);