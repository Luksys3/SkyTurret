function Enemy(space) {
    this.x = path[0][0];
    this.y = path[0][1] - 20 - space;

    this.damage = 4;

    this.healthMax = 20;
    this.healthCurrent = this.healthMax;

    this.type = "ground";
    this.mspeed = 4;

    this.pathI = 0;
    this.pathIM = path.length;

    this.update = function() {

        this.move();
        this.hit();
        this.draw();
    }

    this.hit = function(){
      if( dist(this.x, this.y, b.x, b.y) < 5 && this.healthCurrent > 0){
        this.healthCurrent -= this.damage;
      }
    }

    this.draw = function() {

        fill(20);
        strokeWeight(0);
        ellipse(this.x, this.y, 16);

        fill(255, 0, 0);
        strokeWeight(0);
        rect(this.x - 6, this.y - 16, 14, 3);

        fill(0, 255, 0);
        strokeWeight(0);
        rect(this.x - 6, this.y - 16, map(this.healthCurrent, 0, this.healthMax, 0, 14 ), 3);
    }

    this.move = function(){
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
}
