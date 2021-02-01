class Box  {
    constructor(x, y, width, height){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display(){
    
    if(this.body.speed < 3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("blue");
      stroke("white");
      strokeWeight(4)
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 15;
       tint(0,this.Visiblity);
       rect(this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  }

  
  
  