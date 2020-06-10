window.onload = function () {
    // get html elements
    let todoInput = document.querySelector('#todoInput')
    let addBtn = document.querySelector('#todoAddBtn')
    let todoList = document.querySelector('#todoList')
    // add click event listener to add btn
    let todoArray = []
    addBtn.addEventListener('click', function (e) {
        let todoValue = todoInput.value
        if(todoValue.trim() != ""){
            let listItem = document.createElement('li')
            listItem.innerText = todoValue
            todoList.append(listItem)
            // clear the input after adding the list item to the list
            
            // add the list to localstorage
            todoArray.push(todoValue)
            let todoArrayJson = JSON.stringify(todoArray)
            localStorage.setItem('todolist', todoArrayJson)
            
        } else {
            alert('todo value is empty, please enter a todo value')
        }
        todoInput.value = ''
      })

      // render todo list array from localstorage
      let jsonObj = localStorage.getItem('todolist')
      // check if there is datawith the key todolist in the local storage
      if(jsonObj != null){
          let convertedArr = this.JSON.parse(jsonObj)
          convertedArr.forEach(element => {
            todoArray.push(element)
            let listItem = document.createElement('li')
            listItem.innerText = element
            todoList.append(listItem)
          });
      }

  }
