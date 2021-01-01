//Scripting by Daniel Aviles
//Licensed by Whitehat Jr.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//suspension=createSprite(290,200,600,200)
//var = createSprite(x,y,r) -- This is for making the bobs.
bob1 = new bob(300,350,50);
bob2 = new bob(350,350,50);
bob3 = new bob(400,350,50);
bob4 = new bob(450,350,50);
bob5 = new bob(500,350,50);
//var = createSprite(x,y,w,h) -- This is for making the ground.
ground1 = new ground(400,100,300,40);
sling1 = new suspender(bob1.body,ground1.body,-50*2,0);
sling2 = new suspender(bob2.body,ground1.body,-25*2,0);
sling3 = new suspender(bob3.body,ground1.body,-0*2,0);
sling4 = new suspender(bob4.body,ground1.body,25*2,0);
sling5 = new suspender(bob5.body,ground1.body,50*2,0);
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  drawSprites();
 keyPressed();
}

function keyPressed() {
if (keyCode === UP_ARROW)
{Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); }
}


