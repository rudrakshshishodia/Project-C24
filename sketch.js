
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobj,groundobj,dustbinobj,dustbin1obj,dustbin2obj;

function preload()
{
	
}

function setup() {
	createCanvas(2500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobj=new Paper(200,450,40);
	groundobj=new Ground(width/2,690,width,20);
	dustbinobj=new Dustbin(1040,562,30,170);
	dustbin1obj=new Dustbin(1170,665,250,30);
	dustbin2obj=new Dustbin(1300,562,30,170);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(239);
  
  paperobj.display();
  groundobj.display();
  dustbinobj.display();
  dustbin1obj.display();
  dustbin2obj.display();

  drawSprites();
 
}

	
function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85});
		
	}
   }

