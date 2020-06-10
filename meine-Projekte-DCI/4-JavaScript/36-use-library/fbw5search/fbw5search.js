//1 task
// write javascript function that will recieve div Id "container"  as a parameter 
// and create inside this div an text input

// 2 task
// change your previuos function to add the input inside a div and this div
//  suppose to be in the container

// 3 task
// add a button after the previous input

// 4 task 
// add a div comes after the last div which contains input and button

//5 task
// set class 'container' to the main div
// set class 'controls-container' for the first child div

// 6 task 
// the 20 images should be shown only after click the search button

// 7 task
// delete old html content from div2 before adding the new 20 images

// 8 task
// https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=lion
// log the data that will be returned from the Api using fetch

// 9 task 
// use the the value from the input as keyword to search through the Api
// so you need to pass the value as a parameter to the getData() function

// 10 task 
// make the photos clickable so when user clicks on the photo , 
// new tab will open and the larg photo will be shown there

function appInit(containerId, apiKey){
    // get element by id containerId the parameter
    let appContainer = document.getElementById(containerId);
    // check if this element exist
    if(appContainer){
        let div1 = document.createElement('div')
        // create input
        let inp1 = document.createElement('input')
        // add input inside div
        div1.append(inp1)
        // create colors list
        let colorList = document.createElement('select')
        //create list option
        let colorOpt1 = document.createElement('option')
        // set a value for this option
        colorOpt1.value = ""
        // set innerText for the option
        colorOpt1.innerText = "Choose color"
        //add the option inside the list element
        colorList.append(colorOpt1)
        // create colors options array
        let colorsArr = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
        colorsArr.forEach(element => {
            let colorOpt = document.createElement('option')
            colorOpt.value = element
            colorOpt.innerText = element
            colorList.append(colorOpt)
        });
        // add colorList inside div1
        div1.append(colorList)
        // create orientation list
        let orientationList = document.createElement('select')
        let orientationOpt1 = document.createElement('option')
        orientationOpt1.value = ''
        orientationOpt1.innerText = 'choose The orientation'
        orientationList.append(orientationOpt1)
        let orientationArr = ["all", "horizontal", "vertical"]
        orientationArr.forEach(element => {
            let orientationOpt = document.createElement('option')
            orientationOpt.value = element
            orientationOpt.innerText = element
            orientationList.append(orientationOpt)
        });
        div1.append(orientationList)
        // create category list
        let categoryList = document.createElement('select')
        let categoryOpt1 = document.createElement('option')
        categoryOpt1.value = ''
        categoryOpt1.innerText = 'Category'
        categoryList.append(categoryOpt1)
        let categoryArr = ['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music']
        categoryArr.forEach(element => {
            let categoryOpt = document.createElement('option')
            categoryOpt.value = element
            categoryOpt.innerText = element
            categoryList.append(categoryOpt)
        });
        div1.append(categoryList)
        // create min width input
        let minWidthinp = document.createElement('input')
        minWidthinp.type = 'number'
        minWidthinp.min = '0'
        minWidthinp.placeholder = 'min width'
        // add min width input in div1
        div1.append(minWidthinp)
        // create min height input
        let minHieghtinp = document.createElement('input')
        minHieghtinp.type = 'number'
        minHieghtinp.min = '0'
        minHieghtinp.placeholder = 'min Hieght'
        // add min height input in div1
        div1.append(minHieghtinp)
        // add class 'controls-container' to div1
        div1.classList.add('controls-container')
        // create a button and add it to div1
        let btn1 = document.createElement('button')
        btn1.innerText = 'Search'
        div1.append(btn1)
        // create pagging buttons container
        let paggingDiv = document.createElement('div')
        div1.append(paggingDiv)
        // add div inside the container
        appContainer.append(div1)
        // create and add another div to container
        let div2 = document.createElement('div')
        appContainer.append(div2)
        // add class images-container to div2
        div2.classList.add('images-container') 
        // add click event listner to btn1
        btn1.addEventListener('click', function(){
            
            // clear div2 old content
            //div2.innerHTML = ''
            // call getData function
            getData(inp1.value, div2, paggingDiv, 1, colorList, orientationList, categoryList, minWidthinp, minHieghtinp, apiKey)
            
            
            // add 20 dummy images inside div2
        // for(let i = 0; i<20; i++){
        //     // create image
        //     let img = document.createElement('img')
        //     // set src attribute to the image
        //     img.setAttribute('src','./imgs/dummy.png')
        //     // add the image inside div2
        //     div2.append(img)
        // }
        })
        // add class 'container to appContainer'
        appContainer.classList.add('container')
        
    } else {
        // container not exist
        console.log('Element with Id "' + containerId + '" could not be found')
    }
}

// call the function 
// window.onload = function () {
//     appInit('container')
//     appInit('container1')
//   }

  async function getData(keyword, imagesContainer, paggingContainer, pageNumber, colorlistElement, orientationlistElement, categorylistElement, minWidthElement, minHeightElement, key) {
    //   console.log(colorlistElement.options[colorlistElement.selectedIndex].value);
      //console.log(pageNumber)
      // get the selected value from color the list 
      let selectedColor = colorlistElement.options[colorlistElement.selectedIndex].value
      // declare url colors parameter
      let colorParameter = ''
      // check if there is color selected
      if(selectedColor){
        colorParameter = '&colors=' + selectedColor
      }
      // get the selected value from orientation list
      let selectedOrientation = orientationlistElement.options[orientationlistElement.selectedIndex].value
      // declare url orientation parameter
      let orientationParameter = ''
      // check if there is orientation selected
      if(selectedOrientation){
        orientationParameter = '&orientation=' + selectedOrientation
      }
      // get selected category
      let selectedCategory = categorylistElement.options[categorylistElement.selectedIndex].value
      let categoryParameter = ''
      if(selectedCategory){
          categoryParameter = '&category=' + selectedCategory
      }
    // declare min width url parameter
    let minWidthParameter = ''
    if(minWidthElement.value.trim()){
        minWidthParameter = '&min_width=' + minWidthElement.value.trim()
    }
    // declare min hieght url parameter
    let minHeightParameter = ''
    if(minHeightElement.value.trim()){
        minHeightParameter = '&min_height=' + minHeightElement.value.trim()
    }
    //   console.log(selectedColor)
    //   console.log(colorlistElement.selectedIndex)
    // clear images container  
    imagesContainer.innerHTML = ''
    // getting data from Api using fetch
      let response = await fetch('https://pixabay.com/api/?key='+key+'&q=' + keyword + '&page=' + pageNumber+colorParameter + orientationParameter + categoryParameter + minWidthParameter + minHeightParameter)
      if(response.status == 200){
          let data = await response.json()

          console.log(data);
          // get how many pagging buttons 
          // we need to divide total hits to 20 in each page
          let num = data.totalHits / 20
          //console.log(num);
          // round up num
          let btnNumbers = Math.ceil(num)
          //console.log();
          // clear paggingContainer content before add buttons to it
          paggingContainer.innerHTML = ''
          for(let i = 0 ; i < btnNumbers ; i++ ){
              let paggingBtn = document.createElement('button')
              paggingBtn.innerText = i+1
              paggingContainer.append(paggingBtn)
              // disable the button if its page is shown
              if(pageNumber == i+1){
                  paggingBtn.disabled = true
              }
              // add event click for pagging button
              paggingBtn.addEventListener('click',function(){
                getData(keyword, imagesContainer, paggingContainer, i+1, colorlistElement, orientationlistElement, categorylistElement, minWidthElement, minHeightElement, key)
              })
          }
          
          data.hits.forEach(element => {
              // create img element
              let img = document.createElement('img')
              // set the url from the element previewUrl property
              img.src = element.previewURL
              // create link
              let imgLink = document.createElement('a')
              // make link open in new tab
              imgLink.setAttribute('target', '_blank')
              // set the href for the link
              imgLink.setAttribute('href', element.largeImageURL)
              // add the image inside the link
              imgLink.append(img)
              // add the image link inside imagesContainer
              imagesContainer.append(imgLink)

          });

          
      }
    }


    let Fbw5Search = {
        key: '',
        go: function (elementId) {
            if(this.key){
            appInit(elementId, this.key)
          } else {
              console.log('you did not enter api key')
          }
        }
    }

