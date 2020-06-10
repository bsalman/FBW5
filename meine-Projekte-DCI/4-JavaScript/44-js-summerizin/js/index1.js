window.onload= function () {

    let btn1 =document.querySelector('#btn1')
     btn1.onclick= function (e) {
         alert('Hello')
         
     }
/////////////////////////////////////////////////////
let contaiiner =document.querySelector('#contaiiner')
let btn2=document.querySelector('#btn2')
 btn2.addEventListener('click',function (e) {
     
     let div1=document.createElement('div')
     div1.id='square'
     div1.style.width='100px'
     div1.style.height='100px'
     div1.style.background= 'red'
     contaiiner.append(div1)



     
 })


    
}