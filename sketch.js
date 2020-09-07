var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, side1, side2, bottom;
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

	side1Sprite= createSprite(325, 610, 20, 100);
	side1Sprite.shapeColor = "red";

	side2Sprite = createSprite(475, 610, 20, 100);
	side2Sprite.shapeColor = "red";

	bottomSprite = createSprite(400, 650, 150, 20);
	bottomSprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.50, isStatic:true});
	World.add(world, packageBody);
	console.log(packageBody.velocity.x);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	side1 = Bodies.rectangle(325, 615, 20, 100);
	World.add(world, side1);

	side2 = Bodies.rectangle(475, 625, 20, 100);
	World.add(world, side2);

	bottom = Bodies.rectangle(400, 650, 150, 20);
	World.add(world, bottom);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
Matter.Body.setStatic(packageBody, false);

  }
}



