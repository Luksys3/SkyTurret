
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

let turrets = [];
let enemies = {};
let bullets = {};

let enemyIDCount = 0;

let waveNr = 0;
let enemyType = 0;
let enemyCount = 5;
let enemyHealth = 0;

function setup() {
    createCanvas(850, 700);

    turrets.push( new Turret(5, 4) );
    turrets.push( new Turret(8, 8) );

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

    // Top bar
    fill(51);
    rect(0, 0, 850, 50);

    fill(255);
    textSize(20);
    text("Score: 0", 20, 32);
    text("Wave: 0", 220, 32);
    text("Money: 0", 420, 32);

    // Right bar
    fill(255);
    textSize(20);
    text("Ground", 680, 100);
    text("Air", 680, 250);
    rect(660, 305, 180, 80);
    fill(51);
    rect(670, 315, 160, 60);
    fill(255);
    text("Next Wave", 700, 350);

    // Update enemies
    for( let key in enemies ){
        if( typeof(enemies[key]) === 'undefined' ) continue;
        let enemy = enemies[key];
        enemy.update();
    };

    // Update turrets
    turrets.forEach(function(turret) {
        turret.update();
    });

    // Update bullets
    for( let key in bullets ){
        if( typeof(bullets[key]) === 'undefined' ) continue;
        let bullet = bullets[key];
        bullet.update();
    };
}

function mouseClicked() {
  if(mouseX > 670 && mouseX < 830 && mouseY > 315 && mouseY < 375){
    Wave();
  }

}

function Wave(){

  console.log("Vyksta");
    waveNr++;
    //this.enemyType = random;
    enemyCount += 1;
    enemyHealth += 10;

    let c = enemyIDCount;
    for(let i = c; i < c+enemyCount; i++){
      enemies[i] = new Enemy(i, 40*i);
      console.log("add");
      enemyIDCount++;
    }


}
