function Bullet(x, y, dx, dy){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.speed = 5;

  this.update = function(){
    this.dx = enemies[0].x;
    this.dy = enemies[0].y;

    this.movement();
    this.draw();
  }

  this.draw = function(){
    fill(20);
    strokeWeight(0);
    ellipse(this.x, this.y, 15);
  }

  this.movement = function(){
    let x = this.x - this.dx;
    let y = this.y - this.dy;

    let angle = atan(y / x);
    if( this.x >= this.dx ) {

      angle -= radians(180);

    }

    this.x += this.speed * cos(angle);
    this.y += this.speed * sin(angle);
// Bullet panaikinimas
    if(this.x === this.dx && this.y === this.dy){

    }
  }
}
