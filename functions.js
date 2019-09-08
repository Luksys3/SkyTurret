function rotate_point(x, y, cx, cy, angle)
{
    let x1 = sqrt(x*x + y*y) * sin( radians( angle + degrees( atan(x/y) ) ) );
    let y2 = sqrt(x*x + y*y) * sin( radians(90 - angle - degrees( atan(x/y) )) );

    return [x1, y2];
}

function changeLineLen(x1, y1, x2, y2, radius) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let length = sqrt(dx * dx + dy * dy);

    if (length > 0) {
        dx /= length;
        dy /= length;
    }

    dx *= radius;
    dy *= radius;

    let x3 = x1 + dx;
    let y3 = y1 + dy;

    return [x3, y3];
}

function newEnemy(options) {
    let id = makeid();
    options.id = id;
    game.addEntity('enemies', id, new Enemy(options));
}

function newTurret(options) {
    if( game.getProperty('money') < 30 )
		return;

    game.decProperty('money', 30);

    let id = makeid();
    options.id = id;
    game.addEntity('turrets', id, new Turret(options));

    let key = options.x +'_'+ options.y;
    takenPos[key] = 'turret'; // TODO: add to class Map setTaken(), isTaken(). Maybe change the names
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 9; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

// Return boolean if object has property
function hasOwnProperty(obj, prop) {
    var proto = obj.__proto__ || obj.constructor.prototype;
    return (prop in obj) &&
        (!(prop in proto) || proto[prop] !== obj[prop]);
}

// Uses global takenPos = {}
function posTaken(x, y) {
    return typeof (takenPos[x +'_'+ y]) === "undefined" ? false : true;
}

function drawTurret(x, y, aim = '') {
    let cannonLen = 18;
    let cx = x * 50 + 25;
    let cy = y * 50 + 25 + 50;

    if(aim === '') aim = [cx + cannonLen, cy];

    // Turret
    fill(51);

    strokeWeight(0);
    let offset = 11, size = 10;
    ellipse(cx + offset, cy + offset, size);
    ellipse(cx - offset, cy + offset, size);
    ellipse(cx + offset, cy - offset, size);
    ellipse(cx - offset, cy - offset, size);

    stroke(100);
    strokeWeight(3);
    ellipse(cx, cy, 30);

    // Range
    // noFill();
    // stroke(255);
    // strokeWeight(1);
    // ellipse(this.cx, this.cy, this.range*2);

    // Cannon
    stroke(0);
    strokeWeight(6);
    line(cx, cy, aim[0], aim[1]);
}
