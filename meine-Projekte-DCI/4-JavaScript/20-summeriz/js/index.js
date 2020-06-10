function removeDupel(array) {
   
    let storege= []
    array.forEach(item => {
        if(storege.indexOf(item)==-1) {
            storege.push(item)
        }
        
    });
    
     return storege   
    }
    


let arr = [-5, 6, 0, 6, 12, 3, 3]
console.log(removeDupel(arr))


let array1=[-5,1,0,10]
let array2=[1,6,7,0,0]


//  function checkEqual (arr1,arr2) {
//       if (arr1.length == arr2.length ){
          
      
//      for (let item1 = 0; item1 < arr1.length; item1++) {
//          for (let item2 = 0; item2 < arr2.length; item2++) {

            
//              if (arr1[item1] !== arr2[item2] ) {
//                  return false 
//              }
            
             
//          }
         
//          return true
//      }
     
//     }
//      return false 
//  }

//   console.log (checkEqual(array1,array2) )

//another  method 
 function checkEqual1(arr1,arr2) {
    if (arr1.length == arr2.length ){
        for (let index = 0; index < arr1.length; index++) {
                if (arr1[index] !== arr2[index] ) {
                    return false 
                }
                  
        }
        return true
       }
        return false 
 }
 document.write (checkEqual1(array1,array2))

 // neu Übung
 

 function findShare(arr1,arr2) {
     
         let storge = []
    
for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
       
         if (arr1[i]== arr2[x] && storge.indexOf(arr1[i]) == -1){
             
    storge.push(arr1[i])
   }
    
    }
  
} return storge

 }
     
 
 console.log(findShare(array1,array2))

 // Ändere

 let array3=[-5,1,0,10,2]
 let array4=[1,6,7,0,0,2]
function findShare1(ar1,ar2) {
    let result =[]
    ar1.forEach(item => {
         if(ar2.indexOf(item) > -1 && result.indexOf(item) == -1){
             result.push(item)
            }
        
    })
    return result

}
console.log (findShare1(array3,array4))