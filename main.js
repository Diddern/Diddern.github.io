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
	
	if (square.x === 0 && square.y === 0){
		square.xdir = 1;
		square.ydir = 1;
	}
	else if(square.x>=400-square.w){
		square.xdir = -1;
		square.ydir = -1;
	}
//	else if (square.x===0){
//		square.xdir = 1;
//	}
	square.x+=(square.xspeed*square.xdir);
	square.y+=(square.yspeed*square.ydir);
	drawSquare();

}

function makeSquare() {
	square = {
	x: 0,
	y: 0,
	h: 15,
	w: 15,
	xdir: 1,
	ydir: 1,
	xspeed: 2,
	yspeed: 2
	}
}

setInterval(move, 10);
document.getElementById("Canvas").addEventListener('click', makeSquare);
