class Ship {
    costructor(hull,firepower,accuracy,name){
        this.hull = hull; // -20,5
        this.firepower = firepower;// 
        this.accuracy = accuracy;// 
        this.name = name;


    }
    attack() {

    }
}
// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8
// Math.floor(Math.random() * (max - min + 1) + min);