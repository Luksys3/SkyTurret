function Placement(){

  this.turretSelect = false;

  this.cX = -1;
  this.cY = -1;
  this.inRange = false;

  this.update = function(){
    //this.cursorFollow();
    if(this.turretSelect){
      this.getCursor();
    }
    this.draw();
  }

  this.draw = function(){
    fill(255);
    strokeWeight(0);
    rect(660, 500, 50, 50);
  }
  this.draw2 = function(){
      if( this.cX == -1 && this.cY == -1 ) return;
      drawTurret(this.cX, this.cY);
  }

  this.turretSelected = function(){
    if(this.turretSelect){
      this.turretSelect = false;
    }else{
      this.turretSelect = true;
    }
  }

 this.cursorFollow = function(){
    if(this.turretSelect){
      fill(255);
      strokeWeight(0);
      rect(mouseX+5, mouseY+5, 25, 25);
    }
  }

  this.getCursor = function(){
    if(this.cX != int(mouseX / 50) || this.cY != int((mouseY - 50) / 50)){
      this.cX = int(mouseX / 50);
      this.cY = int((mouseY - 50) / 50);
    }
    this.checkInRange();
    }

  this.checkInRange = function(){


    for(let i = 0; i < path.length - 1; i++){

      let p1x = int(path[i][0] / 50);
      let p1y = int((path[i][1] - 50) / 50);
      let p2x = int(path[i + 1][0] / 50);
      let p2y = int((path[i + 1][1] - 50) / 50);

      let shit;

      if(p1x > p2x){
        shit = p1x;
        p1x = p2x;
        p2x = shit;
      }else if(p1y > p2y){
        shit = p1y;
        p1y = p2y;
        p2y = shit;
      }

      if( (p1x <= this.cX && p2x >= this.cX && p1y <= this.cY && p2y >= this.cY) ||
         (this.cX < 0 || this.cY > 12 || this.cX > 12 || this.cY < 0)){
         this.inRange = false;
         return;
       }
    }
    this.inRange = true;
    if(this.inRange && !posTaken(this.cX, this.cY)){

      this.draw2();
    }
  }

}
