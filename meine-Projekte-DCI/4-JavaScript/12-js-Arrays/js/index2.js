// let arr = [2,4,1,9,5,7,6,3,2,7,1]

// for (let i = 0; i < arr1.length; i++) {
//     document.write(arr1[i]+'<br>')   
// }




// //show(arr)theSmallest
// let arr1 = [2,4,1,9,5,7,6,3,2,7,1]
//     let theSmallest = arr1[0]
//     for (let i = 1; i < arr1.length; i++) {
//          if (arr1[i] < theSmallest){
//             theSmallest=arr1[i]
//          }
        
//     }
  
// document.write(theSmallest);


//show(arr)theGreatest
// let arr2 = [2,4,1,9,5,7,6,3,2,7,1,25]
//     let thegratest = arr2[0]
//     for (let i = 1; i < arr2.length; i++) {
//          if (arr2[i] > thegratest){
//             thegratest=arr2[i]
//          }
        
//     }
  
// document.write(thegratest)

//show poth
let arr1 = [2,4,1,9,5,7,6,3,2,7,1]
let theSmallest = arr1[0]
let thegratest = arr1[0]
for (let i = 1; i < arr1.length; i++) {
              if (arr1[i] < theSmallest){
                 theSmallest=arr1[i]
              }
              if (arr1[i] > thegratest){
                           thegratest=arr1[i]
                     }
            }

            document.write( 'the Gratest number:'+ thegratest+' <br> ')
            document.write('the Smallest number:'+ theSmallest+'<b>');



document.write("///////////////////////////////////////////////////////////////////// <br>")

function average(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
       sum=sum +arr[i]
        
    }
return sum /arr.length
    
}
document.write(average(arr1))