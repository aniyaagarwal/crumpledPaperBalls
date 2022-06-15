const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	var ballOptions = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		desnity: 1.2
	};

	ball = Bodies.circle(200, 200, 50, ballOptions);
	World.add(world, ball);
	//Create the Bodies Here.

	groundObj = new Ground(width / 2, 670, width, 20)
	leftSide = new Ground(1100, 600, 20, 120)
	rightSide = new Ground(1300, 600, 20, 120)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	ellipse(ball.position.x, ball.position.y, 20);

	groundObj.display();
	leftSide.display();
	rightSide.display();



	drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.3, y:0.025})
	}
}