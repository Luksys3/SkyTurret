function Turret(posx, posy) {
    this.x = posx*50;
    this.y = posy*50+50;
    this.posx = posx;
    this.posy = posy;

    this.update = function() {
        this.draw();
    }

    this.draw = function() {
        fill(51);
        stroke(100);
        strokeWeight(3);
        ellipse(this.x+25, this.y+25, 30);
    }
}
