
//how to make the property unchangeable
class Auto {
    // private property which only accessible inside the class
    //1 add # and write any name refer to the property which i need to protect
    #privateSeats
    
    constructor (seatsNum, maxSpeed, color) {
        //2 add # and what wy write as a property this property will be known just in this class
        this.#privateSeats = seatsNum;
        this.speed = maxSpeed;
        this.color = color;
    }
    // if some one try to change the value from #privateSeats like in line 32 he wil see this message(('hey you can not change seats for the Auto'))
    
    set seats(value){
         console.log('hey you can not change seats for the Auto');
       // this.#privateSeats = value;
    }
    get seats(){
        return this.#privateSeats 
    }
    showDescription() {
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed}`);
      }
      static showGenerlaDescription() {
          console.log('this is Auto so it has wheels and you can drive it');
      }
}

const newAuto = new Auto(4, 280, 'red');
// try to set a property
newAuto.seats = 6;
// try to get a property
console.log(newAuto.seats);

// get
// set