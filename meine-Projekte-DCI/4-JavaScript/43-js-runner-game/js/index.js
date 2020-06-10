window.onload= function () {
    let gameCanvas =document.querySelector('#gameCanvas')
    let context = gameCanvas.getContext('2d')
    let jumpScour= document.querySelector('span')
    //.moveTo(x amody, y ofoky) start punkte
    context.moveTo(0,100)
    //.lineTo(x,y) end punkte
    context.lineTo(600,100)
    //  die linie zu zeischnen
    context.stroke()
// Box zu zrichnen
    context.fillStyle = "black"
    // context.fillRect(580,80,20,20)
    // context.clearRect(580,80,20,20)

    // context.fillRect(560,80,20,20)
let boxCaunter=600
//     setInterval(() => {
//         context.clearRect(boxCaunter,80,20,20)
//         boxCaunter-=
//     }, 160);
let boxSpeed =100    

    let boxInterval =setInterval(() => {
           
        console.log(boxSpeed);
        
        context.clearRect(boxCaunter+20,80,20,20)
        context.fillRect(boxCaunter,80,20,20)
        if(boxCaunter==0 ){
            boxCaunter=600
            
        }else{
             boxCaunter-=20
            }
       

    }, boxSpeed);
// das Bild zu demseite zu hinzufüngen 
let img = document.createElement('img')
img.src = './imgs/player_big.png'

img.onload = function () {
// .drawImage(the foto name,position x,position y,the foto wigth,the foto hight)    
// context.drawImage(img,0,39,480,60)
// to show only the first player 
//drawImage(img Name ,von wilche x Punkte staten zu schneiden   ,von wilch y Punkte staten zu schneiden,foto width,foto hight, )
// context.drawImage(img,0,0,48,60,0,39,48,60)
//show the second part of foto
// context.clearRect(0, 39, 48, 60)
// context.drawImage(img,48,0,48,60,0,39,48,60)
// //show the therd part of foto
// context.clearRect(0, 39, 48, 60)
// context.drawImage(img,96,0,48,60,0,39,48,60)
// //show the forth part of foto
// context.clearRect(0, 39, 48, 60)
// context.drawImage(img,144,0,48,60,0,39,48,60)
//position of each charachter is (charachter index-1)*48
let jumpCaunter = 0
let caunter = 0
let characterInterval = setInterval( function () {
    context.clearRect(0, 39, 44, 60)
    context.clearRect(0, 0, 44, 60)

    if(status=="running"){
            
     context.drawImage(img,caunter,0,48,60,0,39,48,60)      
    }else{
        context.drawImage(img,caunter,0,48,60,0,0,48,60)
    }

    
     if (caunter==336){
        caunter=0
     }
     else{caunter+=48}
     
 if (boxCaunter<=20 &&status == "running")
 {
     console.log("crash");
     clearInterval(characterInterval)
     clearInterval(boxInterval)
     context.font = "30px Georgia"
     
     context.fillStyle="red"
    context.fillText("Game over", 200, 50)      



     
 }
 
 if (boxCaunter<=20 && status=="jumpping"){
    jumpCaunter = jumpCaunter+1
    console.log(jumpCaunter);
    jumpScour.innerText= "jumpScour:" +jumpCaunter


    
 }
}, 150);

}
//declare the status of the charachter
let status ="running"

window.onkeydown = function (e) {
    // console.log(e);
    if (e.key ==" "){
        // console.log("jump");
        status="jumpping"
        this.setTimeout(function () {
            status ="running"
        },500)
        
    }
    
}

}

 // increase box speed every success jump
  // students grade system get to grades from localstorage and save them in the studentsArr