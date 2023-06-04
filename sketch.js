
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var LeftWall
var RightWall

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.03,
		friction:0,
		density:1.2
	}
	
	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

   ground = new Ground (width/2,690,width,20)
   LeftWall = new Ground (1050,620,20,120)
   RightWall = new Ground (850,620,20,120)
  

    fill("yellow");


	Engine.run(engine);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  LeftWall.display()
  RightWall.display()
  
  

  ellipse(ball.position.x,ball.position.y,10);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:50})
	Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:0})
	
  }

 




