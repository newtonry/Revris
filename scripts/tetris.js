(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var Game = Tetris.Game = function() {};
	
	Game.prototype.start = function(canvas) {
		this.board = new Tetris.Board();
		this.board.controller = this;
		
		this.ui = new Tetris.UI(canvas);
		this.ui.createCanvas();
		this.ui.setupControls(this.board);

		this.board.getNewPiece();		
		var that = this;
		
		setInterval(function() {
 	 		that.board.update();
			
		}, 1000);
		
		setInterval(function() {
			that.ui.printBoard(that.board.getAllBlocks());			
		}, 16);
	};
	
	Game.prototype.flipBoard = function() {
		this.rotation = ((this.rotation || 0) + 180) % 360;
		
		this.ui.flipBoard(this.rotation);
		
	};
	
})(this);