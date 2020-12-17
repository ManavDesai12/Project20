var car, wall;
var speed, weight;
speed=random(55,90);
weight=random(400,1500);

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor(80,80,80);
  car.velocityX = speed;
  if(car.isTouching(wall)){
    car.velocityX = 0
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if((0.5*weight*speed*speed)/22500 < 100){
    car.shapeColor("green")
  }
  else if(100 =< (0.5*weight*speed*speed)/22500 =< 180){
    car.shapeColor("yellow");
  }
  else {
    car.shapeColor("red");
  }
}