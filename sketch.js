// once value assigned to const cannot be chnaged
// cretaing consts from matter library to use them in our code
const Engine = Matter.Engine;     //lets use use the physics in our code
const World = Matter.World;       // we are creating our own world inside th ematter world
const Bodies = Matter.Bodies;     // Bodies helps us to create matter objects/bodies
const Constraint = Matter.Constraint;   //constraint is going to help us to create an attachment between bodies

// creating variables to be used in the programn
var engine, world, backgroundImg;
var balls=[];
var canvas, angle, tower, ground, cannon;

// loading all media in preload
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

// code execution done once in setup
function setup() {

  // creates a area to display the code
  canvas = createCanvas(1200, 600);

  // creating our world and adding engine to the same
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  // adding the properties for ground
  var options = {
    isStatic: true
  }

  //  creating the bodies and adding them to the world
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options); 
  World.add(world, ground);
   
  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(170,110,150,80,angle);

}

// code executes at every framecount
function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  cannon.display();
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  // add this feature only to the tower image
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  // pop remove the property after assigne to the above line
  pop();  

  for(var i = 0;i<ball.length;i++){
    showCannonBalls(balls[i]);
  }
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    var cannonBall = new CannonBall(cannon.x,cannon.y);
    cannonBall.trajectory= [];
    Matter.Body.setAngle(cannoBall.body, cannon.angle);
    balls.push(cannonBall);
  }
}
function showCannoBalls(ball){
  if(ball){
    ball.display();
  }
}

function keyReleased(){
if(keyCode === DOWN_ARROW){
  balls[ball.length-1].shoot();
}
}