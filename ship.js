class Ship {
    costructor(hull,firepower,accuracy,name){
        this.hull = hull; // -20,5
        this.firepower = firepower;// -5
        this.accuracy = accuracy;// - .7
        this.name = name;


    }
    attack(ship) {
        console.log(this.name+ 'attacking ship ->' +ship.name);
        let randomvalue = Math.random();
        if(randomvalue < ship.accuracy) {
        console.log(this.name+ "attacked succesfully "+ship.name);
        //reduce hull
         ship.hull = ship.hull - ship.firepower;
         if(ship.hull <= 0){
             console.log(" destroyed " +ship.name);

    }
        }

        


    }
}
// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8
// Math.floor(Math.random() * (max - min + 1) + min);

USS = new Ship(20,5,0.7,"USS");

alien1 = new Ship()

let allaliens = [alien1,alien2,alien3,alien4,alien5,alien6];

