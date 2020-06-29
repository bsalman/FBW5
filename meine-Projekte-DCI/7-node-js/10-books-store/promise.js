function getData() {
let x;
    const somePromise = new Promise((resolve, reject) => {
setTimeout(() => {
    try {
        x = "I am data" 
        resolve(x)
    } catch (error) {
        reject(error)
    }
        
    }, 2000)
    })
    return somePromise
}
// let result = getData()
// console.log(result);
// getData().then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })


// iffie function Self-Invoking Functions (it will be called it self)
// (async()=>{
//     let something =await getData() 
//     console.log(something)
// })()

async function normalFunction() {
    let somthing = await getData()
    console.log(somthing)
  }


  normalFunction()
