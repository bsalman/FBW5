//task 5
let c=3
let y = c
y =7
console.log(c);
console.log(y);
// it  will print 3 then 7
///////////////////////////////////
//task 6
// let obj = {
//     prop1: 2,
//     prop2 :'dumme',
//     prop3: true

// }
// obj.prop2 ='hello';
// console.log(obj.prop1);
// console.log(obj.prop2
//     );
// it will print 2 then hello
///////////////////////////////////////
//task 7
// let obj = {
//     prop1: 2,
//     prop2 :'dumme',
//     prop3: true

// }
// let obj2 = obj
// obj2.prop1=6
// console.log(obj2.prop1);
// console.log(obj.prop1);

//it will print 6 then 6
/////////////////////////////////////////////////
//task 8

let arr =[2,6,7,9,2,6,-9]
let arr1=[]
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>= 6 ){
     arr1.push(arr[i])
    }   
}
 console.log(arr1);
 //or
 let result =arr.filter(element=>element >=6);
 console.log(result);
 /////////////////////////////////////////////////////
 //task 9
 let arr2=[]
 arr.forEach(element => {
     element= element*2
     arr2.push(element)
 });
 console.log(arr2);
 //or
 let newArr = arr.map(item=>item*2)
 console.log(newArr);
 ////////////////////////////////////////////////////
 //task10,
  let newResult = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>= 6 ){
        newResult.push(arr[i]*2)
    }   
}
console.log(newResult);
//or
let newar= arr.filter(item => item>= 6).map(item =>item*2)
console.log(newar);
//task 11




 
 
