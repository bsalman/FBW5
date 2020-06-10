// let getPromis = fetch('/data.json') 
// getPromis.then(response=>{
//     if (response.status ==200){let jsonPromise= response.json()
//         jsonPromise.then(data =>{
//             console.log(data)
//         }).catch(error=>{
//             console.log(error)
//         })} else{
//             console.log(error)
//         }
//     // console.log(response.json())
    
// }).catch(error =>{
//     console.log(error)
// })



//get data using promise call//
// let getData = fetch('/data.json')
// console.log(getData)
// console.log('hi')
// getData.then(response=>{
//     if (response.status ==200) {
//         let dataPromise =response.json()
//         dataPromise.then(data=>{
//             console.log(data)
//         }).catch(error=>{console.log(error)})
        
//     }
//     else{
//         console.log('there are errors in getting data')
//     }
// }).catch(error =>{
//     console.log(error)
// })

//get data using async-await//
async function getData() {
    let response = await fetch('/data.json')
    let data = await response.json()
    console.log(data)
}
getData()



