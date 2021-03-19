//Create variables here
var  player ,bg; 

function setup() {
	createCanvas(400, 450);
  
  player = createSprite(200, 400 , 20,50);

  player.shapeColor ="black";
}

function preload()
{
  bg=loadImage("bgImage.jpg");
}
function draw() {  

  background(bg);;
  if(keyIsDown(UP_ARROW)){

    player.y = player.y - 10;
   
    camera.position.x = player.x;
    camera.position.y = player.y; 
  }

  drawSprites();
}

 



