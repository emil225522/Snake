class Particle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = getRndInteger(-20,20);
        this.speedY = getRndInteger(-20,20);
    }

    move() {
        this.x+= this.speedX;
        this.y+= this.speedY;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  