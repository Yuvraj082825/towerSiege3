const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;
//initialising engine and world
var world,engine;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19;
var sling,score=0,attempt=0;

var backgroundImg;
function preload()
{
    //attempts();
    getBackgroundImg();
}
function setup()
{
    var canvas= createCanvas(1800,600);
    engine = Engine.create();
    world = engine.world;

    //text("Score: "+score,750,40);
    text("Attempts "+attempt,750,70);

    ground=new Ground(900,580,1800,10);
    stand=new Ground(1130,500,324,10);

    Engine.run(engine);

    block1=new Box(1130,450,60,90);
    block2=new Box(1189,450,60,90);
    block3=new Box(1254,450,60,90)
    block4=new Box(1070,450,60,90);
    block5=new Box(1005,450,60,90);
    //level two
    block6=new Box(1070,370,60,90);
    block7=new Box(1130,370,60,90);
    block8=new Box(1189,370,60,90);
    //top
    block9=new Box(1130,290,60,90);
    //polygon
    polygon=new Polygon1(200,500,20);
    sling=new SlingShot(polygon.body,{x:200,y:400});
    //fill("yellow");
    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    

}

function draw()
{
    if(backgroundImg)
    background(backgroundImg);
    text("Score  " + score, 750, 40)

    Engine.update(engine);
    ground.display();
    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    
    polygon.display();
    sling.display();
    

}
function mouseDragged()
{
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
    //sling.attach(polygon.body);
}

function mouseReleased()
{
	sling.fly();
    
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, {x:235, y:420}) 
	  sling.attach(polygon.body);
	}
  }
  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}    
/*function attempts()
{
    if(this.sling.bodyA=null)
    {
        attempt++
    }
}*/
function score()
{
    if(this.visibility<0&& this.visibility>-105){
        score+=10;
    }
}