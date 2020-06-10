window.onload =()=>{


    let container= document.querySelector('#container')// to conect our div thro  document .queerySelector 
    let titleElm = document.createElement('h3')
    titleElm.id = "header1"// to creat id
    titleElm.innerText='FBW5'
    container.append(titleElm)





    let articleElm =document.createElement('p')
    articleElm.classList.add('par1')// to create classes
    articleElm.innerText='Dont worry ,be happy'//to add some inner text
    container.append(articleElm)// to add the innertext to the  end of elment articleElm



let span1= document.createElement('span')
span1.innerHTML=",<br>Iam span1"
articleElm.append(span1);


// how creating element  by copy the elements and switch them form text to THML 

let htmlText= '<div id="container"><h3 id="header1">FBW5</h3><p class="par1">Dont worry ,be happy<span>,<br>Iam span1</span></p></div>';
let  container2 = document.querySelector('#container2')
for (let i = 0; i < 100; i++) {
    
    container2.innerHTML +=htmlText
}
}