let arr = [2,-2,6,3,4]
let arr2 =[]
for (let item = 0; item < arr.length; item++) {
  // arr2[arr2.length]= arr[item] *2
  // arr2.push(arr[item] *2)
  arr2[item]= arr[item] *2

    
}
document.write(arr2+'<br>')
document.write('///////////////////////\\\\\\\\\\\\\\\\\\\<br>');
let array = [1,-2,6,37,1]
let arr3 =[]
array.forEach(num=>{
  arr3.push(num*2)
})

document.write(arr3+'<br>')
document.write('///////////////////////es6- method map \\\\\\\\\\\\\\\\\\\<br>');
let newArr2 = arr.map(item =>{return item *3})
document.write(newArr2 + '<br>')
document.write('///////////////////////es6- method filter \\\\\\\\\\\\\\\\\\\<br>');
// let arr6=[]
// arr.forEach(item => {if (item>0){
//     arr6.push(item)
// }})

// document.write(newArr6 + '<br>')


let newArr3 = arr.filter( item => {return item > 0 && item < 4})
document.write(newArr3 + '<br>');
