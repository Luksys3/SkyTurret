import b from './BUnit.js';

import Wave from './Wave.js';
import Placement from './Placement.js';
import Graphics from './Graphics.js';
import GameMap from './GameMap.js';
import Spawn from './Spawn.js';

class Game {
	constructor(p) {
		this.p = p;

		this.wave = new Wave();
		this.placement = new Placement(); // TODO: Create class
		this.graphics = new Graphics(this);
		this.gameMap = new GameMap();
		this.spawn = new Spawn(this);

		this.spawn.turret(b(2), b(5));
		this.spawn.turret(b(3), b(5));
		this.spawn.turret(b(5), b(5));
		this.spawn.turret(b(6), b(5));
		this.spawn.turret(b(8), b(5));
		this.spawn.turret(b(9), b(5));

		this.spawn.enemies(10);
	}

	update() {
		for (let id in this.enemies)
			this.enemies[id].update();

		for (let id in this.turrets)
			this.turrets[id].update();

		for (let id in this.bullets)
			this.bullets[id].update();

		this.graphics.update();
	}

	decProperty(property, value) {
		if (!this._properties.hasOwnProperty(property))
			throw new ReferenceError("Property is not defined.");

		this._properties[property] -= value;
	}

	addEntity(group, id, object) {
		if (!this._entities.hasOwnProperty(group))
			throw new ReferenceError("Group is not defined.");

		this._entities[group][id] = object;
	}

	get score() {
		return this._properties.score;
	}
	get money() {
		return this._properties.money;
	}
	get turrets() {
		return this._entities.turrets;
	}
	get enemies() {
		return this._entities.enemies;
	}
	get bullets() {
		return this._entities.bullets;
	}

	makeid() { // TEMP
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for (var i = 0; i < 9; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }

	    return text;
	}
}

Game.prototype._entities = {
	turrets: {},
	enemies: {},
	bullets: {}
};

Game.prototype._properties = {
	score: 0,
	money: 60
}

export default Game;
