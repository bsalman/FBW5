let arr=[6,9,3,[10,50,[6,3,4,9],60],5,4]
// let storage = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i]=='object'){
//         for (let j = 0; j < arr[i].length; j++) {
//             if (typeof arr[i][j]=='object') {
//                 for (let k = 0; k < arr[i][j].length; k++) {
//                     storage +=arr[i][j][k]
                    
//                 }
                
//             }else{ storage +=arr[i][j]}
           
            
//         }

//     }else{
//         storage +=arr[i]
//     }
    
// }

function calculate(array) {
    let storage=0
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number'){
            storage += array[i]

        }
        else{ 
            if(typeof array[i] == 'object'){
            storage += calculate(array[i])
             }
           
        }
        
    }
  return storage  
}
console.log(calculate(arr))

function factor(array) {
    let storage=1
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number'){
            storage *= array[i]

        }
        else{ 
            if(typeof array[i] == 'object'){
            storage *= factor(array[i])
             }
           
        }
        
    }
  return storage  
}
console.log(factor(arr))


function calc(num) {

    stor=0
    if (num!==0) {
        stor = num+calc(num-1) 
        
    }

    return stor
}

console.log(calc(10))