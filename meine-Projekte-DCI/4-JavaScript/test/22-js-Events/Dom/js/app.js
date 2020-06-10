let htmlObj =document.getElementsByTagName('h1'); 
Array.from(htmlObj).forEach(element =>{console.log(element)})
// =>the first h1 tag
// console.log(typeof htmlObj)
// for (let i = 0; i < htmlObj.length; i++) {
//     console.log(typeof htmlObj)
    
// }

let obj ={
    t:'t',
    b:'b',
    ob:{
        ddd:5,
        st:[5,20,60,'somestring',{
            pr:true
        }]
    }
}
console.log(obj[0])
console.log(obj.ob.ddd)
console.log(obj.ob.st[3])
let firstH1=document.getElementsByTagName('h1')[0]
console.log(firstH1)
firstH1.innerHTML
console.log(firstH1.innerHTML)

firstH1.innerHTML='a new Value'//changing the content
let myName =document.getElementsByTagName('h1')[1]
myName.innerHTML='Bashar'
document.getElementsByTagName('h1')[2].innerText =[5,6,6,'kjk']
