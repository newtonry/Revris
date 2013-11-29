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
				
	var iPiece = Tetris.iPiece = function() {	
		this.blocks = [
			new Tetris.Block([4,0]),
			new Tetris.Block([4,1]),
			new Tetris.Block([4,2]),
			new Tetris.Block([4,3])		
		];
	};
	
	iPiece.prototype.move = Piece.prototype.move;

	var sPiece = Tetris.sPiece = function() {	
		this.blocks = [
			new Tetris.Block([4,0]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1]),
			new Tetris.Block([5,2])
		];
	};
	
	sPiece.prototype.move = Piece.prototype.move;

	var zPiece = Tetris.zPiece = function() {	
		this.blocks = [
			new Tetris.Block([5,0]),
			new Tetris.Block([5,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([4,2])
		];
	};
	
	zPiece.prototype.move = Piece.prototype.move;
	

	var cubePiece = Tetris.cubePiece = function() {	
		this.blocks = [
			new Tetris.Block([4,0]),
			new Tetris.Block([5,0]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1])
		];
	};
	
	cubePiece.prototype.move = Piece.prototype.move;

	var backLPiece = Tetris.backLPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1]),
			new Tetris.Block([3,0])
		];
	};
	
	backLPiece.prototype.move = Piece.prototype.move;

	var lPiece = Tetris.lPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1]),
			new Tetris.Block([5,0])
		];
	};
	
	backLPiece.prototype.move = Piece.prototype.move;


	var lPiece = Tetris.lPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1]),
			new Tetris.Block([5,0])
		];
	};
	
	lPiece.prototype.move = Piece.prototype.move;

	var centerPiece = Tetris.centerPiece = function() {	
		this.blocks = [
			new Tetris.Block([3,1]),
			new Tetris.Block([4,1]),
			new Tetris.Block([5,1]),
			new Tetris.Block([4,0])
		];
	};
	
	centerPiece.prototype.move = Piece.prototype.move;
	
	
	
	
})(this);