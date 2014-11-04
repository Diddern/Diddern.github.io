<canvas id="Canvas" width="400" height="400"
style="border:1px solid #000000;">
</canvas> 

<script>


canvas.addEventListener('click', function() { }, false);

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

</script>