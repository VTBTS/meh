img="";
status="";
var j = 0;
function preload(){
  img=loadImage('kitchen.jpg');
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
    text("Table",50,110);
    noFill();
    stroke("#1717d1");
    rect(0,90,500,200);
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
