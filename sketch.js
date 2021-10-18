var iss, spacecraft;
var hasDocked=false;
var iss_image;
var spaceBg_image, spaceCraft1_image, spaceCraft2_image, spaceCraft3_image, spaceCraft4_image;

function preload(){
iss_image=loadImage("Docking-undocking/iss.png");
spaceBg_image=loadImage("Docking-undocking/spacebg.jpg");
spaceCraft1_image=loadImage("Docking-undocking/spacecraft1.png");
spaceCraft2_image=loadImage("Docking-undocking/spacecraft2.png");
spaceCraft3_image=loadImage("Docking-undocking/spacecraft3.png");
spaceCraft4_image=loadImage("Docking-undocking/spacecraft4.png");
}
function setup() {
  createCanvas(800,600);
  spacecraft=createSprite(300, 500, 20, 20);
  spacecraft.addImage(spaceCraft1_image);
  spacecraft.scale=0.3;

  iss=createSprite(400, 250, 50, 50);
  iss.addImage("iss",iss_image);
}

function draw() {
  background(spaceBg_image); 
  spacecraft.addImage(spaceCraft1_image);
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,+1);
    if(keyIsDown(RIGHT_ARROW)){
      spacecraft.addImage(spaceCraft4_image);
      spacecraft.x+=10;
    }
    if(keyIsDown(LEFT_ARROW)){
      spacecraft.addImage(spaceCraft3_image);
      spacecraft.x-=10;
    }
    if(keyIsDown(DOWN_ARROW)){
      spacecraft.addImage(spaceCraft2_image);
      spacecraft.y+=10;
    }
    if(keyIsDown(UP_ARROW)){
      spacecraft.y-=10;
    }
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200, 500);
  }
  
  drawSprites();
}