
let returner= function (par) {
    document.write(par)
}
    funWithDelay(returner,5) 
function funWithDelay(result,num){
    setTimeout(()=>{
        result (num * 2) 
    },1000)
}


