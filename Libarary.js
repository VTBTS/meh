img=""; 
status="";
var j = 0;
function preload(){
  img=loadImage('libraryjpg.jpg');
}

function setup(){
   canvas=createCanvas(640,420);
   canvas.center();
   objectDectector= ml5.objectDetector('cocossd', Modelloaded);
   document.getElementById("status").innerHTML= "Status : Dectecting Objects";
}


function draw(){
    image(img,0,0,640,420);
    fill("FF0000");
    text("Books",45,75);
    noFill();
    stroke("#1717d1");
    rect(30,60,450,350);
}



function Modelloaded(){
    console.log("Loaded!");
    objectDectector.detect(img, gotResult);
}

function gotResult(error, result){
     if(error){
     console.log(error);
}
    console.log(result);
}