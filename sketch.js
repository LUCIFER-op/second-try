const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var dustbin;
var paper;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   

      dustbin = new Log (900, 20, 200 , PI/2  );
      dustbin= new Log (900, 200, 20 , PI/2 )
      dustbin = new Log (1100, 20, 200  , PI/2);


    paper = new Bird (200, 200, 50, 50);

    

    ground = new Ground(600,height,1200,30);
}

function draw(){
    background(0);

    
    log.display();
    log2.display();
    log3.display();
    
    ground.display();

}