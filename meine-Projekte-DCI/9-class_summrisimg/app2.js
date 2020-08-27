class Auto{
    //seatsNum is a parameter
    constructor(seatsNum,maxTempo,color){
        //those are property's
        this.seats=seatsNum;
        this.speed=maxTempo;
        this.color=color;
    }
    wheels=4;
    //tis function called method for class
    showDescription=function(){
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed} KMhand the color is ${this.color}`);
    }
    static showGeneralDescription(){
        console.log('this car has wheels and you can drive it');
    }
}
//inherited
//this is sup class (we use the same values from class auto(seatsNum, maxSpeed, color) with additional new values(weight, height))
//this called inheriting(توريث) we use  at first extends then super(seatsNum, maxSpeed, color) to inherit auto class to truck class
class Truck extends Auto{
    constructor(seatsNum, maxSpeed, color, weight, height) {
        // call the constructor of parent class
        super(seatsNum, maxSpeed, color);
        this.weight = weight;
        this.height = height;
    }
}

const someTruck = new Truck(2, 240, 'yellow', 7000, 3)
// console.log(someTruck);
// we can not copy object to a new object like the following
const anotherTruck = {...someTruck}
someTruck.speed = 260;
 //anotherTruck.showDescription()
 console.log(anotherTruck.speed);
//const name = new MyString('Ahmad');
// console.log(name.substr(0, 2));
// name.log()
let x = 5;
let c = x;
x = 9;
//console.log(c);
//=========================================//
//  String is an Standard built-in objects in javascript
class MyString extends String {
    constructor(value){
        super(value);
        this.value = value;
    }
    log = function(){
        console.log(this.value);
    }
}
const name = new MyString('Ahmad');
console.log(name.substr(0, 2));
name.log()

