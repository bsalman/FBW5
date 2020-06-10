window.onload =()=>{
    // getJoke()
    getjokeaSznc()
let jokBtn = document.querySelector('#jokBtn')
jokBtn.addEventListener('click',function () {
    // getJoke()

    getjokeaSznc()
})





}
 async function  getjokeaSznc() {
    let  jockImg =document.querySelector('#jokImg')
    let jokId= document.querySelector('#jokId')
    let jokPar= document.querySelector('#jokPar')
    let data = await fetch('https://api.chucknorris.io/jokes/random')
    if (data.status==200){
        let jokObj = await data.json()
        console.log(jokObj);
        jockImg.src =jokObj.icon_url
        jokId.innerText= jokObj.id
        jokPar.innerText = jokObj.value
        
    } else {
        jokPar.innerText ='error with getting data '
    }
}



//'https://api.chucknorris.io/jokes/random'
function getJoke() {
  let  jockImg =document.querySelector('#jokImg')
  let jokId= document.querySelector('#jokId')
  let jokPar= document.querySelector('#jokPar')

    let url ='https://api.chucknorris.io/jokes/random'
    fetch(url).then(data =>{
if(data.status==200){
    data.json().then(jokObj=>{
        console.log(jokObj);
        jockImg.src =jokObj.icon_url
        jokId.innerText= jokObj.id
        jokPar.innerText = jokObj.value
        
    }).catch(error =>{
        console.log(error)
    })
}


    })
}