window.onload =() =>{


let div = document.querySelector('#someDiv');
div.style.backgroundColor='red';
// increase div heigth infinty
// hight= 1
// setInterval(()=>{
//   div.style.height=hight+'px'
// hight++
// },10)

let i = 50
let direction = true
setInterval(() => {
    if (direction) {
        i++
        
    }else{
        i--
    }

    if (i==100) {
        direction = false
    }
    if (i==50) {
        direction = true
    }
     div.style.height=i+'px'
},10);
}