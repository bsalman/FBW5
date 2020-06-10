let study2Hours = true


let ahmadPromis = new Promise((resolve,reject)=>{
    if(studty2Hours){
        resolve('you will be developers')
    }else {
        reject('I dont know,maybe yes or not')
    }
})
ahmadPromis.then(message =>{
    console.log(message)
}).catch(errorMessage=>{
    console.log(errorMessage)
})