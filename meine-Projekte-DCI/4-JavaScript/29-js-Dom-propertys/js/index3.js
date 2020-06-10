window.onload=()=>{

let div = document.querySelector('#ball')


let i = 0

let direction = true
let x = 0
setInterval(() => {
    if (x<=180) {
        x+=10
        return x
      
    }      
    
},1000);



let topChenger = setInterval(() => {
  
  
    if (direction) {
        i++

        
    }else{
        i-- 
        
    }

    if (i==180 ) {
        direction = false
        
    }
    
    if (i==x  ) {
        direction = true
    }
  if (x==180) {
      clearInterval(topChenger)
  }
    

     div.style.top=i+'px'
},10);




















}