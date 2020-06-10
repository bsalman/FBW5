let arr = [1,3,8,2,4,6,7]
document.write(arr.toString()+'<br>')
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
document.write(arr.join('*')+'<br>') // change the (,) btwen the number to (*) or any thing 
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
arr[7] = 55 
arr[2]=4
document.write(arr.toString()+'<br>')
arr[arr.length] = 
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
document.write(arr.toString()+'<br>')//this fitscher just in javascript (item )
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
arr.push(66)
document.write(arr.toString()+'<br>')//pusch add new item to array
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
arr.pop()
document.write(arr.toString()+'<br>')//pop delet the last ilement (item) from array
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
arr.shift()
document.write(arr.toString()+'<br>')//shift remove item from the begining 
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
arr.unshift(100)
document.write(arr.toString()+'<br>')//unshift add new item to the begining of array 
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
delete arr[3]
document.write(arr.toString()+'<br>')// clear th item but not delet the position of item 
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
// arr.splice(3,0,5)
// document.write(arr.toString()+'<br>')
arr.splice(3,6,5)
document.write(arr.toString()+'<br>')
arr.splice(1,2,3,6,9)
document.write(arr.toString()+'<br>')
arr.splice(3,2,5,5,8,1,5)// man kann mehr alls ein item adderen 
document.write(arr.toString()+'<br>')

document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
let arr1 = [3,3,3,3,3,3,3,3,5]
let arr2 = arr1.concat(arr)
document.write(arr.toString()+'<br>')
document.write(arr1.toString()+'<br>')
document.write(arr2.toString()+'<br>')
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
document.write(arr.toString()+'<br>')
let arr4 =arr.slice(1,3)
document.write(arr4.toString()+'array4<br>')
document.write(arr.toString()+'<br>')
let arr5 =arr.slice(1)
document.write(arr5.toString()+'<br>')
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
let arr6 = ['g','c','fdfd',]
document.write(arr6.sort()+'<br>')// afabet sorting
arr.sort((a,b) =>{return a-b})//sort ASC
document.write(arr.toString()+'<br>')
arr.sort((a,b) =>{return b-a})//sort DSC
document.write(arr.toString()+'<br>')
document.write('////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>');
let arr8 =[2,9,3,-5,7,100,20]
document.write(arr8.sort()+'<br>')