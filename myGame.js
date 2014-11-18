var MyGame = {
  init: function(a, b){
    return a + b;
  },

//Here something is not correct.
var Square = function (){}
	x = 0;
	y = 0;
	h = 15;
	w = 15;
	xdir = 1;
	ydir = 1;
	xspeed = 2;
	yspeed = 2;

tegn: function drawSquare(){
		var c = document.getElementById("Canvas");
		var ctx = c.getContext("2d");
		ctx.fillStyle = "#FF0000";
		ctx.fillRect(squareX,squareY,squareH,squareW);
},

lag: function makeSquare(){
	requestAnimationFrame(drawSquare);
	var square = new Square();
	}
};

(function(){
document.getElementById("Canvas").addEventListener('click', MyGame.makeSquare);})();
//document.getElementById("Canvas").addEventListener('click', lag);