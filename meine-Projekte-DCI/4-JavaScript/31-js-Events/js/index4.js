// window.onload = () => {


//     let container = document.querySelector('#container')
//     container.addEventListener('click', function (e) {
//         let ballDiv = document.createElement('div')
//         ballDiv.classList.add('ball')
//         // ballDiv.setAttribute('class','ball')
//         container.append(ballDiv)
//         ballDiv.style.left = (e.clientX - 5)+'px'
//         ballDiv.style.top = (e.clientY - 5) +'px'
//         let i = e.clientY
//         let direction = true
//         setInterval(() => {
    
//             if (direction) {
//                 i++
//             } else {
//                 i--
//             }
//             if (i == 490) {
//                 direction = false
//             }
//             if (i == 0) {
//                 direction = true
//             }
    
//             ballDiv.style.top =  i+'px'
//             // just try now
    
//         }, 10);
//         // alert(e.clientX+'&'+e.clientY)
//     })}
    

window.onload = ()=>{
    let container = document.querySelector('#container')
    container.addEventListener('click', function(e){
        let ballDiv = document.createElement('div')
        ballDiv.classList.add('ball')
        //ballDiv.setAttribute('class', 'ball')
        ballDiv.style.left = e.clientX -5  + 'px'
        ballDiv.style.top = e.clientY -5  + 'px'
        container.append(ballDiv)
        realThrowTheBall(ballDiv,e.clientY -5, e.clientX -5, 500, 10  )
        //alert(e.clientX + '  ' + e.clientY)

    })
}


function throwTheBall(ball, y, x, parentHight, ballHeight) {
    ball.style.left = x
    let down = true
    let counter = y
    setInterval(() => {
        ball.style.top = counter+ 'px';
        if(down){
            counter++;
        } else {
            counter--;
        }
        if(counter == parentHight - ballHeight){
            down = false
        }
        if(counter == 0){
            down = true
        }
    }, 1);
  }

  function realThrowTheBall(ball, y, x, parentHight, ballHeight) {
    // ball.style.left = x
    let down = true
    let counter = y
    let maxHeight = y
    let inerv = setInterval(() => {
        ball.style.top = counter+ 'px';
        if(down){
            counter++;
        } else {
            counter--;
        }
        if(counter == parentHight - ballHeight){
            down = false
            maxHeight += 20
        }
        if(counter == maxHeight ){
            down = true
        }
        if(parentHight - ballHeight < maxHeight || counter < maxHeight){
            clearInterval(inerv)
        }
    }, 1);
  }





















