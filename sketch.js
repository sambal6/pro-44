var Engine = Matter.Engine,
  World = Matter.World,
 // Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var bricks = [];


var score =0;
function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  //ground = new Ground(width/2,height,width,20);




    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       bricks.push(new Brick(j,75));
    }
    
    for (var j = 50; j <=width-10; j=j+50) 
    {
       bricks.push(new Brick(j,100));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       bricks.push(new Brick(j,125));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       bricks.push(new Brick(j,150));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 // ground.display();
  
   for (var i = 0; i < bricks.length; i++) {
     
     bricks[i].display();
     
   }

     
  
}