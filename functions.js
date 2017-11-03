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
    enemies[id] = new Enemy(options);
}

function newTurret(options) {
    if( money < 30 ) return;
    money -= 30;

    let id = makeid();
    options.id = id;
    turrets[id] = new Turret(options);

    takenPos.push(options.x +'-'+ options.y);
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 9; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
