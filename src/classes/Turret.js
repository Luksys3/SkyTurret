class Turret {
	constructor(game, options) {
		this.game = game;

	    this.cannonLen = 18;

	    this.id = options.id;
	    this.x = options.x;
	    this.y = options.y;
		this.posx = this.x / 50;
		this.posy = this.y / 50 - 50;
	    this.cx = this.x + 25;
	    this.cy = this.y + 25;

	    this.focusType = '';
	    this.focus = -1;
	    this.range = 150 + 10;

	    this.shootDelay = 50;
	    this.shootDelayCounter = this.shootDelay;

	    this.aim = null;

	    this.enemiesInRange = [];
	}

	update() {
        this.getEnemiesInRange();

        this.calAim();
        this.findFocus();

        if( this.shootDelayCounter >= this.shootDelay && this.focus != -1 ){
            this.shoot();
            this.shootDelayCounter = 0;
        }
        this.shootDelayCounter++;
    }

    calAim() {
        if( this.focus == -1 )
			return;

        if( typeof(this.game.enemies[this.focus]) == 'undefined' )
			return;

        this.aim = [this.game.enemies[this.focus].x, this.game.enemies[this.focus].y];
    }

    getEnemiesInRange() {
        this.enemiesInRange = [];
        for( let key in this.game.enemies ){
            let en = this.game.enemies[key];

            let distance = this.game.p.dist(this.cx, this.cy, en.x, en.y);
            if( distance > this.range )
				continue; // Out of range

            // Add to enemiesInRange
            this.enemiesInRange.push(key);
        };
    }

    findFocus() {
        if( typeof(this.enemiesInRange[0]) == 'undefined' ){
            this.focus = -1;
            return;
        }

        if( this.focusType == '' ) {
            this.focus = this.enemiesInRange[0];
        }
    }

    shoot() {
        if( this.focus == -1 )
			return;

        this.game.spawn.bullet(this.cx, this.cy, this.focus);
    }

	get getId() {
		return this.id;
	}
	get getX() {
		return this.x;
	}
	get getY() {
		return this.y;
	}
	get getAim() {
		return this.aim;
	}
}

export default Turret;
