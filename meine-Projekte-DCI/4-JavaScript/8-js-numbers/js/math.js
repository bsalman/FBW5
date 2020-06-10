let num1 =2.4
let roundet = Math.round(num1)
console.log(roundet)
console.log(typeof(roundet))


console.log(Math.PI)
let num2 =Math.sqrt(9)
console.log(num2)

console.log(Math.random())
console.log(Math.floor(Math.random()*10))
console.log(Math.round(Math.random()*2))

function luckyNum (num){
   let num1= Math.round(Math.random()*num)
    switch(num1){
        case 0 :
            return "Hi"
            break;
        case 1 :
            return "go"
            break;
        case 2 :
            return "and"
            break;
        case 3 :
            return "your"
            break;

        case 4 :
            return "self"
            break;
         case 5 :
            return "fuck"
            break;
        default:
            return "fuck off"
            break;

     }
    }
console.log(luckyNum (6))
