const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//create the variables
var engine, world;
var hammer;
var ball1, ball2, ball3, ball4, ball5, ball6;
var rectsmall;
var squaresmall;
var simle;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //make the plane and hammer
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    //make ballls
    ball1 = new Rubber(500,200,20);
    ball2 = new Rubber(501,200,20);
    ball3 = new Rubber(502,200,20);
    ball4 = new Rubber(503,200,20);
    ball5 = new Rubber(504,200,20);
    ball6 = new Rubber(505,200,20);

    simle = new smell(1100, 100, 90)

    //make rect
    rectsmall = new smallr(900, 200);

    //make square
    squaresmall = new bigs(100, 200);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //display the variables
    plane.display();
    hammer.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    rectsmall.display();
    squaresmall.display();
    simle.display();

    
 
}