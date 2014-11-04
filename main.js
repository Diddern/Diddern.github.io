var square = null;

function drawSquare(){

	var c = document.getElementById("Canvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(square.x,square.y,square.h,square.w);
}

function move() {
	if (square === null){
		return;
	}
	var c = document.getElementById("Canvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(square.x, square.y, square.h, square.w);
	square.x+=2;
	square.y+=2;
	drawSquare();
}

function makeSquare() {
	square = {
	x: 0,
	y: 0,
	h: 15,
	w: 15
}
}
setInterval(move, 1000/60);
document.getElementById("Canvas").addEventListener('click', makeSquare);
