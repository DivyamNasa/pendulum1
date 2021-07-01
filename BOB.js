class  BOB {

    constructor(x,y,radius){
    
        var options = {
            'restitution':1.5,
            'friction':2.0,
            'density':4.0,
            'isStatic' : false
        }
        
    this.radius=radius;
    this.body =Bodies.circle(x,y,17,options);
    World.add(world,this.body);
    
    }
    
    
    display()  {
    push()
    rectMode(CENTER)
    fill("white")
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    pop();
    }
    
    }