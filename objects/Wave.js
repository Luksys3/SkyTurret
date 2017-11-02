function Wave() {
    this.wave = 0;
    this.health = 20;
    this.award = 10;
    this.amount = 5;

    this.next = function() {
        this.wave++;
        this.amount++;

        if( this.wave % 3 == 0 ) {
            this.health += 5;
        }

        let c = enemyIDCount;
        for(let i = 0; i < this.amount - 1; i++){
            newEnemy({
                space: i * 50,
                health: this.health,
                award: 10,
            });
        }
    }
}
