window.onload =()=>{
let test = document.querySelector('#test')
test.addEventListener('focusout',function (e) {
    console.log(e);
    alert('you are out')
    
})


}