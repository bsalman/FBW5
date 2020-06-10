// let someText ='FBW5@gdgdg.dd'
// let regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
// let testResult =regex.test(someText)
// console.log(testResult);



let someText ='1a A1'
let regex = new RegExp(/^\d[a-z]\s[A-Z]\d/)
let testResult =regex.test(someText)
console.log(testResult);


let someNeuText ='bsalman395850@gmail.de' 
let regrxx= new RegExp( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
let result =regrxx.test(someNeuText)
console.log(result);


window.onload=()=>{
let regex1 = new RegExp(/\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/)

 let regex3 =new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)
let input =document.querySelector('#input')

let button = document.querySelector('#btn')
    button.innerText= 'check'

    button.addEventListener('click',function (e) {
let testResult1 =regex1.test(input.value)
    if (testResult1==true){
        input.classList.add('valed')
        input.classList.remove('inValed')
    }else {
        input.classList.add('inValed')
        input.classList.remove('valed')
    }
    let input2 =document.querySelector('#input2')
    let result2=regex3.test(input2.value)
    if(result2==true){
        input2.classList.add('ja')
        input2.classList.remove('nein')
    }else{
        input2.classList.add('nein')
        input2.classList.remove('ja')
    }
})











}



