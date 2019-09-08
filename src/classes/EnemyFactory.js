import _ from 'lodash';
import Enemy from './Enemy.js';

class EnemyFactory {
	constructor(game) {
		this.game = game;
		this._nextId = 0;

		this._defaults = {
			space:  0,
			health: 50,
			award:  20
		};
	}

	create(options = {}) {
		options.id = this._nextId++;
		return new Enemy(this.game, _.defaults(options, this._defaults));
	}
}

export default EnemyFactory;
