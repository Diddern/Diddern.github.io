function drawSquare(){

	var c = document.getElementById("Canvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(makeSquare.x, makeSquare.y ,10,10);
}

function makeSquare() {
	x = 0;
	y = 0;
	h = 15;
	w = 15;
}

document.getElementById("Canvas").addEventListener('click', drawSquare);
setInterval(function(){makeSquare()}, 1000);