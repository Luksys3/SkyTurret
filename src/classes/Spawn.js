import EnemyFactory from './EnemyFactory.js';
import TurretFactory from './TurretFactory.js';
import BulletFactory from './BulletFactory.js';

class Spawn {
	constructor(game) {
		this.game = game;

		this.enemyFactory  = new EnemyFactory(this.game);
		this.turretFactory = new TurretFactory(this.game);
		this.bulletFactory = new BulletFactory(this.game);
	}

	enemy(options) {
		let object = this.enemyFactory.create(options);
		this.game.addEntity('enemies', object.getId, object);
	}

	enemies(amount, options = {}, spaceSize = 50) {
		for (let i = 0; i < amount; i++)
			this.enemy(_.defaults(_.cloneDeep(options), { space: spaceSize * i }));
	}

	turret(x, y) {
		let object = this.turretFactory.create(x, y);
		this.game.addEntity('turrets', object.getId, object);
	}

	bullet(x, y, enemyId) {
		let object = this.bulletFactory.create(x, y, enemyId);
		this.game.addEntity('bullets', object.getId, object);
	}
}

export default Spawn;
