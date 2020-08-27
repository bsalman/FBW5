const arr =[5,6,1,9,12];
//sparid operator use to mak copy form the object or array
const arr2=[...arr]
arr[0]=1;
console.log(arr);
console.log(arr2);
//prototyping

class Auto{
    //seatsNum is a parameter
    constructor(seatsNum,maxTempo,color){
        //those are property's
        this.seats=seatsNum;
        this.speed=maxTempo;
        this.color=color;
    }
 
    //tis function called method for class
    showDescription(){
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed} KMh`);
    }
    static showGeneralDescription(){
        console.log('this car has wheels and you can drive it');
    }
}

const newAuto = new Auto(4,280,'blue');
const anotherAuto= new Auto(6,300,'red')
//add neu property or new method  to new object not to the main class in this case (Auto class)
newAuto.doors=2;

console.log(anotherAuto.doors);
// add a new method to newAuto
Auto.prototype.newDescription = function () {
    console.log('this is a new method on Class Auto')
  }



//============prototyping=================//
//overriding the method 
Auto.prototype.showDescription =function(){
    console.log(`I am a new Auto with ${this.speed} km/h speed and I am ${this.color}`);
}
anotherAuto.newDescription();
anotherAuto.showDescription()// it wil stay like is it 


//add anew method to any string on javascript
String.prototype.fbw5= function(){
    console.log('hi we are fbw5');
}
String.prototype.replace = function(x, z){
    console.log('Replace not working anymore')
}
"I am a string".fbw5()
 "I am a string".replace('f', 'd')

