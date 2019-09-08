class Wave {
	constructor() {
		this._waveNum = 0;
		this._health  = 20;
		this._award   = 10;
		this._amount  = 5;
	}

	next() {
		this._waveNum++;
		this._amount++;

		if (this._waveNum % 3 === 0)
			this._health += 5;

		for (let i = 0; i < this._amount - 1; i++) {
			newEnemy({
				space:  i * 50,
				health: this._health,
				award:  this._award
			});
		}
	}

	get num() {
		return this._waveNum;
	}
}

export default Wave;
