let takenPos = {};

let bulletIDCount = 0;
let enemyIDCount = 0;

let game = new Game();

function setup() {
	game.init();
}

function draw() {
	game.update();
	game.graphics.update();
}

function mouseClicked() {
	if(mouseX > 670 && mouseX < 830 && mouseY > 315 && mouseY < 375){
		game.wave.next();
	}

	if(mouseX > 660 && mouseX < 710 && mouseY > 500 && mouseY < 550){
		game.placement.turretSelected();
	}

	if(game.placement.turretSelect && game.placement.cX != -1 && game.placement.cY != -1 && game.placement.inRange && !posTaken(game.placement.cX, game.placement.cY)){
		newTurret({x: game.placement.cX, y: game.placement.cY});
		game.placement.turretSelect = false;
	}
}
