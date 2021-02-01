class Polygon1
{
    constructor(x,y,radius){
        var options={
            //isStatic:true,
            restitution:1,
            friction:1,
            density:2
        }
        /*this.x=x;
		this.y=y;
		this.radius=radius*/
		this.image=loadImage("polygon.png")
		this.body=Bodies.circle(x, y,radius, options)
		World.add(world, this.body);
    }
    display()
    {
        var polygonPos=this.body.position;
        push();
        translate(polygonPos.x,polygonPos.y);
        rotate(this.body.angle);
        fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,40, 40)
		pop()
    }
}