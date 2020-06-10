let grade = 65
let stop1Year = true

let ahmadPromise = new Promise((resolve, reject)=>{
    if(grade >= 60){
        resolve('you will be a software engineer')
    } else {
        reject('you will be a software engineer assistant')
    }
})

let ahmadPromise1 = new Promise((resolve, reject)=>{
if(stop1Year){
    resolve(true)
} else{
    reject(false)
}
})


// ahmadPromise.then(message => {
    
//     ahmadPromise1.then(() =>{
//         console.log('you stoped one year so you are an assistant now')
//     }).catch(()=>{
//         console.log(message)
//     })
// }).catch(errorMessage =>{
    
//     ahmadPromise1.then(()=>{
//         console.log('you stoped one year so you need to study again')
//     }).catch(()=>{
//         console.log(errorMessage)
//     })
// // })

async function  checkWorker() {
    let message = await ahmadPromise
    let isStop = await ahmadPromise1
    console.log(message)
    console.log(isStop)
  }
  checkWorker()



