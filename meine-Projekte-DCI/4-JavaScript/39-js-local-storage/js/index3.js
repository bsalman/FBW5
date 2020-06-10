window.onload = function(){
    let counterElement = document.querySelector('#counterElement')
    let storedCounter = localStorage.getItem('browsCount')
    if(storedCounter != null){
        // let counter = parseInt(storedCounter)
        // counterElement.innerText = counter
        // counter++
        // localStorage.setItem('browsCount', counter)

        // or with less lines
        counterElement.innerText = storedCounter
        localStorage.setItem('browsCount', parseInt(storedCounter)+1)
    } else{
        localStorage.setItem('browsCount', 1)
        counterElement.innerText = 0
    }
}