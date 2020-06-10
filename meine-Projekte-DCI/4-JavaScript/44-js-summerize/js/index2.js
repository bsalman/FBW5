// task1

// on save button click username and email values should be save inside 
// the local storage uding ONE key 

window.onload = () => {
    // get HTML elements
    const btn = document.querySelector('#btn1')
    const usernameInput = document.querySelector('#username')
    const emailInput = document.querySelector('#email')

    // addclick event to the btn
    btn.addEventListener('click',function (e) {
        // create an object with properties from inputs values
        const personObj = {
            username: usernameInput.value,
            email: emailInput.value
        }
        // save the object inside the local storag as json string
        localStorage.setItem('blaPerson',JSON.stringify(personObj) )

      })
     let jsonData =localStorage.getItem('blaPerson')
     if (jsonData!=null){
         let conObj = JSON.parse(jsonData)
         usernameInput.placeholder= conObj.username
         emailInput.placeholder=conObj.email
     }
  }