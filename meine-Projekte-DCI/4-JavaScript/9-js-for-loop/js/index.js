//for (let i=0;i<10; i++) {
   // console.log(i)}



let  storage=""
for(let i=0;i<=10;i++){
   storage = storage + i
   if(i!==10){
      storage=storage +","
   }
  
}

console.log(storage );
////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 10; i < 50; i+=2) {


  if(i%2==0){
     console.log(i+1)
  }
   
   
}

//////////////////////////////////////////////////////////////////////////////////////////////
//reverse loop
for (let i = 10; i >=0; i--) {
   console.log()
   
}
///////////////////////////////////////////////////////////////////////////////////////////////
let num = 0
for (let i = 10; i <= 20; i++) {
   num = num +i;
   
   
}
console.log(num);
//////////////////////////////////////////////////////////////////////////////////////////////
//document.write('Hallo world<br>and FBW5');
/////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 0; i <=10; i++) {
//      document.write(i+"<br>")
// }


///////////////////////////////////////////////////////////////////////////////////////////////


for (let i = 0; i <=10; i++) {
   document.write(i+"<br>")
   for (let x = 0; x <=10; x++)
   {if (x%2!==0){document.write(x)}
   
   }
   document.write("again<br>")
}

console.log("///////////////////////////////////////////////////////")
let oddnum = function(num){
   if(num%2!=0){
       return(num)
   }
};
// console.log (oddnum (7))
for (let i=10;i <=50;i++){
      if (oddnum(i)){
         console.log(i)
      }
}