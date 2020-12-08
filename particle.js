class Particle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = getRndInteger(-20,20);
        this.speedY = getRndInteger(-20,20);
        this.isDead = false;
    }

    move() {
        this.x+= this.speedX;
        this.y+= this.speedY;
        if (this.x > 800 || this.x < 0 || this.y > 800 | this.y < 0)
        this.isDead = true;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
  }

  function getRndInteger(min, max) {
    return Math.random() * (max - min)  + min;
  }
  