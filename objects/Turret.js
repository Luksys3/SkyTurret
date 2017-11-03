function Turret(options) {
    this.cannonLen = 18;

    this.posx = options.x;
    this.posy = options.y;
    this.x = this.posx * 50;
    this.y = this.posy * 50+50;
    this.cx = this.x+25;
    this.cy = this.y+25;

    this.focusType = '';
    this.focus = -1;
    this.range = 150 + 10;

    this.shootDelay = 60;
    this.shootDelayCounter = this.shootDelay;

    this.aim = [this.cx + this.cannonLen, this.cy];

    this.enemiesInRange = [];

    this.update = function() {
        this.getEnemiesInRange();

        this.calAim();
        this.findFocus();

        if( this.shootDelayCounter >= this.shootDelay && this.focus != -1 ){
            this.shoot();
            this.shootDelayCounter = 0;
        }
        this.shootDelayCounter++;

        this.draw();
    }

    this.draw = function() {
        drawTurret(this.posx, this.posy, this.aim);
    }

    this.calAim = function() {
        if( this.focus == -1 ) return;
        if( typeof(enemies[this.focus]) == 'undefined' ) return;

        let enx = enemies[this.focus].x;
        let eny = enemies[this.focus].y;

        this.aim = changeLineLen(this.cx, this.cy, enx, eny, this.cannonLen);
    }

    this.getEnemiesInRange = function() {
        this.enemiesInRange = [];
        for( let key in enemies ){
            let en = enemies[key];

            let distance = dist(this.cx, this.cy, en.x, en.y);
            if( distance > this.range ) continue; // Out of range

            // Add to enemiesInRange
            this.enemiesInRange.push(key);
        };
    }

    this.findFocus = function() {
        if( typeof(this.enemiesInRange[0]) == 'undefined' ){
            this.focus = -1;
            return;
        }

        if( this.focusType == '' ) {
            this.focus = this.enemiesInRange[0];
        }
    }

    this.shoot = function() {
        if( this.focus == -1 ) return;
        bullets[bulletIDCount] = new Bullet(bulletIDCount, this.cx, this.cy, this.focus);
        bulletIDCount++;
    }
}
