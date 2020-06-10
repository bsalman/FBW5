// function hobla(num) {
//     if(num !== 0){
//       console.log(hobla(num-1)) 
//     }
//       return num
// }
// hobla(5)


function factor(num){
  if(num!==1){
    return factor(num-1) * num
  }
  else{
    return 1
  }
}
console.log(factor(5))