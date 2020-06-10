
let arr =[1,5,20,90,100,50,15,45,78]
let bigst= arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i]>bigst){
       arr[i]=bigst
    }
  console.log(bigst);  
}

