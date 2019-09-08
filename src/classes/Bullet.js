class Bullet {
	constructor(game, id, x, y, enemyId) {
		this.game = game;

		this.id = id;
	    this.x = x;
	    this.y = y;
		this.enemyId = enemyId;
	    this.dx = this.game.enemies[ this.enemyId ].x;
	    this.dy = this.game.enemies[ this.enemyId ].y;

	    this.damage = 5;
	    this.speed = 15;
	}

	update() {
        if(typeof (this.game.enemies[ this.enemyId ]) !== 'undefined') {
            this.dx = this.game.enemies[ this.enemyId ].x;
            this.dy = this.game.enemies[ this.enemyId ].y;
        } else
            this.die();

        this.movement();
        this.collision();
    }

    movement() {
        let x = this.x - this.dx;
        let y = this.y - this.dy;

        let angle = this.game.p.atan(y / x);
        if( this.x >= this.dx ) {
            angle -= this.game.p.radians(180);
        }

        let distance = this.game.p.dist(this.x, this.y, this.dx, this.dy);
        if( distance < this.speed ) {
          this.x = this.dx;
          this.y = this.dy;
          return;
        }

        this.x += this.speed * this.game.p.cos(angle);
        this.y += this.speed * this.game.p.sin(angle);

    }

    collision() {
        if( this.game.p.dist(this.x, this.y, this.dx, this.dy) < 16 ){
            if(typeof (this.game.enemies[this.enemyId]) !== 'undefined')
                this.game.enemies[this.enemyId].takeDamage( this.damage );

            this.die();
        }
    }

    die() {
        delete this.game._entities.bullets[this.id];
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
}

export default Bullet;
