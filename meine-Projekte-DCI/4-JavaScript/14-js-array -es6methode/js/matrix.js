let matrix =[
[3,5,6,9,7,11],
[1,61,22,9,85,12],
[2,-1,6,912,82,116],
[3,4,2,17,1,118]

]

//  for (let item = 0; item < matrix.length; item++)
//        {for (let item2 = 0; item2 < matrix[item].length; item2++) {
//                   document.write(matrix[item][item2]+'<br>')
    
// }
//  document.write('<br>')
    
// };
// document.write('<br>/////////Second Method/////////<br>')

// let matrix2 = [
//     [3,4,-4,41,52,6,22,4,55,11],
//     [4,22,89,74,74,63,85,4,55,11],
//     [9,-33,0,41,52,23,12,96,74,85],
//     [22,445,90,67,5,6,23,4,55,45],
//     [-5,4-66,89,56,5,6,34,4,55,56],
//     [32,66,78,7,5,6,22,4,55,78],
//     [99,-44,67,7,12,6,34,45,55,55],
//     [12,6,56,7,23,6,22,4,55,554]]

//     function printNewlin(arr) {
//         arr.forEach(item =>{
//              item.forEach(subItem =>{
//             document.write(subItem+'<br>')})})
        
//     }

//     printNewlin(matrix2)

    // document.write('<br>//////////////////<br>')

    let matrix2 = [
        [3,4,-4,41,52,6,22,4,55,11],
        [4,22,89,74,74,63,85,4,55,11],
        [9,-33,0,41,52,23,12,96,74,85],
        [22,445,90,67,5,6,23,4,55,45],
        [-5,4-66,89,56,5,6,34,4,55,56],
        [32,66,78,7,5,6,22,4,55,78],
        [99,-44,67,7,12,6,34,45,55,55],
        [12,6,56,7,23,6,22,4,55,54]]
    
        function printNewlin(arr) {
            let finalSum=0
            arr.forEach(item =>{
                let sum =0
                 item.forEach(subItem =>{
                sum=sum+subItem
            })
            document.write(sum+'<br>')
            finalSum=finalSum+sum
            })
            document.write(finalSum+'<br>')
                
            
        }
        // printNewlin(matrix2)
        // document.write('<br>//////matrix3 ////////////<br>')

        let matrix3 = [
            [3,4,-4,41,52,6,22,4,55,11],
            [4,22,89,74,74,63,85,4,55,11],
            [9,-33,0,41,52,23,12,96,74,85],
            [22,445,90,67,5,6,23,4,55,45],
            [-5,4-66,89,56,5,6,34,4,55,56],
            [32,66,78,7,5,6,22,4,55,78],
            [99,-44,67,7,12,6,34,45,55,55],
            [12,6,56,7,23,6,22,4,55,554]]


            function findeTheGretest(arr) {

                let theGretest = arr[0][0]
                arr.forEach(i=>{

                    
                    i.forEach(sI => {
                        if(sI> theGretest) {
                            theGretest= sI
                        }
                    })
                })
                return theGretest
            }

            // function findeTheGretest(arr) {

            //     let theGretest = 0
            //     arr.forEach(item=>{
                    
            //         item.forEach(subItem => {
            //             if(subItem > theGretest) {
            //                 theGretest=subItem
            //             }
            //         })
            //     })
            //     return theGretest
            // }
            // document.write(findeTheGretest(matrix3)+'<br>')
            let treeArray = ['ahmad',30,['omar', 5,['Ali',2,['fbw5',20,[]]]],['blabla',99,[]]]


            function arrayDiscover(arr) {
                arr.forEach((item)=> {
                    if (typeof(item) == 'string') {
                       
                        document.write(item+'<br>')
                    }
                    else {
                        if (typeof(item) == 'object') {
                            arrayDiscover(item)
                    }
                }
                
            })
        }
        
   
    arrayDiscover(treeArray)

