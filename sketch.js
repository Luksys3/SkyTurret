
function setup() {
    createCanvas(850, 700);
}

function draw() {
    background(51);

    // Map
    strokeWeight(0);
    fill(0, 150, 0);
    rect(0, 50, 650, 700);

    // Top bar
    fill(255);
    textSize(20);
    text("Score:", 20, 32);
    text("Wave:", 220, 32);
    text("Money:", 420, 32);

    // Top bar
    fill(255);
    textSize(20);
    text("Ground", 680, 100);
    text("Air", 680, 250);
}
