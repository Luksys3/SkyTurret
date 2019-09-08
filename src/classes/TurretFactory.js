import Turret from './Turret.js';

class TurretFactory {
	constructor(game) {
		this.game = game;
		this._nextId = 0;
	}

	create(x, y) {
		return new Turret(this.game, {
			id: this._nextId++,
			x: x,
			y: y
		});
	}
}

export default TurretFactory;
