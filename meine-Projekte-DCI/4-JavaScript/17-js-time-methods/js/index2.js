let i = 0

// while (i<10) {
//     console.log(i )
//     i++
// }
let blaInterval = setInterval(() => {
    document.write(i +'<br>')
    i++
    if (i == 10){
        clearInterval(blaInterval)
    }
}, 1000);

