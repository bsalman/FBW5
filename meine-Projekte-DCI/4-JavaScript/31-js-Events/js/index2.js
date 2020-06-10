window.onload =()=>{
     let btn =document.querySelector('#someBtn')
     //this is the ferst way to add event dyamicly
//     btn.addEventListener('click',function(event) {
//         console.log(event)
//         alert('hi')
        
//     }
//    )

   //second way to add event dyamicly
//    btn.onclick=function (){
//        alert('Hallo')
//    }

btn.onlick = function(e) {
    console.log(e);
    
    if (e.clientY>15){
        console.log('down')
    }else{
        console.log('up')
    }
}

let container=document.querySelector('#container')
let someInput=document.createElement('iput')

// someInput.type ='text'
someInput.setAttribute('type','text')
container.append(someInput)
someInput.addEventListener('keypress',function(e){
    console.log(e);
})

}