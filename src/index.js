import P5 from 'p5';
import Game from './classes/Game.js';

let game;

let sketch = function (p) {
	p.setup = function () {
		game = new Game(p);
	}

	p.draw = function () {
		game.update();
	}
}

new P5(sketch);
