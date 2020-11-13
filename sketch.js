var obj1,obj2;
var rect1,rect2;
function setup() {
  createCanvas(600,600);
 obj1=createSprite(100,100,100,100);
 obj2=createSprite(100,500,100,100);
 rect1=createSprite(400,100,50,50);
 rect2=createSprite(400,500,50,50)
 obj1.velocityY=2;
 obj2.velocityY=-2;
 rect1.shapeColor="green";
 rect2.shapeColor = "green"
 obj1.shapeColor="green";
 obj2.shapeColor="green";
}

function draw() {
  background(0);  
  bounce(obj1,obj2);
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;
  if(isTouching(rect1,rect2)){
    rect1.shapeColor="red";
    rect2.shapeColor = "red"
  }
  else{
    rect1.shapeColor="green";
    rect2.shapeColor = "green"
  }
    drawSprites();
}
