function foo1() {
    return new Promise((resolve,reject)=>(
        setTimeout(()=>{
            resolve('foo1 is done')
        },1000)
    ))
    
}
function foo2() {
    return new Promise((resolve,reject)=>(
        setTimeout(()=>{
            resolve('foo2 is done')
        },2000)
    ))
    
}
function foo3() {
    return new Promise((resolve,reject)=>(
        setTimeout(()=>{
            resolve('foo3 is done')
        },3000)
    ))
    
}

// (async()=>{
//     const result =await foo1()
//     console.log(result1);
//     const result =await foo2()
//     console.log(result2);
//     const result =await foo3()
//     console.log(result3);
    
    
// })()
const promise1=foo1()
const promise2 =foo2()
Promise.all([promise1,promise2]).then(results=>{
    console.log(results);
    foo3().then()
    
})
