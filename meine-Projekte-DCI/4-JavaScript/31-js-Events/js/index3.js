window.onload= ()=>{
let aLink =document.querySelector('#someLink')
aLink.addEventListener('click',function(e){
    e.preventDefault()
    console.log('hallo world ');
    
})

let mainDiv = document.querySelector('#mainDiv')
let subDiv = document.querySelector('#subDiv')
mainDiv.addEventListener('click',function(){
    console.log('hi Iam main div');
    

})

subDiv.addEventListener('click',function(e){
    e.stopPropagation()
    console.log('hi Iam sub div');
    

})


}