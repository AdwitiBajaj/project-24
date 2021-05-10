class Stone{
    constructor(){
    var options={
        restitution:0.1,
        friction : 0.9,
        density : 12
    }
    this.body= Bodies.rectangle(140,200,50,50,options);
    World.add(world,this.body)
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER)
    rect(0,0,50,50);
    pop()
    }
}