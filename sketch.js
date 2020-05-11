const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box;



function setup() {
  var canvas = createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
    engine = Engine.create();
    world = engine.world;

    box = new Box(805,160,70,70);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 

  box.display();
  drawSprites();
}