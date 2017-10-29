function Turret(posx, posy) {
    this.x = posx*50;
    this.y = posy*50+50;
    this.cx = this.x+25;
    this.cy = this.y+25;
    this.posx = posx;
    this.posy = posy;

    this.cannonAngle = 0;
    this.focus = 'nearest';
    this.range = 150;

    this.update = function() {
        this.aimCannon();

        this.draw();
    }

    this.draw = function() {
        fill(51);
        stroke(100);
        strokeWeight(3);
        ellipse(this.cx, this.cy, 30);

        stroke(0);
        strokeWeight(6);
        translate(this.cx, this.cy);
        rotate( this.cannonAngle );
        line(-18, 0, 0, 0);
        translate(-this.cx, -this.cy);

        noFill();
        stroke(255);
        strokeWeight(1);
        ellipse(this.cx, this.cy, this.range);
    }

    this.aimCannon = function() {
        let aim = this.getAim();

        let xabs = aim[0] - this.cx;
        let yabs = aim[1] - this.cy;

        let angel = atan(yabs/xabs);
        if( mouseX >= this.cx ) {
            angel -= radians(180);
        }
        this.cannonAngle = angel;
    }

    this.getAim = function() {
        let aim = [];
        let minDist = -1;

        enemies.forEach(function(en) {
            let distance = dist(this.cx, this.cy, en.x, en.y);
            if( distance > this.range ) return; // Out of range

            if( minDist > distance ) {
                minDist = distance;
                aim[0] = en.x;
                aim[1] = en.y;
            }
        });

        return aim;
    }
}
