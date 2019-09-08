import Draw from './Draw.js';

class Graphics {
	constructor(game) {
		this.game = game;
		this.draw = new Draw(this.game.p);

		this.game.p.createCanvas(850, 700);
	}

	update() {
		this.game.p.background(51);

		this._map();

		this._grid();

		this._path();

		this._entities();

	    this._bars();

	    // this.game.placement.update();
	}

	_bars() {
	    this.game.p.strokeWeight(0);

	    // - Top bar
	    this.game.p.fill(51);
	    this.game.p.rect(0, 0, 850, 50);

	    this.game.p.fill(255);
	    this.game.p.textSize(20);
	    this.game.p.text("Score: "+ this.game.score, 20, 32);
	    this.game.p.text("Wave: "+ this.game.wave.num, 220, 32);
	    this.game.p.text("Money: "+ this.game.money, 420, 32);

	    // - Right bar
	    this.game.p.fill(51);
	    this.game.p.rect(650, 50, 850, 700);
		this.game.p.fill(255);
	    this.game.p.textSize(20);
	    this.game.p.text("Ground", 680, 100);
	    this.game.p.text("Air", 680, 250);

	    // Next wave button
	    this.game.p.rect(660, 305, 180, 80);
	    this.game.p.fill(51);
	    this.game.p.rect(670, 315, 160, 60);
	    this.game.p.fill(255);
	    this.game.p.text("Next Wave", 700, 350);
	}

	_map() {
	    this.game.p.strokeWeight(0);
	    this.game.p.fill(0, 150, 0);
	    this.game.p.rect(0, 50, 650, 700);
	}

	_path() {
	    this.game.p.stroke(153, 77, 0);
	    this.game.p.strokeWeight(50);
	    this.game.p.noFill();

	    this.game.p.beginShape();
	    this.game.gameMap.path.forEach((c) => {
	        this.game.p.vertex(c[0], c[1]);
	    });
	    this.game.p.endShape();
	    this.game.p.strokeWeight(0);
	}

	_grid() {
	    this.game.p.stroke(255);
	    this.game.p.strokeWeight(1.2);
	    for (let i = 50; i < 650; i += 50) {
	        this.game.p.line(i, 50, i, 700);
	        this.game.p.line(0, 50 + i, 650, 50 + i);
	    }
	    this.game.p.strokeWeight(0);
	}

	_entities() {
		for (let id in this.game.bullets) {
			this.draw.bullet({
				x: this.game.bullets[id].getX,
				y: this.game.bullets[id].getY
			});
		}

		for (let id in this.game.enemies) {
			this.draw.enemy({
				x: this.game.enemies[id].getX,
				y: this.game.enemies[id].getY,
				health: this.game.enemies[id].getHealth,
				maxHealth: this.game.enemies[id].getMaxHealth
			});
		}

		for (let id in this.game.turrets) {
			this.draw.turret({
				x: this.game.turrets[id].getX,
				y: this.game.turrets[id].getY,
				aimTo: this.game.turrets[id].getAim
			});
		}
	}
}

export default Graphics;
