window.onload = function () {
    const btn =document.querySelector('#btn1')
    btn.addEventListener('click',function(e){
        console.log(e);
        
    })
    let container = document.querySelector('#container')
    container.onclick = function (e){
        console.log(e);
        
     console.log(e.screenX,e.screenY);
     console.log(e.clientX,e.clientY);
     
     //add scrollevent 
     container.addEventListener('scroll', e =>{
         console.log(e);
         console.log(e.target.scrollTop);
         if (e.target.scrollTop>400) {
             e.target.style.color='red'
         }else{
             e.target.style.color ='black'
            
         }
         if (e.target.scrollTop >16){
            e.target.style.fontSize =e.target.scrollTop+'px'
         }
         
         
     })
        

    }
    
}