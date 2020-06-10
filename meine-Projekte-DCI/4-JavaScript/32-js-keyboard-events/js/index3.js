window.onload = () => {
  // getting the static inputs which in the second row in products
    let productInput = document.querySelector('.product div:nth-child(1) input')
    let priceInput = document.querySelector('.product div:nth-child(2) input')
    let quantityInput = document.querySelector('.product div:nth-child(3) input')
    let resultSpan = document.querySelector('.product div:nth-child(4) span')

    // set keyup event for the static product name to focuse in price input 
    productInput.addEventListener('keyup', function (e) {
      if(e.which == 13){
        priceInput.focus()
      }
      })
      // call setEvent function to set keyup event for static priceInput
    setEvent('keyup',priceInput,priceInput,quantityInput,resultSpan, 'price')
    // priceInput.addEventListener('keyup', function (e) {
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)

    //   })

    // call setEvent function to set change event for static priceInput
    setEvent('change',priceInput,priceInput,quantityInput,resultSpan, 'price')
      // priceInput.addEventListener('change', function (e) {
      //   let price = parseFloat(priceInput.value)
      //   let quantity = parseFloat(quantityInput.value)
      //   calculator(resultSpan, price, quantity)

      // })


      // call setEvent function to set keyup event for static quantityinput
      setEvent('keyup',quantityInput,priceInput,quantityInput,resultSpan, 'quantity')
      // quantityInput.addEventListener('keyup', function (e) {
      //   let price = parseFloat(priceInput.value)
      //   let quantity = parseFloat(quantityInput.value)
      //   calculator(resultSpan, price, quantity)

      // })
      
      // call setEvent function to set change event for static quantityinput
      setEvent('change',quantityInput,priceInput,quantityInput,resultSpan, 'quantity')
      // quantityInput.addEventListener('change', function (e) {
      //   let price = parseFloat(priceInput.value)
      //   let quantity = parseFloat(quantityInput.value)
      //   calculator(resultSpan, price, quantity)

      // })

      // get the new entery link
      let newProduct = document.querySelector('#newProduct')
      // set click event for new entery link
      newProduct.addEventListener('click', function (e) {
        // prevent link click to jump to top of the page
          e.preventDefault()
          // get product name inputs for all rows including the static one
          let productInmputsArr = document.querySelectorAll('.product div:nth-child(1) input')
          // varaible to check if any input is empty
          let check = true
          // iterate throgh all product name inputs 
          productInmputsArr.forEach(element => {
            // check if product input is empty
            if(element.value.trim() == ''){
              // change check from true to false if product input is empty
              check = false
              // set the focus on the empty product input
              element.focus()
            }
          });
          // check is true that means no empty product
          if(check){
            // call the function which will create new row
            newProductCreator()
          }
        })

        // get the table print link
        document.querySelector('#invoiceGenerate').addEventListener('click', function (e) {
          // prevent the link to jump to top of the page on click
          e.preventDefault()
          // get all product rows
          let productsArr = document.querySelectorAll('.products .product') 
          //console.log(productsArr[0].children);
          
          // get the tbody element in the table to be filled with new rows
          let printTable = document.querySelector('#printTable tbody')
          // remove all old rows from the table
          // for(let i = 1; i < printTable.children.length; i++){
          //   printTable.children[i].remove()
          // }
          // finish removing from the table

          // remove all old rows from the table body
          printTable.innerHTML = ''
          // remove the total price from the total price which come after th print table
          document.querySelector('#printSection .sumTotal').innerText =''
          // iterate through the product rows
          for(let i = 1; i < productsArr.length; i++){
            // checking if product name is empty
            if(productsArr[i].children[0].children[0].value.trim() == ''){
              // set focus on the empty product name
              productsArr[i].children[0].children[0].focus()
              // return will stop the for loop and the function and any below commands not gonna be executed
              return
            }
          } 

          // iterate through product rows again but this time to fill the table
          for(let i = 1; i < productsArr.length; i++){
            // create new table row element
            let newRow = document.createElement('tr')

            // create table cell element and fill it with product name and add it to the created row
            let productTd = document.createElement('td')
            productTd.innerText = productsArr[i].children[0].children[0].value
            newRow.append(productTd)

            // create table cell element and fill it with product price and add it to the created row
            let priceTd = document.createElement('td')
            priceTd.innerText = productsArr[i].children[1].children[0].value + ' EUR'
            newRow.append(priceTd)

            // create table cell element and fill it with product quantity and add it to the created row
            let quantityTd = document.createElement('td')
            quantityTd.innerText = productsArr[i].children[2].children[0].value
            newRow.append(quantityTd)

            // create table cell element and fill it with product total and add it to the created row
            let totalTd = document.createElement('td')
            totalTd.innerText = productsArr[i].children[3].children[0].innerText
            newRow.append(totalTd)

            //add the row to the tbody of the table
            printTable.append(newRow)

          }
          // get the total sum which comes after the editable rows
          let sumTotal1 = document.querySelector('.sumTotal')
          // set innertext of totalsum which comes after the table as the total sum which comes after the editable rows
          document.querySelector('#printSection .sumTotal').innerText = sumTotal1.innerText

          })
}

// function calculator(resultEmenet, price, quantity){
//     resultEmenet.innerText = price * quantity
// }

// set event function which will set the events for each input created and static 
// eventName change or keyup
// triggerElement what is the element that will trigger the event
// priceElement is the priceinput
// quantityElement is the quantity input
// resultElement is the span for each row
// elementType price or quantity to know wich element trigger the event 
function setEvent(eventName,triggerElement, priceElement, quantityElement, resultElement, elementType) {
  // set the event for the trigger element
  triggerElement.addEventListener(eventName, function (e) {
    // change price to decimal number
    let price = parseFloat(priceElement.value)
    // change quantity to decimal number
    let quantity = parseFloat(quantityElement.value)
    // calculate the total and add the word EUR after
    resultElement.innerText = (price * quantity) + ' EUR'

    // querySelect return only the first founded element
    // querySelectAll return all elements match the selector
    // get all spans in all product rows because they contain the price for each product
    let spansArr = document.querySelectorAll('.product>div>span')
    // the storage which will save the total 
    let storage = 0
    // iterate through the spans
    spansArr.forEach(element => {

      // remove EUR word from the price because we wanna convert it to number
      let innerValue = element.innerText.replace(' EUR', '')
      // convert the price to number
      let price = parseFloat(innerValue)

      // add the price to the storage
      storage += price
    });

    // get the sumtotal element which come after the editable rows
    let sumTotlaElement = document.querySelector('.sumTotal')
    // set storage to sumtotal text 
    sumTotlaElement.innerText = storage + ' Euro'

    // if the trigger element was price input and the event was keyup and the pressed key is eneter it should focus on quantity input
    if(elementType == 'price' && eventName == 'keyup' ){
      if(e.which == 13){
        quantityElement.focus()
      }
    }
     // if the trigger element was quantity input and the event was keyup and the pressed key is eneter it should create new row and focus in the product input in the row and this is only should be done if product name was not empty
    if(elementType == 'quantity' && eventName == 'keyup' ){
      if(e.which == 13){
        //quantityElement.focus()
        // get product name input from price input so father to father to child to child
        let productInput = priceElement.parentElement.parentElement.children[0].children[0]
        //alert(productInput.value.trim())
        // get product row from price input so father to father 
        let currentProduct = priceElement.parentElement.parentElement

        // get all products element from product 
        let products = currentProduct.parentElement
        let childrenArr = Array.from(products.children) // convert collection to array so we can use indexOf
        // console.log(childrenArr.indexOf(currentProduct))
        // console.log(childrenArr.length)
        // get how many product rows exist including the title product row
        let productsLength = childrenArr.length
        // get the current product index
        let currentProductIndex  = childrenArr.indexOf(currentProduct)
        // check if product name is not empty
        if(productInput.value.trim() != ''){
          // check if current product is the last product so we can create new row else we need to focus on the next row product name input
          if(productsLength-1 == currentProductIndex ){
            newProductCreator()
          } else {
            childrenArr[currentProductIndex + 1].children[0].children[0].focus()
          }
          
        }
      }
    }

  })
  }

// function to create new product row
  function newProductCreator() {
    // create product div
    let productDiv = document.createElement('div')
    // set class product to the div
    productDiv.classList.add('product')

    // create first div which will contain the product name input
    let firstDiv = document.createElement('div')
    let newproductInput = document.createElement('input')
    newproductInput.type = 'text'
    firstDiv.append(newproductInput)
    productDiv.append(firstDiv)

    // create second div which will contain the product price input
    let secondDiv = document.createElement('div')
    let newPriceInput = document.createElement('input')
    newPriceInput.type = 'number'
    newPriceInput.setAttribute('min', '0')
    newPriceInput.value = '0'
    secondDiv.append(newPriceInput)
    productDiv.append(secondDiv)

    // create third div which will contain the product quantity input
    let thirdDiv = document.createElement('div')
    let newquantityInput = document.createElement('input')
    newquantityInput.type = 'number'
    newquantityInput.setAttribute('min', '0')
    newquantityInput.value = '0'
    thirdDiv.append(newquantityInput)
    productDiv.append(thirdDiv)

    // create fourth div which will contain the product total span
    let fourthDiv = document.createElement('div')
    let newResultSpan = document.createElement('span')
    newResultSpan.innerText = '0 EUR'
    fourthDiv.append(newResultSpan)
    productDiv.append(fourthDiv)

    // get the div products whish contains all products
    let productsDiv = document.querySelector('.products')
    // add the created div product inside it
    productsDiv.append(productDiv)

    // set events for all new input price and quantity
    setEvent('keyup',newPriceInput, newPriceInput, newquantityInput, newResultSpan,'price')
    setEvent('change',newPriceInput, newPriceInput, newquantityInput, newResultSpan,'price')
    setEvent('keyup',newquantityInput, newPriceInput, newquantityInput, newResultSpan, 'quantity')
    setEvent('change',newquantityInput, newPriceInput, newquantityInput, newResultSpan,'quantity')
    // here you need to write your events handler

    // set product name input keyup event
    newproductInput.addEventListener('keyup', function (e) {
      if(e.which == 13){
        newPriceInput.focus()
      }
      })
      // set the focus on the new product name input
      newproductInput.focus()
//       productsDiv.innerHTML += '<div class="product">'+
//       '<div>'+
//           '<input type="text">'+
//       '</div>'+
//       '<div>'+
//           '<input type="number" min="0" value="0">'+
//       '</div>'+
//       '<div>'+
//           '<input type="number" min="0" value="0">'+
//       '</div>'+
//       '<div>'+
//           '<span>0</span>'+
//       '</div>'+
//   '</div>'








    }