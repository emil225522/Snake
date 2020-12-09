class Particle {

    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;

        this.isDead = false;
        this.aliveTimer = 0;
    }

    move() {
        this.x+= this.dx;
        this.y+= this.dy;
        this.aliveTimer++;
        if (this.x > 800 || this.x < 0 || this.y > 800 || this.y < 0 || this.aliveTimer > 6);
        this.isDead = true;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
  }
  