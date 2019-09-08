class Enemy {
	constructor(game, options) {
		this.game = game;

	    this.id = options.id;
	    this.award = options.award;
	    this.x = this.game.gameMap.path[0][0];
	    this.y = this.game.gameMap.path[0][1] - 20 - options.space;

	    this.maxHealth = options.health;
	    this.health = this.maxHealth;

	    this.type = "ground";
	    this.mspeed = 1;

	    this.pathI = 0;
	    this.pathIM = this.game.gameMap.path.length;
	}

	update() {
        this.movement();
        // this.hit();

        if( this.health <= 0 ){
            this.die();
            return;
        }
    }

    takeDamage(damage) {
        this.health -= damage;
        if(this.health <= 0){
          this.die();
        }
    }

    movement(){
        if(this.pathI !== this.pathIM){
            if(this.x === this.game.gameMap.path[this.pathI][0] && this.y < this.game.gameMap.path[this.pathI][1] ){
                if(this.game.gameMap.path[this.pathI][1] - this.y < this.mspeed){
                    this.y += this.game.gameMap.path[this.pathI][1] - this.y;
                }else{
                    this.y += this.mspeed;
                }

            }else if(this.x < this.game.gameMap.path[this.pathI][0] && this.y === this.game.gameMap.path[this.pathI][1]){
                if(this.game.gameMap.path[this.pathI][0] - this.x < this.mspeed){
                    this.x += this.game.gameMap.path[this.pathI][0] - this.x;
                }else{
                    this.x += this.mspeed;
                }

            }else if(this.x === this.game.gameMap.path[this.pathI][0] && this.y > this.game.gameMap.path[this.pathI][1]){
                if(this.y - this.game.gameMap.path[this.pathI][1] < this.mspeed){
                    this.y -= (this.y - this.game.gameMap.path[this.pathI][1]);
                }else{
                    this.y -= this.mspeed;
                }

            }else if(this.x > this.game.gameMap.path[this.pathI][0] && this.y === this.game.gameMap.path[this.pathI][1]){

                if(this.x - this.game.gameMap.path[this.pathI][0] < this.mspeed){
                    this.x -= this.x - this.game.gameMap.path[this.pathI][0];
                }
                this.x -= this.mspeed;

            }else{

                this.pathI++;

                if(this.pathI !== this.pathIM){
                    if(this.x === this.game.gameMap.path[this.pathI][0] && this.y < this.game.gameMap.path[this.pathI][1] ){
                        if(this.game.gameMap.path[this.pathI][1] - this.y < this.mspeed){
                            this.y += this.game.gameMap.path[this.pathI][1] - this.y;
                        }else{
                            this.y += this.mspeed;
                        }

                    }else if(this.x < this.game.gameMap.path[this.pathI][0] && this.y === this.game.gameMap.path[this.pathI][1]){
                        if(this.game.gameMap.path[this.pathI][0] - this.x < this.mspeed){
                            this.x += this.game.gameMap.path[this.pathI][0] - this.x;
                        }else{
                            this.x += this.mspeed;
                        }

                    }else if(this.x === this.game.gameMap.path[this.pathI][0] && this.y > this.game.gameMap.path[this.pathI][1]){
                        if(this.y - this.game.gameMap.path[this.pathI][1] < this.mspeed){
                            this.y -= (this.y - this.game.gameMap.path[this.pathI][1]);
                        }else{
                            this.y -= this.mspeed;
                        }

                    }else if(this.x > this.game.gameMap.path[this.pathI][0] && this.y === this.game.gameMap.path[this.pathI][1]){

                        if(this.x - this.game.gameMap.path[this.pathI][0] < this.mspeed){
                            this.x -= this.x - this.game.gameMap.path[this.pathI][0];
                        }
                        this.x -= this.mspeed;

                    }
                }else{
                    this.pathI = 0;
                    this.x = this.game.gameMap.path[0][0];
                    this.y = this.game.gameMap.path[0][1] - 20;
                }
            }
        }else{
            this.pathI = 0;
            this.x = this.game.gameMap.path[0][0];
            this.y = this.game.gameMap.path[0][1] - 20;
        }
    }

    die() {
        // this.game.incProperty('money', this.award);
        delete this.game._entities.enemies[this.id];
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
	get getMaxHealth() {
		return this.maxHealth;
	}
	get getHealth() {
		return this.health;
	}
}

export default Enemy;
