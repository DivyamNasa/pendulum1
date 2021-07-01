
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var Roof;
var bob1,bob2,bob3,bob4,bob5;



function preload()
{
	
}

function setup() {

	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 Roof = new roof(580,50,500,20)

 bob1 = new BOB(320,410,50);
 bob2 = new BOB(466,420,50);
 bob3 = new BOB(500,410,50);
 bob4 = new BOB(534,500,50);
 bob5 = new BOB(550,390,50);
  
 rope1 = new rope(bob1.body,Roof.body,-201,0);
 rope2 = new rope(bob2.body,Roof.body,-100,0);
 rope3 = new rope(bob3.body,Roof.body,0,0);
 rope4 = new rope(bob4.body,Roof.body,199,0);
 rope5 = new rope(bob5.body,Roof.body,100,0);





	Engine.run(engine);
  
}


function draw() {
 background(255,243,5);
 rectMode(CENTER);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();



  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  Roof.display();
  


  drawSprites();
 

  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
}


}



