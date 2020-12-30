var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,package_attr;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	packageSprite.setScale= 0.5;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	


	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  keyPressed();

  

  drawSprites();
 
}


function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
	 Matter.Body.setStatic(packageBody,false);

}
}

// Extended keyboard codes: Character ASCII Up Arrow 72 Down Arrow 80 Left Arrow 75 Right Arrow 77

/*var box1, box2, box3;

box1 = new Box(265,616,20,100);
	box2= new Box (485,616,20,100 );
	box3= new Box (375,650,200,20);
  
  box1.display();
  box2.display();
  box3.display();*/
