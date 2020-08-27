class Auto{
    //(seatsNum,maxTempo,color )are a parameter
    constructor(seatsNum,maxTempo,color){
        //this.seats;.... are property's inside the constructor taking them values from the parameter
        this.seats=seatsNum;
        this.speed=maxTempo;
        this.color=color;
    }
    // wheels is property to but we can change it from outside like line 24 car2.wheels=8
    wheels=4;
    //this function called method for class
    showDescription(){
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed} KMh and i can use any variable form outside the class like ${x}`);
    }
    //static : if you want to add som thing static to the class 
    static showGeneralDescription(){
        console.log('this car has wheels and you can drive it');
    }
}

let x='(iam a parameter x) '
let car1= new Auto(5,200,'red');
let car2=new Auto(8,280,'blue');

car2.wheels=8

// car2.showGeneralDescription()
console.log(car2);
//how to call the class's method
car1.showDescription();
// how to call the static function  to on of the object which this belong to the class
