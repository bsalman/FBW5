// task 1 
// write a code on btn1 click show an alert message "Hello"
window.onload = function(){
    const btn1 = document.querySelector('#btn1')
    btn1.onclick = function (e) {
        alert('Hello')
      }


// task 2 create a red square div inside container div
      // get btn2
      const btn2 = document.querySelector('#btn2')
      // get container div
      const container = document.querySelector('#container')
      btn2.onclick = function (e) {
          // create div
      let newDiv = document.createElement('div')
      // add the new div inside container element
      container.append(newDiv)
      // set div background color
      newDiv.style.backgroundColor = 'red'
      // set height of the new div
      newDiv.style.height = '100px'
      // set width for the new div
      newDiv.style.width = '100px'
        }
      

}