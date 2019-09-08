function Enemy(options) {
    this.id = options.id;
    this.award = options.award;
    this.x = game.map.getPath();[0][0];
    this.y = game.map.getPath()[0][1] - 20 - options.space;

    this.healthMax = options.health;
    this.health = this.healthMax;

    this.type = "ground";
    this.mspeed = 1;

    this.pathI = 0;
    this.pathIM = game.map.getPath().length;

    this.update = function() {
        this.movement();
        // this.hit();

        if( this.health <= 0 ){
            this.die();
            return;
        }

        this.draw();
    }

    this.takeDamage = function(damage) {
        this.health -= damage;
        if(this.health <= 0){
          this.die();
        }
    }

    this.draw = function() {

        fill(20);
        strokeWeight(0);
        ellipse(this.x, this.y, 16);
        if(this.health != this.healthMax){
            fill(255, 0, 0);
            strokeWeight(0);
            rect(this.x - 7, this.y - 16, 14, 3);

            fill(0, 255, 0);
            strokeWeight(0);
            rect(this.x - 7, this.y - 16, map(this.health, 0, this.healthMax, 0, 14 ), 3);
        }
  }

    this.movement = function(){
        if(this.pathI !== this.pathIM){
            if(this.x === game.map.getPath()[this.pathI][0] && this.y < game.map.getPath()[this.pathI][1] ){
                if(game.map.getPath()[this.pathI][1] - this.y < this.mspeed){
                    this.y += game.map.getPath()[this.pathI][1] - this.y;
                }else{
                    this.y += this.mspeed;
                }

            }else if(this.x < game.map.getPath()[this.pathI][0] && this.y === game.map.getPath()[this.pathI][1]){
                if(game.map.getPath()[this.pathI][0] - this.x < this.mspeed){
                    this.x += game.map.getPath()[this.pathI][0] - this.x;
                }else{
                    this.x += this.mspeed;
                }

            }else if(this.x === game.map.getPath()[this.pathI][0] && this.y > game.map.getPath()[this.pathI][1]){
                if(this.y - game.map.getPath()[this.pathI][1] < this.mspeed){
                    this.y -= (this.y - game.map.getPath()[this.pathI][1]);
                }else{
                    this.y -= this.mspeed;
                }

            }else if(this.x > game.map.getPath()[this.pathI][0] && this.y === game.map.getPath()[this.pathI][1]){

                if(this.x - game.map.getPath()[this.pathI][0] < this.mspeed){
                    this.x -= this.x - game.map.getPath()[this.pathI][0];
                }
                this.x -= this.mspeed;

            }else{

                this.pathI++;

                if(this.pathI !== this.pathIM){
                    if(this.x === game.map.getPath()[this.pathI][0] && this.y < game.map.getPath()[this.pathI][1] ){
                        if(game.map.getPath()[this.pathI][1] - this.y < this.mspeed){
                            this.y += game.map.getPath()[this.pathI][1] - this.y;
                        }else{
                            this.y += this.mspeed;
                        }

                    }else if(this.x < game.map.getPath()[this.pathI][0] && this.y === game.map.getPath()[this.pathI][1]){
                        if(game.map.getPath()[this.pathI][0] - this.x < this.mspeed){
                            this.x += game.map.getPath()[this.pathI][0] - this.x;
                        }else{
                            this.x += this.mspeed;
                        }

                    }else if(this.x === game.map.getPath()[this.pathI][0] && this.y > game.map.getPath()[this.pathI][1]){
                        if(this.y - game.map.getPath()[this.pathI][1] < this.mspeed){
                            this.y -= (this.y - game.map.getPath()[this.pathI][1]);
                        }else{
                            this.y -= this.mspeed;
                        }

                    }else if(this.x > game.map.getPath()[this.pathI][0] && this.y === game.map.getPath()[this.pathI][1]){

                        if(this.x - game.map.getPath()[this.pathI][0] < this.mspeed){
                            this.x -= this.x - game.map.getPath()[this.pathI][0];
                        }
                        this.x -= this.mspeed;

                    }
                }else{
                    this.pathI = 0;
                    this.x = game.map.getPath()[0][0];
                    this.y = game.map.getPath()[0][1] - 20;
                }
            }
        }else{
            this.pathI = 0;
            this.x = game.map.getPath()[0][0];
            this.y = game.map.getPath()[0][1] - 20;
        }
    }

    this.die = function() {
        game.incProperty('money', this.award);
        delete enemies[this.id];
    }
}
