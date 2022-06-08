///Simple pant

//setup canvas and graphics conxext
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//global variables
let mouseispressed=false;
let mouseX, mouseY, pmouseX, pmouseY, shootx = 0,shooty = 0, sin,cos, lineX, lineY, mXvar, mYvar,
randX = Math.floor(Math.random()*800),randY = Math.floor(Math.random()*600),point = 0;
let size = 5;
let penCooler = "black";

let poiEl = document.getElementById("poi");

function getDistance(){
    let xdis = mXvar - randX;
    let ydis = mYvar - randY;

    return Math.sqrt(Math.pow(xdis, 2) + Math.pow(ydis, 2));
}

//main program loop (60 fps)
requestAnimationFrame(loop);
function loop () {
    

    ctx.fillStyle = "white";
    ctx.fillRect(0,0,cnv.width,cnv.height);
    // draw a circle if mouse is pressed
    /*if (mouseispressed) {
        ctx.strokeStyle = penCooler;
        ctx.lineWidth = 20;
        ctx.beginPath();
        //ctx.arc(mouseX,mouseY,size,0,2*Math.PI);
        ctx.moveTo(400+shootx, 600+shooty);
        ctx.lineTo(lineX+400+shootx, lineY+600+shooty);
        ctx.stroke();
        
        shootx += 1;
    }*/

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(randX, randY, 50, 0, 2 * Math.PI);
    ctx.fill();
    //console.log(randX);
    //console.log(randY);





    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(400,600);
    ctx.lineTo(mXvar,mYvar)
    ctx.stroke(); 
    ctx.fillStyle = "black";
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(400,600);
    ctx.lineTo(lineX+400,lineY+600)
    ctx.stroke(); 
   
    ctx.beginPath();
    ctx.arc(400, 600, 50, 0, 2 * Math.PI);
    ctx.fill();
    requestAnimationFrame(loop);
}

// document event stuff
document.addEventListener("mousedown", mousedownH);
//document.addEventListener("mouseup", mouseupH);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keyDownHandler);

function mousedownH(){
    mouseispressed = true;
    mXvar = mouseX;
    mYvar = mouseY;
    if (getDistance(randX,mXvar,randY,mYvar) < 50) {
        randX = Math.floor(Math.random()*800);
        randY = Math.floor(Math.random()*600);
        point++ ;
        poiEl.innerHTML = point;
    } 
}
//function mouseupH(){
   // mouseispressed = false;
//}
function mousemoveHandler(event) {
    //save previous mouse x and y 
    let run = mouseX-400;
    let rise = mouseY-600;
    let h = Math.sqrt(run**2+rise**2);
    //cos = mouseX/mouseY//mouseX/Math.sqrt(mouseX*mouseX+mouseY*mouseY);
    lineY = (rise/h) *100;
    lineX = (run/h) *100;


    //update mousex and mousey
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}
function keyDownHandler (event){
    /*if (event.code == "Space") {
        //draw background
        ctx.fillStyle = "white";
        ctx.fillRect(0,0, cnv.width,cnv.height);
    } else*/ if (event.code == "ArrowUp") {
        size++;
    } else if (event.code == "ArrowDown") {
        size--;
    } else if (event.code == "Digit1") {
        penCooler = "black";
    } else if (event.code == "Digit2") {
        penCooler = "red";
    } else if (event.code == "Digit3") {
        penCooler = "green";
    } else if (event.code == "Digit4") {
        penCooler = "blue";
    }
}

