var canvas;
var video;

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 300, 300);
    fill("yellow")
    stroke("orange");
    circle(30, 30, 10);
    rect(10, 10, 40, 40, 10);
    rect(250, 10, 40, 40, 10);
    rect(10, 250, 40, 40, 10);
    rect(250, 250, 40, 40, 10);
}
