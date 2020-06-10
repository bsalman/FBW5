let fruits = ['Apple','banana','watermelon','grape','orange','cherry']

// let blaValue = fruits.find (fruit => fruit.indexOf('n') != -1)
// document.write(blaValue+'<br>')
// document.write(typeof blaValue)

let blaValue = fruits.filter (fruit => fruit.indexOf('a') == 2)
document.write(blaValue+'<br>')

document.write('//////////////////////////////////////////////////<br>')



for(let element of fruits){
    document.write(element+'<br>')
}
document.write('//////////////////////////////////////////////////<br>')



for(let index in fruits){
    document.write(index+':'+ fruits[index]+'<br>')
}