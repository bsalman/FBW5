function textAdd(num){
    if (num !== 0){
        
        return textAdd (num-1)+","+num
    }
    else{
        // if(num==0)
        return num
    }
}
let result = textAdd(7)
console.log(result)

console.log("//////////////////////////////////////////////////////////")
let arrowTextAdd = num =>{
    if(num==0){
        return num
    }
    else {
        return arrowTextAdd(num-1)+","+num
    }
}
console.log(arrowTextAdd(5))