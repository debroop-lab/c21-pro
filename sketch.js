var r1,r2,r3,r4


function setup() {
  createCanvas(1200,800);
 r1 = createSprite(100,100,50,100)
 r2= createSprite(400,300,100,50)
 r3=createSprite(200,200,50,50)
 r4=createSprite(500,500,50,50)

 r1 .shapeColor = "green";
 r2 .shapeColor = "green";
r3.shapeColor="green"
r4.shapeColor="green"
  
}


function draw() {
  background(0); 
r1.x = mouseX
r1.y= mouseY


if(isTouching(r1,r3)){
  r1.shapeColor = "red"
  r3.shapeColor = "red"
}
else 
{
  r1.shapeColor = "green"
  r3.shapeColor = "green"
}
  
  drawSprites();



}
 

  
  
  
  
  
  
  
    
