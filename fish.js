let canvas = document.getElementById('canvas');
let save = document.getElementById("save");
let fillColour = document.getElementById("fillColour");
let stamp = document.getElementById("stamp");

let ctx = canvas.getContext("2d");
let theColour;
let Colour;

stamp.addEventListener("select", draw);
save.addEventListener("click", saveFunction);
canvas.addEventListener("click", draw);
strokeColour.addEventListener("change", colourChange);
fillColour.addEventListener("change", changeColour);

function draw() {
    console.log(event.x);
    console.log(event.y);
    ctx.translate(event.x,event.y);
    if (stamp.value == "fish") {
        fish();
    }
    else if (stamp.value == "star") {
        star(70, 350, 5, 30, 15);
    }
    else if (stamp.value == "bubble") {
        bubble();
    }
    else if (stamp.value == "ornament") {
        ornament();
    }
}

function colourChange() {
    Colour = this.value;
}

function changeColour() {
    console.log(this.value);
    theColour = this.value;
}

function clearFunction(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

}

function saveFunction() {
    let newWindow = window.open();
    newWindow.document.write("<img src='" +
           canvas.toDataURL("image/png") + 
           "' alt='from canvas'/>");
}


function ornament() {
    ctx.beginPath();
    ctx.fillStyle= theColour;
    ctx.strokeStyle= Colour;
    ctx.moveTo(350,10);
    ctx.lineTo(320,60);
    ctx.lineTo(380,60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
}

function bubble() {
    
    ctx.beginPath();
    ctx.fillStyle= theColour;
    ctx.strokeStyle= Colour;
    ctx.arc(0,0,25,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    
}


function star(cx, cy, spikes, outerRadius, innerRadius) {
    
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.strokeSyle = "#000";
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath();
    ctx.lineWidth=6;
    ctx.strokeStyle= Colour;
    ctx.stroke();
    ctx.fillStyle= theColour;
    ctx.fill();
    
    


}


function fish() {   
    ctx.save(); 
    ctx.lineWidth = 30;
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(175, 140);
    ctx.bezierCurveTo(175, 137, 170, 125, 150, 125);
    ctx.bezierCurveTo(120, 125, 120, 162.5, 120, 162.5);
    ctx.bezierCurveTo(120, 180, 140, 202, 175, 220);
    ctx.bezierCurveTo(210, 202, 230, 180, 230, 162.5);
    ctx.bezierCurveTo(230, 162.5, 230, 125, 200, 125);
    ctx.bezierCurveTo(185, 125, 175, 137, 175, 140);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "#FF0099";
    ctx.lineWidth = 4;
    ctx.moveTo(300, 230);
    ctx.quadraticCurveTo(350, 180, 325, 130);
    ctx.quadraticCurveTo(350, 180, 350, 180);
    ctx.quadraticCurveTo(400, 230, 300, 180);
    ctx.fill();
    ctx.stroke();
    

    ctx.beginPath();
    ctx.fillStyle = theColour;
    ctx.strokeStyle = Colour;
    ctx.lineWidth = 5;
    
    ctx.scale(2, 1);

    ctx.arc(100, 200, 60, 0, Math.PI * 2, false); // Outer circle
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.moveTo(128, 180);
    ctx.arc(70, 180, 7, 0, Math.PI * 2);  //  eye
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(120, 200);
    ctx.arc(80, 200,  40,  0,  Math.PI,  false); //  Mouth  (clockwise)  
    ctx.stroke();  
    
    ctx.beginPath()
    ctx.lineWidth = 2;
    ctx.fillStyle = "blue"
    ctx.moveTo(110, 155);
    ctx.lineTo(95, 170);
    ctx.lineTo(110, 185);
    ctx.fill();
    ctx.stroke();
    ctx.restore(); 
}

