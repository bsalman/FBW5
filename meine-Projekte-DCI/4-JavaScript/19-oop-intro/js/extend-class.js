class Rectangel {
    constructor(height,width){
        this.height = height
        this.width = width
        this.name = 'Rectangel'
    }
    // this is a Method to print the opject name Property
    sayName(){
        console.log('Hi,I am a '+ this.name)
    }
    // this is a Method to return the object Area
    get myArea () {
        return this.height* this.width
    }
    set myArea (value){
        this._realArea = value
    }

}
class Square extends Rectangel{
     constructor(length){ 
         super(length,length)
         this.name = 'Square'
     }
}

let myHome =new Rectangel(11,13)
myHome.sayName()
console.log(myHome.myArea)
document.write(JSON.stringify(myHome)+'<br>')

//change myHome dimension
myHome.height = 5
myHome.width = 10
console.log(myHome.myArea)

