class Brick {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.w = 40;
        this.h = 20;
        this.body = Bodies.rectangle(x, y, this.w,this.h, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }

};