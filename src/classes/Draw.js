import f from '../functions.js';

class Draw {
	constructor(p) {
		this.p = p;
	}

	turret(options) {
		_.defaults(options, { aimTo: null });
		if (!f.has(options, ['x', 'y']))
			throw new ReferenceError("Too few properties.");

	    let cannonLen = 18;
		let offset = 11, size = 10;

	    let cx = options.x + 25;
	    let cy = options.y + 25;

		let aimTo = [ cx + cannonLen, cy ];
		if (options.aimTo !== null)
			aimTo = f.changeLineLen(cx, cy, options.aimTo[0], options.aimTo[1], cannonLen);

		this.p.push();
	    this.p.fill(51);

	    this.p.strokeWeight(0);
	    this.p.ellipse(cx + offset, cy + offset, size);
	    this.p.ellipse(cx - offset, cy + offset, size);
	    this.p.ellipse(cx + offset, cy - offset, size);
	    this.p.ellipse(cx - offset, cy - offset, size);

	    this.p.stroke(100);
	    this.p.strokeWeight(3);
	    this.p.ellipse(cx, cy, 30);

	    // Range
	    // this.p.noFill();
	    // this.p.stroke(255);
	    // this.p.strokeWeight(1);
	    // this.p.ellipse(cx, cy, this.range*2);

	    // Cannon
	    this.p.stroke(0);
	    this.p.strokeWeight(6);
	    this.p.line(cx, cy, aimTo[0], aimTo[1]);
		this.p.pop();
	}

	enemy(options) {
		if (!f.has(options, ['x', 'y', 'maxHealth', 'health']))
			throw new ReferenceError("Too few properties.");

		this.p.push();
        this.p.fill(20);
        this.p.strokeWeight(0);
        this.p.ellipse(options.x, options.y, 16);
        if(options.health != options.maxHealth){
			this.healthBar({
				x: options.x,
				y: options.y - 16,
				health: options.health,
				maxHealth: options.maxHealth
			});
        }
		this.p.pop();
	}

	bullet(options) {
		if (!f.has(options, ['x', 'y']))
			throw new ReferenceError("Too few properties.");

		this.p.push();
		this.p.fill(0);
        this.p.strokeWeight(0);
        this.p.ellipse(options.x, options.y, 3);
		this.p.pop();
	}

	healthBar(options) {
		if (!f.has(options, ['x', 'y', 'maxHealth', 'health']))
			throw new ReferenceError("Too few properties.");

		let width = 14;

		this.p.push();
		this.p.fill(255, 0, 0);
		this.p.strokeWeight(0);
		this.p.rect(options.x - width / 2, options.y, width, 3);

		this.p.fill(0, 255, 0);
		this.p.strokeWeight(0);
		this.p.rect(options.x - width / 2, options.y, this.p.map(options.health, 0, options.maxHealth, 0, width), 3);
		this.p.pop();
	}
}

export default Draw;
