function Enemy(space) {
    this.x = path[0][0];
    this.y = path[0][1] - 20 - space;

    this.health = 100
    this.type = "ground";
    this.mspeed = 4;

    this.pathI = 0;
    this.pathIM = path.length;

    this.update = function() {

        this.move();
        this.draw();
    }

    this.draw = function() {
        fill(20);
        strokeWeight(0);
        ellipse(this.x, this.y, 16);
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
