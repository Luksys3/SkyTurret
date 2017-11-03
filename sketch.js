
let path = [
    [50*2-25, 50],
    [50*2-25, 50*4-25],
    [50*12-25, 50*4-25],
    [50*12-25, 50*12-25],
    [50*7-25, 50*12-25],
    [50*7-25, 50*8-25],
    [50*2-25, 50*8-25],
    [50*2-25, 50*15-25],
];

let turrets = {};
let bullets = {};
let enemies = {};
let takenPos = {};

let bulletIDCount = 0;
let enemyIDCount = 0;

let money = 60;

let wave = new Wave();
let placement = new Placement();

function setup() {
    createCanvas(850, 700);
}

function draw() {
    background(51);

    // Map
    strokeWeight(0);
    fill(0, 150, 0);
    rect(0, 50, 650, 700);

    // Draw grid
    stroke(255);
    strokeWeight(1.2);
    for(let i=50; i<650; i+=50) {
        line(i, 50, i, 700);
        line(0, 50+i, 650, 50+i);
    }
    strokeWeight(0);

    // Path
    stroke(153, 77, 0);
    strokeWeight(50);
    noFill();

    beginShape();
    path.forEach(function(c) {
        vertex(c[0], c[1]);
    });
    endShape();
    strokeWeight(0);

    // Update bullets
    for( let key in bullets ){
        if( typeof(bullets[key]) === 'undefined' ) continue;
        let bullet = bullets[key];
        bullet.update();
    };

    // Update enemies
    for( let key in enemies ){
        if( typeof(enemies[key]) === 'undefined' ) continue;
        let enemy = enemies[key];
        enemy.update();
    };

    // Update turrets
    for( let key in turrets ){
        if( typeof(turrets[key]) === 'undefined' ) continue;
        let turret = turrets[key];
        turret.update();
    };

    // Updates top and right bar
    updateBars();

    placement.update();
}

function mouseClicked() {
  if(mouseX > 670 && mouseX < 830 && mouseY > 315 && mouseY < 375){
      wave.next();
  }

  if(mouseX > 660 && mouseX < 710 && mouseY > 500 && mouseY < 550){
    placement.turretSelected();
  }

  if(placement.turretSelect && placement.cX != -1 && placement.cY != -1 && placement.inRange){
    newTurret({x: placement.cX, y: placement.cY});
  }
}

function updateBars() {
    strokeWeight(0);

    // - Top bar
    fill(51);
    rect(0, 0, 850, 50);

    fill(255);
    textSize(20);
    text("Score: 0", 20, 32);
    text("Wave: "+ wave.wave, 220, 32);
    text("Money: "+ money, 420, 32);

    // - Right bar
    fill(51);
    rect(650, 50, 850, 700);

    // Next wave
    fill(255);
    textSize(20);
    text("Ground", 680, 100);
    text("Air", 680, 250);
    rect(660, 305, 180, 80);
    fill(51);
    rect(670, 315, 160, 60);
    fill(255);
    text("Next Wave", 700, 350);
}
