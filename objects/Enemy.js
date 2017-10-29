function Enemy() {
    this.x = path[0][0];
    this.y = path[0][1] - 20;

    this.update = function() {
        this.draw();
    }

    this.draw = function() {
        fill(20);
        strokeWeight(0);
        ellipse(this.x, this.y, 16);
    }
}
