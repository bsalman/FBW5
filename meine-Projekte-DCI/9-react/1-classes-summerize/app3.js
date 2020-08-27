const arr = [5, 6, 1, 9, 12];

const arr2 = [...arr];
arr[0] = 1;
//console.log(arr2);

class Auto {
    constructor (seatsNum, maxSpeed, color) {
        this.seats = seatsNum;
        this.speed = maxSpeed;
        this.color = color;
    }
    showDescription() {
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed}`);
      }
      static showGenerlaDescription() {
          console.log('this is Auto so it has wheels and you can drive it');
      }
}

const newAuto = new Auto(4, 280, 'blue');
const anotherAuto = new Auto(6, 260, 'black');
// add new property
newAuto.doors = 2;
// override a  method in Auto Class
Auto.prototype.showDescription = function(){

    console.log(`I am a new Auto with ${this.speed} km/h speed and I am ${this.color}`);
}
// add new method to Auto class
Auto.prototype.newDescription = function () {
    console.log('this is a new method on Class Auto')
  }


 anotherAuto.newDescription()
anotherAuto.showDescription()

// add a new method to any string on Javascript
String.prototype.fbw5 = function () { 
    console.log('Hi We are fbw5');
 }
 String.prototype.replace = function(x, z){
     console.log('Replace not working anymore')
 }
 
 "I am a string".fbw5()
 "I am a string".replace('f', 'd')

