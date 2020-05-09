class Ship {
    
    constructor(hull, firepower, accuracy, name) 
    {
        this.hull = hull; // -20,5
        this.firepower = firepower;// -5
        this.accuracy = accuracy;// - .7
        this.name = name;
    }

    check(){
        console.log()
    }

    attack(ship) {
        console.log(this.name + 'attacking ship ->' + ship.name);
        let randomvalue = Math.random();
        if (randomvalue < ship.accuracy) {
            console.log(this.name + "attacked succesfully " + ship.name);
            //reduce hull
            ship.hull = ship.hull - ship.firepower;
            if (ship.hull <= 0) {
                console.log(" destroyed " + ship.name);
                allaliens.pop(ship);
            }
        }
    }
}

// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8
// Math.floor(Math.random() * (max - min + 1) + min);

 USS = new Ship(20, 5, 0.7, "USS");

 alien1 = new Ship(Math.floor(Math.random() * (6 - 3 + 1) + 3),
    Math.floor(Math.random() * (4 - 2 + 1) + 2),
    Math.floor(Math.random() * (0.8 - 0.6 + 1) + 0.6), "alien1");

 alien2 = new Ship(Math.floor(Math.random() * (6 - 3 + 1) + 3),
    Math.floor(Math.random() * (4 - 2 + 1) + 2),
    Math.floor(Math.random() * (0.8 - 0.6 + 1) + 0.6), "alien2");

 alien3 = new Ship(Math.floor(Math.random() * (6 - 3 + 1) + 3),
    Math.floor(Math.random() * (4 - 2 + 1) + 2),
    Math.floor(Math.random() * (0.8 - 0.6 + 1) + 0.6), "alien3");

 alien4 = new Ship(Math.floor(Math.random() * (6 - 3 + 1) + 3),
    Math.floor(Math.random() * (4 - 2 + 1) + 2),
    Math.floor(Math.random() * (0.8 - 0.6 + 1) + 0.6), "alien4");

let alien5 = new Ship(Math.floor(Math.random() * (6 - 3 + 1) + 3),
    Math.floor(Math.random() * (4 - 2 + 1) + 2),
    Math.floor(Math.random() * (0.8 - 0.6 + 1) + 0.6), "alien5");

let alien6 = new Ship(Math.floor(Math.random() * (6 - 3 + 1) + 3),
    Math.floor(Math.random() * (4 - 2 + 1) + 2),
    Math.floor(Math.random() * (0.8 - 0.6 + 1) + 0.6), "alien6");

let allaliens = [alien1, alien2, alien3, alien4, alien5, alien6];

while (allaliens.length > 0) {
    for (let i = 0; i < allaliens.length; i++) {
        USS.attack(allaliens[i]);
    }
    console.log(" allaliens.length ");
}








