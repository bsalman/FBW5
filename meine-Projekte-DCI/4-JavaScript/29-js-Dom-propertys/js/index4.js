window.onload =()=>{
let div =document.querySelector('#someDive')
    // div.style.heidht ='50px'
    // div.style.backgroundColor='red'
    // div.style.borderRadius='10px 0 10px 0'
    div.classList.add('mystyle')
    div.classList.add('mystyle1')
    div.classList.remove('mystyle1')
    div.classList.remove('mystyle')
    let father = div.parentElement
    father.style.bordrs='1px soled black'

let exist =true
let x=0
  let setInt =  setInterval(() => {
        x++
if (exist ) {
     div.classList.add('mystyle')
     exist= false
}
else{
    div.classList.remove('mystyle')
    exist= true
}
// if ( x%2!=0) {
//     exist=false
    
// }else{
//     exist=true
// }
       //div.classlist.toggle.('mystyle')
        
    }, 1000);












}