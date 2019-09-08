import Bullet from './Bullet.js';

class BulletFactory {
	constructor(game) {
		this.game = game;
		this._nextId = 0;
	}

	create(x, y, enemyId) {
		return new Bullet(this.game, this._nextId++, x, y, enemyId);
	}
}

export default BulletFactory;
