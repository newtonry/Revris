(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var UI = Tetris.UI = function(canvas) {
	  this.canvas = canvas;
	};
	
	UI.prototype.createCanvas = function() {
		this.canvas.empty();

		// adding the divs to the canvas
		for(var x = 0; x < game.board.grid.length; x++) {
			this.canvas.append("<div class='row' id='row-" + x + "' data-x='" + x + "'></div>");
			for(var y = 0; y < game.board.grid[0].length; y++) {
				$(this.canvas).find("#row-" + x).append("<div class='col square' id='pos-" + x + "-" + y + "' data-y='" + y + "'></div>");
			}
		}
	};

	UI.prototype.setupControls = function(board) {
		var that = this;
		
		$(document).keydown(function(e) {
			
			//up 
			if (e.keyCode == 38) {
				board.rotateCurrentPiece();
			}

			//down 
			if (e.keyCode == 40) {
				board.moveCurrentPiece([0,1]);
				// that.printBoard();
			}
			//right 
			else if (e.keyCode == 39) {
				board.moveCurrentPiece([1, 0]);
				// that.printBoard();
			}
			//left 
			else if (e.keyCode == 37) {
				board.moveCurrentPiece([-1,0]);
				// that.printBoard();
			}
			//space 
			else if (e.keyCode == 32) {
				board.rotateCurrentPiece();
			}			
		})
		
	};
	
	UI.prototype.printBoard = function(blocks) {
		$(this.canvas).find(".square").css('background-color', '#99E6FF');
		for(var i = 0; i < blocks.length; i++) {
			var xPos = blocks[i].position[0];
			var yPos = blocks[i].position[1];
			$(this.canvas).find("#pos-" + xPos + "-" + yPos).css('background-color', blocks[i].color);
		}
	};
})(this);