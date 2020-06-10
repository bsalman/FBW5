function print(num,txt) {
    for (let i = 0;  i< num; i++) {
       document.write(txt+'<br>')   
    }
}
print (3,"hello");

document.write('//////////////////////////////////////<br>')


;


function factor(num) {  
          if(num<0){ return 'notvalid' }
       let storage = 1
       for (let i = 1; i <= num; i++) {
           storage = storage*i 
        //    document.write(num+'x'+i+'='+storage+'<br>'  )
           
        }
    return storage 
}
 document.write(  factor(4)+'<br>');
document.write('//////////////////////////////////////<br>');


// function Factors (num1,num2){
//     let arr = []
//        if (num2>num1){ 
           
//            for (let x = num1; x <= num2; x++) {
//            let storage = 1
//                for (let i = 1; i <= x; i++) {
//                     storage = storage*i
//                        }
//                        arr.push(storage)
//           }
          
//         }
//         else {
         
//                for (let x = num2; x <= num1; x--) {
//                    let storage1 = 1
//                     for (let i = 1; i <= x; i++) {
//                         storage1 = storage1*i
//                           }
//                           arr.push(storage)
//         }
          
//         }
//         return arr
// }

// document.write(Factors(10,15)  )




// document.write('//////////////////////////////////////<br>');

function factors(num1,num2) { if (num1<num2){
    for (let i = num1; i <= num2; i++) {
        document.write(i+ "!=" + factor(i)+'<br>')
        
        
    }}

    else {
        for (let i = num1; i <= num2; i--) {
           
            document.write(i+ "!=" +factor(i)+'<br>')
        }
    }


    
}
factors(5,10)


