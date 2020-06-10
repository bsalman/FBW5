window.onload = ()=>{

let input = document.querySelector('#someInput');


let i=0
setInterval(()=>{
    let txt='tipe your name'
    input.setAttribute('placeholder',txt.slice(0,i++))
    if (i==txt.length) {
        i=0
    }


},300)

// input.getAttribute('placeholder')
// input.setAttribute('placeholder ','new placeholder value')
// div.setAttribute('class','something')
// document.querySelector('#someInput').setAttribute('type','chexbox')





/////////////////////////////////////////////////////////////////

// ferst Solution
// let arr= input.getAttribute('placeholder').split('')
// let i = 0
// let sum=''
// setInterval(() => {
//     sum+=arr[i]
//     input.setAttribute('placeholder',sum)
//     i++

//     if (i == arr.lingth) {
//         i = 0
//         sum =''}
    
        
//     }, 10)

///////////////////////////////////////////////////////////////////
//the second Solution
////////////////////////////////////////////////////////////////
// let placeholder =input.getAttribute('placeholder')
// let counter=1
// setInterval(() => {
//     counter++
//     let txt=placeholder.substr(0,counter)
//     input.setAttribute('placeholder',txt)
//     if (counter==placeholder.length) {

//        counter=0 
//     }
    
// }, 300);




  
}

















