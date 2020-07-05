
var ball;
var surface;
 var Engine = Matter.Engine,
World= Matter.World,
Bodies = Matter.Bodies;
 Constraint = Matter.Constraint;


var engine;



function setup() {
   createCanvas(800,400);
 engine = Engine.create();
 var ball = this.bodies.Ellipse(260,320,80,80);
 var surface = this.bodies.Rectangle(210,100,120,20);

 
 var options  =  {

   bodyA:ball.body,
   bodyB:surface.body,
   length:50,
   stiffness:0.4
 }
 var constraint = Constraint.create(options);
 World.add(world,constraint);
}
 function draw(){
background(0);
this.bodies = ball.body;
this.bodies = surface.body;


  drawSprites();
}

