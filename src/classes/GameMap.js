class GameMap {
	constructor() {

	}

	get path() {
		return this._path;
	}
}

GameMap.prototype._path = [
    [50*2-25, 50],
    [50*2-25, 50*4-25],
    [50*12-25, 50*4-25],
    [50*12-25, 50*12-25],
    [50*7-25, 50*12-25],
    [50*7-25, 50*8-25],
    [50*2-25, 50*8-25],
    [50*2-25, 50*15-25],
];

export default GameMap;