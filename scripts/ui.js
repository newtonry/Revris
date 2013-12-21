(function(root) {
	var Tetris = root.Tetris = (root.Tetris || {});
	
	var UI = Tetris.UI = function(canvas) {
	  this.canvas = canvas;
	};
	
	UI.prototype.createCanvas = function() {
		this.canvas.empty();
		this.canvas.append("<div class='flash'></div>");

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
		this.keysNormal = function(e) {
			
			//up 
			if (e.keyCode == 38) {
				board.rotateCurrentPiece();
			}
			//down 
			else if (e.keyCode == 40) {
				board.moveCurrentPiece([0,1]);
			}
			//right 
			else if (e.keyCode == 39) {
				board.moveCurrentPiece([1, 0]);
			}
			//left 
			else if (e.keyCode == 37) {
				board.moveCurrentPiece([-1,0]);
			}
			//space 
			else if (e.keyCode == 32) {
				board.rotateCurrentPiece();
			}			
			that.printBoard(board.getAllBlocks());
		};
		
		this.adjustControls(0);
	};

	UI.prototype.setupReverseControls = function(board) {
		var that = this;
		this.keysReverse = function(e) {			
			//up 
			if (e.keyCode == 38) {
				board.moveCurrentPiece([0,1]);
			}
			//down 
			else if (e.keyCode == 40) {
				board.rotateCurrentPiece();
			}
			//right 
			else if (e.keyCode == 39) {
				board.moveCurrentPiece([-1,0]);
			}
			//left 
			else if (e.keyCode == 37) {
				board.moveCurrentPiece([1, 0]);
			}
			//space 
			else if (e.keyCode == 32) {
				board.rotateCurrentPiece();
			}			
			that.printBoard(board.getAllBlocks());			
		};
	};
	
	UI.prototype.flipBoard = function(angle) {
		var canvas = this.canvas

		canvas.find('.flash').animate({opacity: 1}, 150, function() {
			canvas.css("transform", "rotate(" + angle + "deg)");
			canvas.css("-ms-transform", "rotate(" + angle + "deg)"); /* IE 9 */
			canvas.css("-webkit-transform", "rotate(" + angle + "deg)"); /* Safari and Chrome */
			canvas.find('.flash').animate({opacity: 0}, 75, function() {});		
		});		
	};
	
	UI.prototype.adjustControls = function(currentRotation) {
		if (currentRotation === 0) {
			$(root).off("keydown", this.keysReverse);
			$(root).on("keydown", this.keysNormal);			
		} else if (currentRotation === 180) {
			$(root).off("keydown", this.keysNormal);
			$(root).on("keydown", this.keysReverse);
		}
	};
	
	UI.prototype.flashBoard = function() {
		this.canvas.append('asfddsfsd');
		
	};
	
	UI.prototype.printBoard = function(blocks) {
		$(this.canvas).find(".square").addClass('empty').removeClass('block').css('background-color', '');
		for(var i = 0; i < blocks.length; i++) {
			var xPos = blocks[i].position[0];
			var yPos = blocks[i].position[1];
			$(this.canvas).find("#pos-" + xPos + "-" + yPos).css('background-color', blocks[i].color).addClass('block');
			
		}
	};
})(this);