const Engine=Matter.Engine; 
const World= Matter.World;
const Bodies= Matter.Bodies;

var myengine, world;
var ground;
function setup() {
  //create canvas
  var canvas =createCanvas(400,400);
  myengine=Engine.create();
  world=myengine.world;
  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);
  ground1=new Ground(200,390,400,20);
  
}

function draw() {
  //background
   background(0); 
   Engine.update(myengine)            
  //rectangle  
  //to make the rectangle's centre at 200,200   
 box1.display();
 box2.display();
 ground1.display();
 
  
  
}