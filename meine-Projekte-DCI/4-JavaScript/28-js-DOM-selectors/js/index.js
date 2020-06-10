window.onload = ()=>{
   let elements= document.getElementsByClassName('card-head')
   console.log(elements.length);
   let h3 =document.getElementsByTagName('h3')
   console.log(h3);
   //query selcter 
   let elm = document.querySelector(".cardcontent")
   console.log(elm);
   let elms= document.querySelectorAll("contact-container li")
   console.log(elms);
   let eelm = $('.social a')
    console.log(eelm)
}

function $(textSelector) {
    return document.querySelectorAll(textSelector)
    
}
