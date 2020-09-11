//global
const p_time = document.querySelector(".time-d");
const canvas = document.getElementById("canvas");
//assign width height and bg to canvas as attr.
canvas.setAttribute('width','400px');
canvas.setAttribute('height','400px');
// canvas.style = 'width:400px;height:400px;'
const ctx = canvas.getContext('2d');
var radius = canvas.height / 2;
ctx.translate(radius,radius);
radius = radius * 0.90;

function drawClock(){
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx,radius);
}
function drawFace(ctx, radius){
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0 ,0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0,radius * 0.1 , 0,2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}
function drawNumbers(ctx, radius){
    var ang;
    var num;
    let ar = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
    ctx.font = radius * 0.09 + "px serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        // ctx.fillText(num.toString(), 0, 0);
        ctx.fillText(ar[num-1], 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}
function drawTime(ctx, radius){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
     //add digital time at the bottom in footer elem
     p_time.textContent = "Digital Time: " + hour + ":" + minute + ":" + second;
    hour = hour % 12; //because the time is given in 24h format
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute,radius * 0.8, radius * 0.07);
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}
function drawHand(ctx, pos, lenght, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -lenght);
    ctx.stroke();
    ctx.rotate(-pos);
}

// drawClock();
setInterval(drawClock,1000);

