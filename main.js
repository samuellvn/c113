var canvas;
var classifier;
var video;
var pose_net;
var pose_n_x=0;
var pose_n_y=0;
var imagem_nariz;

function preload(){
  imagem_nariz=loadImage("https://www.pngkit.com/png/full/399-3998563_mustache-glasses-nose-mask-funny-glasses-with-nose.png");
}
function setup(){
  canvas=createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  pose_net=ml5.poseNet(video, modelo_carregado);
  pose_net.on("pose", poses_obtidas);
}
function modelo_carregado(){
  console.log("poseNet foi carregada");
}
function poses_obtidas(results){
  if(results.length>0){
    console.log(results);
    pose_n_x=results[0].pose.nose.x-15;
    pose_n_y=results[0].pose.nose.y-15;
    console.log("nariz_x: "+pose_n_x);
    console.log("nariz_y: "+pose_n_y);
  }
}
function draw(){
  image(video, 0, 0, 300, 300);
  image(imagem_nariz, pose_n_x, pose_n_y, 30, 30)
}
function takeSnapshot(){
  save("foto.png");
}
