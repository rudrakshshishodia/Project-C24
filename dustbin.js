class Dustbin{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }

    display(){
        var dustbinpos=this.body.position;
        push();
        translate(dustbinpos.x,dustbinpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("blue");
        fill("white");
        rect(0,0,this.w,this.h)
        pop();
    }
}