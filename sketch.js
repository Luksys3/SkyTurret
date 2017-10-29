
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

    // Top bar
    fill(51);
    rect(0, 0, 850, 50);

    fill(255);
    textSize(20);
    text("Score:", 20, 32);
    text("Wave:", 220, 32);
    text("Money:", 420, 32);

    // Right bar
    fill(255);
    textSize(20);
    text("Ground", 680, 100);
    text("Air", 680, 250);

}
