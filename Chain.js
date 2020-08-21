class Chain {
    constructor(bodyA,bodyB) {
        var c_options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.4,
            length: 100,
        }
        this.chain = Matter.Constraint.create(c_options);
        World.add(world,this.chain);
    }
    display() {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
    }
} 
