function wh() {
    

let promise = new Promise((resolve,reject)=>{
    setTimeout(function(){
    resolve("Hello")
},1000)
})
return promise
}



wh().then(function(v){
    console.log(v)
    console.log("world")
})

