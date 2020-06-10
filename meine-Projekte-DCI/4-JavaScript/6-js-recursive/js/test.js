
let arrayitemsum = document.querySelector('#arrayitemsum')
   

let arr =[8,6,[4,9,6,[6,9,3,2]],3,2,14,7,8]
//to get the sum of the numbe inside thi array 
 arrayitemsum.innerText = arraydiscover(arr)
console.log(arraydiscover(arr));




function arraydiscover(array) {
    let storeg =0
 
    for (let i = 0; i < array.length; i++) {
       if (typeof array[i] == 'number') {
        storeg = storeg + array[i]
       }
       else{
           if (typeof  array[i] == 'object') {
            storeg = storeg+arraydiscover(array[i])
               
           }
           
       }
        
    }
    return storeg
    
    
}


