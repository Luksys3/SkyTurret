function Turret(posx, posy) {
    this.cannonLen = 18;

    this.x = posx*50;
    this.y = posy*50+50;
    this.cx = this.x+25;
    this.cy = this.y+25;
    this.posx = posx;
    this.posy = posy;

    this.focus = 'nearest';
    this.range = 150 + 10;

    this.aim = changeLineLen(this.cx, this.cy, this.cx-1, this.cy, this.cannonLen);

    this.update = function() {
        this.calAim();

        this.draw();
    }

    this.draw = function() {
        fill(51);
        stroke(100);
        strokeWeight(3);
        ellipse(this.cx, this.cy, 30);

        noFill();
        stroke(255);
        strokeWeight(1);
        ellipse(this.cx, this.cy, this.range*2);

        stroke(0);
        strokeWeight(6);

        line(this.cx, this.cy, this.aim[0], this.aim[1]);
    }

    this.calAim = function() {
        let aim = [];
        let minDist = -1;

        enemies.forEach( (en) => {
            let distance = dist(this.cx, this.cy, en.x, en.y);
            if( distance > this.range ) return; // Out of range

            if( minDist > distance || minDist == -1 ) {
                minDist = distance;
                aim[0] = en.x;
                aim[1] = en.y;
            }
        });

        if( !aim.length ) return;
        this.aim = changeLineLen(this.cx, this.cy, aim[0], aim[1], this.cannonLen);
    }
}
