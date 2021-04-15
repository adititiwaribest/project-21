var canvas;
var music;
var rect1,rect2,rect3,rect4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);
rect1=createSprite(55,590,150,15);
rect2=createSprite(225,590,150,15);
rect3=createSprite(400,590,150,15);
rect4=createSprite(600,590,150,15);
box=createSprite(Math.random(20,550),50,20,20);

rect1.shapeColor="blue";
rect2.shapeColor="yellow";
rect3.shapeColor="red";
rect4.shapeColor="green";   
box.shapeColor="white";       

box.velocityY=2;
}

function draw() {
    background(rgb(169,169,169));
createEdgeSprites();

if(box.isTouching(rect1)){
box.velocityY=0;
box.shapeColor="blue";
}

if(box.isTouching(rect2)){
    box.velocityY=0;
    box.shapeColor="yellow";
    }

 if(box.isTouching(rect3)){
     box.velocityY=0;
     box.shapeColor="red";
        }

        if(box.isTouching(rect4)){
            box.velocityY=0;
            box.shapeColor="green";
            }
            
        


drawSprites();


    //add condition to check if box touching surface and make it box
}
