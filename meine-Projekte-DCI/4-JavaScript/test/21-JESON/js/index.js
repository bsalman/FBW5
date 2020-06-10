let img =document.querySelector('#img')
let joke =document.querySelector('#joke')
let jokeId = document.querySelector('#jokeId')
let button = document.querySelector('#button')
button.addEventListener('click',function(e){

let xhr = new XMLHttpRequest()
xhr.open('GET','https://api.chucknorris.io/jokes/random')
xhr.send()
xhr.onload = function(){
    if (xhr.status ==200){
        let Jokes= JSON.parse(xhr.response)
       
        img.src =Jokes.icon_url
        joke.value = Jokes.value
        jokeId.value = Jokes.id
    }
    else{
        alert('errer')
    }
} 
    
});


