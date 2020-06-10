
// let somPromise = new promise ((resolve,reject)=>{if(true)
//     {
//         resolve('Iam done')
//     }else{
//         reject('there is an error')
        
//     }})

//     somPromise.then((value)=>{console.log()}).catch((value)=>{console.log(value)})
function produkte() {
    let somPromise =new Promise((resolve,reject)=>{
      let xhr = new XMLHttpRequest();
       xhr.open('GET','/data.json');
       xhr.send();
       xhr.onload= function (){
           if(xhr.status==200){
            resolve( xhr.response)
           }
           else{
            reject('connection problem')
           }
       }
    })
   return  somPromise;
}

produkte().then(resutIfTrue=>{
    console.log(resutIfTrue)
}).catch(error =>{
    console.log(error)
})