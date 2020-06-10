// let fruits = ['Banana','appel','wassermelone',]

// // for (let i = 0; i < fruits.length; i++) {
// //     document.write(fruits[i]+'<br>')
    
// // }

// // fruits.forEach(function(blafruits){document.write(blafruits+'<br>')})
// // fruits.reverse().forEach(function(blafruits){document.write(blafruits+'<br>')})

// let check = false
//   fruits.forEach((blaFruit) =>{
//       if (blaFruit.lastIndexOf('wasser') !=-1){check =true}
//   })
// // document.write(check+'<br>')

// let ourArray =[1,5,5,6,1,1,5,7,8,-1]
// function counterForEch(arr,num) {
//     let stor = 0
//     arr.forEach(item =>{
//         if(item==num){
//             stor++
//         }

//     })
//     return stor
// }

// document.write(counterForEch(ourArray,5)+'<br>');


// function counterFor(arr,num) {
//     let stor =0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==num){
//             stor++
//         }
        
//     }
//     return stor
// }
// document.write(counterFor(ourArray,1)+'<br>');



// let arr1 = ['Aahmad','tim','safa','shirin','wael','Alen','Abdu','hamoud','felix','neda','manish']
// // function searchLetter(arr,letter){
// //     let stor = 0
// //     arr.forEach(item=> {
// //        
// //         if (item.search(letter)!= -1) {
// //             stor++
// //         }
// //     } )
// //     return stor
// // }
// // document.write(searchLetter(arr1,'a')  + '<br>')

// document.write('<br>/////////Second Method/////////<br>')
// function characterFinder(arr,letter){
//     let stor = 0
//     arr.forEach(item=> {
//         if ((item.search(letter.toUpperCase())!= -1) || (item.search(letter.toLowerCase())!= -1)){
//             stor++
//         }
//     } )
//     return stor
// }
// document.write(characterFinder(arr1,'a')  + '<br>')

let arr2 = ['Aahmad','tim','safa','shirin','wael','Alen','Abdu','hamoud','felix','neda','manish']


function zieler (arr,letter){
    let zeiger = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(letter)!=-1) { 
            zeiger++
            
        }
        
        
    }
    return zeiger
}
document.write(zieler(arr2,'s')+'<br>')

let arr3 = ['Aahmad','tim','safa','shirin','wael','Alen','Abdu','hamoud','felix','neda','manish']
 function name(arra,name) {
     let stor= false
     arra.forEach(item => { if (item ==name) {
         stor = true
         
     }
         
     });
     return stor
     
 }
 document.write(name(arr3,'Abdu'))