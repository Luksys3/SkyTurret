function Enemy(id, space) {
    this.x = path[0][0];
    this.y = path[0][1] - 20 - space;

    this.healthMax = 20;
    this.health = this.healthMax;

    this.type = "ground";
    this.mspeed = 4;

    this.pathI = 0;
    this.pathIM = path.length;

    this.update = function() {
        this.movement();
        // this.hit();

        if( this.health <= 0 ){
            this.die();
            return;
        }

        this.draw();
    }

    // this.hit = function(){
    //     for( let key in bullets ){
    //         if( typeof(bullets[key]) === 'undefined' ) continue;
    //         let bullet = bullets[key];
    //
    //         if( dist(this.x, this.y, bullet.x, bullet.y) < 5 && this.health > 0 ){
    //             console.log(dist(this.x, this.y, bullet.x, bullet.y));
    //             this.health -= this.damage;
    //         }
    //     };
    // }

    this.takeDamage = function(damage) {
        this.health -= damage;
    }

    this.draw = function() {

        fill(20);
        strokeWeight(0);
        ellipse(this.x, this.y, 16);

        fill(255, 0, 0);
        strokeWeight(0);
        rect(this.x - 7, this.y - 16, 14, 3);

        fill(0, 255, 0);
        strokeWeight(0);
        rect(this.x - 7, this.y - 16, map(this.health, 0, this.healthMax, 0, 14 ), 3);
    }

    this.movement = function(){
        if(this.pathI !== this.pathIM){
            if(this.x === path[this.pathI][0] && this.y < path[this.pathI][1] ){
                if(path[this.pathI][1] - this.y < this.mspeed){
                    this.y += path[this.pathI][1] - this.y;
                }else{
                    this.y += this.mspeed;
                }

            }else if(this.x < path[this.pathI][0] && this.y === path[this.pathI][1]){
                if(path[this.pathI][0] - this.x < this.mspeed){
                    this.x += path[this.pathI][0] - this.x;
                }else{
                    this.x += this.mspeed;
                }

            }else if(this.x === path[this.pathI][0] && this.y > path[this.pathI][1]){
                if(this.y - path[this.pathI][1] < this.mspeed){
                    this.y -= (this.y - path[this.pathI][1]);
                }else{
                    this.y -= this.mspeed;
                }

            }else if(this.x > path[this.pathI][0] && this.y === path[this.pathI][1]){

                if(this.x - path[this.pathI][0] < this.mspeed){
                    this.x -= this.x - path[this.pathI][0];
                }
                this.x -= this.mspeed;

            }else{

                this.pathI++;

                if(this.pathI !== this.pathIM){
                    if(this.x === path[this.pathI][0] && this.y < path[this.pathI][1] ){
                        if(path[this.pathI][1] - this.y < this.mspeed){
                            this.y += path[this.pathI][1] - this.y;
                        }else{
                            this.y += this.mspeed;
                        }

                    }else if(this.x < path[this.pathI][0] && this.y === path[this.pathI][1]){
                        if(path[this.pathI][0] - this.x < this.mspeed){
                            this.x += path[this.pathI][0] - this.x;
                        }else{
                            this.x += this.mspeed;
                        }

                    }else if(this.x === path[this.pathI][0] && this.y > path[this.pathI][1]){
                        if(this.y - path[this.pathI][1] < this.mspeed){
                            this.y -= (this.y - path[this.pathI][1]);
                        }else{
                            this.y -= this.mspeed;
                        }

                    }else if(this.x > path[this.pathI][0] && this.y === path[this.pathI][1]){

                        if(this.x - path[this.pathI][0] < this.mspeed){
                            this.x -= this.x - path[this.pathI][0];
                        }
                        this.x -= this.mspeed;

                    }
                }else{
                    this.pathI = 0;
                    this.x = path[0][0];
                    this.y = path[0][1] - 20;
                }
            }
        }else{
            this.pathI = 0;
            this.x = path[0][0];
            this.y = path[0][1] - 20;
        }
    }

    this.die = function() {
        delete enemies[id];
    }
}
