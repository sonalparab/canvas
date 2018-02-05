var canvas = document.getElementById("slate")
var ctx = canvas.getContext('2d');
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
var t = 0;

//Work 00
var drawShapes = function(e){
    var offset = canvas.getBoundingClientRect();
    var x = e.clientX - offset.x;
    var y = e.clientY - offset.y;
    if(t === 0){
	ctx.beginPath();
	ctx.arc(x,y,10,0,2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
    }
    else{
	ctx.beginPath();
	ctx.fillStyle = "blue";
	ctx.fillRect(x-25,y-25,50,50);
	ctx.stroke();
    }
}

var clearing = function(e){
    ctx.clearRect(0, 0, 500, 500);
}

var update = function(e){
    t += 1;
    t = t % 2;
}

//canvas.addEventListener('click',drawShapes);
//clear.addEventListener('click',clearing);
//toggle.addEventListener('click',update);


//Work 01
var drawPath = function(e){
    var offset = canvas.getBoundingClientRect();
    var x = e.clientX - offset.x;
    var y = e.clientY - offset.y;

    ctx.closePath();
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x,y,10,0,2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    
}

var clearPath = function(e){
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
}

canvas.addEventListener('click',drawPath);
clear.addEventListener('click',clearPath);
