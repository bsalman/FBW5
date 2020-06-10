window.onload = function(){
    
    let ball = document.querySelector('#container>div')
    let x= 0
    let y = 0
    // document.onkeydown = function(e){
    //     console.log(e);
    //     if(e.key == 'ArrowUp'){
    //         top -=10
    //     }
    //     if(e.key == 'ArrowDown'){
    //         top +=10
    //     }
    //     if(e.key == 'ArrowRight'){
    //         left +=10
    //     }
    //     if(e.key == 'ArrowLeft'){
    //         left -=10
    //     }
    //     
        
    // } 

    document.onmousemove = (e=>{
        console.log(e);
       if (true) {
           x= e.clientX-25
           y= e.clientY-25
       }
        ball.style.top = y+'px'
        ball.style.left = x+'px'
    } )
}