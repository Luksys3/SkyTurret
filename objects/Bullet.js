function Bullet(id, x, y, enemyID){
    this.x = x;
    this.y = y;
    this.dx = enemies[enemyID].x;
    this.dy = enemies[enemyID].y;

    this.damage = 5;
    this.speed = 15;

    this.update = function(){
        if( typeof(enemies[enemyID]) !== 'undefined' ) {
            this.dx = enemies[enemyID].x;
            this.dy = enemies[enemyID].y;
        } else {
            this.die();
        }

        this.movement();
        this.collision();
        this.draw();
    }

    this.draw = function(){
        fill(20);
        strokeWeight(0);
        ellipse(this.x, this.y, 10);
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
    }

    this.collision = function() {
        if( dist(this.x, this.y, this.dx, this.dy) < 5 ){
            if( typeof(enemies[enemyID]) !== 'undefined' ) {
                enemies[enemyID].takeDamage( this.damage );
            }
            this.die();
        }
    }

    this.die = function() {
        delete bullets[id];
    }
}
