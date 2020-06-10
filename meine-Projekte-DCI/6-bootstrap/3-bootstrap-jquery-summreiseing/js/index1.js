window.onload= function () {
   let divtouch1=true
    let div1= document.querySelector('.container>div:nth-child(1)')
    let divtouch2=true
    let div2= document.querySelector('.container>div:nth-child(2)')

    div1.addEventListener("touchstart",(e)=>{
       
        divtouch1=false
        chicktouch(divtouch1,divtouch2)
    })
    div1.addEventListener("touchend",(e)=>{
       
        divtouch1=true   
    })
    div2.addEventListener("touchstart",(e)=>{
        divtouch2=false
        chicktouch(divtouch1,divtouch2)

    })
    div2.addEventListener("touchend",(e)=>{
        divtouch2=true  
    })
    function chicktouch() {
    if ((divtouch1==false)&&(divtouch2==false)) {
        alert("both are touched")
        divtouch1=true
        divtouch2=true
    
    }
}

   
   
   
    
    
}