window.onload=function () {
//declartion of  toDoInput using qurey selector
    let toDoInput=document.querySelector('#toDoInput')
//declering todoAddBtn
    let todoAddBtn =document.querySelector('#todoAddBtn')
//  declering  todoList 
    let todoList =document.querySelector('#todoList')
 //add Eventlistener ti  todoAddBtn  
 let todoArr=[]
    todoAddBtn.addEventListener('click',function (e) {
let todoValue =toDoInput.value
        if (todoValue.trim()!=''){
let todoli=document.createElement('li')
    todoli.innerText=todoValue
let donBtn=document.createElement('button')
    donBtn.classList.add('don')
    donBtn.innerText='don'
    todoli.append(donBtn)

      todoList.append(todoli)
      
      todoArr.push(todoValue)
      let todoArrayJson= JSON.stringify(todoArr)
      localStorage.setItem('todolist',todoArrayJson)

      

      
        }else{
            alert('todo value is empty,please enter a todo value')
        }
      //clear toDoInput after insert the value 
      toDoInput.value=''  
    })
    //render todo list array from  localstorage 
    let newArr= JSON.parse( localStorage.getItem('todolist'))
    newArr.forEach(element => {
        todoArr.push(element)
    let todoli= document.createElement('li')
        todoli.innerText=element
    let donBtn=document.createElement('button')
       donBtn.classList.add('don')
       donBtn.innerText='don'
       todoli.append(donBtn)
        todoList.append(todoli)
//add event listener to don btn

        donBtn.addEventListener('click',function (e) {
            // event.target.parentElement.remove()
            donBtn.parentElement.remove()
            let i=todoArr.indexOf(donBtn.parentElement)
            console.log(i);
            let newTodoArr =todoArr.splice(todoArr[i],1)
           localStorage.setItem('todolist',JSON.stringify(newTodoArr))
           
           })
   });

  

}