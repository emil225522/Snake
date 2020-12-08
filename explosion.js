ctx = gameCanvas.getContext("2d");
class Explosion {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        for (let i = 0; i < 1000; i++) {
            this.particles.push(new Particle(x,y));
        }
    }
    update() {
        console.log(this.particles.length);
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].move();
            if (this.particles[i].isDead == true)
            this.particles.splice(i,1);
        }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    draw() {
        for (let i = 0; i < this.particles.length; i++) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.particles[i].getX(), this.particles[i].getY(), 2, 2);
        }
    }
}
