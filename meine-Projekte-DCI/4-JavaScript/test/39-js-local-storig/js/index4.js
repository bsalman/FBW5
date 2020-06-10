window.onload = function () {
    let nameIput=document.querySelector('#name')
     
    let nameStorage=localStorage.getItem('name')
    if(nameStorage!=null){
        nameIput.value= 
    }
    
    let berthInput =document.querySelector('#bearthDay')
    let berthStorage=localStorage.getItem('berth')
    if(berthStorage!=null){
        berthInput.value=
    }
    
    let textArea=document.querySelector('#textArea')
let area=localStorage.getItem('abotyou')
    let saveBtn= document.querySelector('#saveBtn')
   
    name(newName,newbearth,newAboutMe)  

}
function name(newName,newbearth,newAboutMe) {
    saveBtn.addEventListener('click',function (e) {
    
        newName=  localStorage.setItem('name',nameIput.value)

         newbearth= localStorage.setItem('berth',berthInput.value)

     newAboutMe= localStorage.setItem('abotyou',textArea.innerText)
  })
}