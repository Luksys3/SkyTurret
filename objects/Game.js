function Game() {

	this.entities = {
		turrets: {},
		enemies: {},
		bullets: {}
	}

	this.properties = {
		money: 60,
		score: 0
	};

	this.init = function () {
		this.wave = new Wave();
		this.placement = new Placement();
		this.graphics = new Graphics();
		this.map = new Map();


		createCanvas(850, 700);
	}

	this.update = function () {



	}


	this.getProperty = function (key) {
		if (typeof (this.properties[key]) === "undefined")
			return null;

		return this.properties[key];
	}
	this.getEntities = function (group) {
		if (typeof group === "undefined")
			return this.entities;

		if (typeof (this.entities[group]) === "undefined")
			return null;

		return this.entities[group];
	}

	this.addEntity = function (group, id, obj) {
		this.entities[group][id] = obj;
	}
	this.incProperty = function (key, value) {
		if (typeof (this.properties[key]) === "undefined")
			return false;

		this.properties[key] += value;
		return true;
	}
	this.decProperty = function (key, value) {
		if (typeof (this.properties[key]) === "undefined")
			return false;

		this.properties[key] -= value;
		return true;
	}

}
