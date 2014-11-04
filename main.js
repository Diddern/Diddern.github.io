function drawSquare(){

	var c = document.getElementById("Canvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,400,400);

}
document.getElementById("Canvas").addEventListener('click', drawSquare);