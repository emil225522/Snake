ctx = gameCanvas.getContext("2d");
class Explosion {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        this.angle = 0;
        for (let i = 0; i < 360; i++) {
            console.log(this.angle);
            this.angle = i;
            this.speed = getRnd(-30,30);
            this.dx = Math.cos(this.angle)*this.speed;
            this.dy = Math.sin(this.angle)*this.speed;
            this.particles.push(new Particle(getRnd(x-20,x+20),getRnd(y-20,y+20),this.dx,this.dy));
        }
    }
    update() {
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
function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min)  + min);
  }
