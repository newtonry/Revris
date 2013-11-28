(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var Game = Tetris.Game = function() {};
	
	Game.prototype.start = function(canvas) {
		console.log(canvas);
		this.board = new Tetris.Board();
		this.ui = new Tetris.UI(canvas);
		this.ui.createCanvas();
		this.ui.setupControls(this.board);
		

		this.board.getNewPiece();		
		var that = this;
		
		setInterval(function() {
 	 		that.board.update();

			console.log(that.board.getAllBlocks());	
			
		}, 1000);
		
		setInterval(function() {

			that.ui.printBoard(that.board.getAllBlocks());			
			
		}, 16);
		
		
	}
	
	
	
})(this);