
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
window.onload =()=>{
    //call the function
    getId('#container')


}
//first task
function getId(elementId) {
    //1-get element  by id 
    let containerElement=document.querySelector(elementId)
    
    //check if this element exist
    if(containerElement){
//2-creating new div
    let newDiv1= document.createElement('div')
        newDiv1.classList.add('controlsContainer')
//3-creating the input 
    let newInput =document.createElement('input')
        newInput.setAttribute('type', 'text')
        newInput.setAttribute('placeholder','text')
//4-creat select list to chose the color 
    let colorList =document.createElement('select')
    let colorOpt1=document.createElement('option')
        colorOpt1.value=''
        colorOpt1.innerText='Choose Color'
//5-append first option to color list
        colorList.append(colorOpt1)
//6-creat select list for Orientation 
    let selectOrientation =document.createElement('select')
    let orientationOpt1 =document.createElement('option')
        orientationOpt1.value=''
        orientationOpt1.innerText='choose orientation'
//7- append fist option to orientation select list        
     selectOrientation.append(orientationOpt1)
//8-crating select list for categorys       
    let categorylist = document.createElement('select')
    let categoryOpt1=document.createElement('option')
        categoryOpt1.value=''
        categoryOpt1.innerText='choose category'

//9- append first option to category list    
        categoryOpt1.append(categorylist)
//10-crating search button 
    let newBtn =document.createElement('button')
        newBtn.innerText= 'search'
//11- cratin div for pages number        
    let paggingDiv=document.createElement('div')
        paggingDiv.classList.add('paggingDiv')
//12-creat empty  div inside the container 
    let newDiv2= document.createElement('div')
        newDiv2.classList.add('imges-container')

//13-creating an  color Optionen Array 
    let colorOptArr=["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
//14- for each to creat color option 
    colorOptArr.forEach(element => {
    let colorOpt=document.createElement('option')
        colorOpt.value= element
        colorOpt.innerText= element
        colorList.append(colorOpt)
    });
//15-creating orientation array
    let orientationArr =["all", "horizontal", "vertical"]
//16-forEach to creat orientation options
    orientationArr.forEach(orieElement=>{
    let orientationOpt=document.createElement('option')
        orientationOpt.value=orieElement
        orientationOpt.innerText=orieElement
        selectOrientation.append(orientationOpt)
    })
//17-creating an categores array    
    let categoryArr=[ 'backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music']
//18-forEach to creat categorys options     
    categoryArr.forEach(categoryElement=>{
    let categoryOpt=document.createElement('option')
        categoryOpt.value=categoryElement
        categoryOpt.innerText=categoryElement
        categorylist.append(categoryOpt)
    })
     // create min width input
     let minWidthinp = document.createElement('input')
         minWidthinp.type = 'number'
         minWidthinp.min = '0'
         minWidthinp.placeholder = 'min width'
    
     // create min height input
     let minHieghtinp = document.createElement('input')
     minHieghtinp.type = 'number'
     minHieghtinp.min = '0'
     minHieghtinp.placeholder = 'min Hieght'
    
//19-append search input to newDiv1      
    newDiv1.append(newInput)
//20-append color list  to newDiv1  
    newDiv1.append(colorList)
//21-append categorylist to newDiv1
    newDiv1.append(categorylist)
//22-append selectOrientation to newDiv1
    newDiv1.append(selectOrientation)
// add min width input in div1
    newDiv1.append(minWidthinp)
// add min height input in div1
    newDiv1.append(minHieghtinp)
//23-append newBtn to newDiv1
    newDiv1.append(newBtn)
//24-append paggingDiv to newDiv1
    newDiv1.append(paggingDiv)
//25-appending newDiv1 to container element
    containerElement.append(newDiv1)
//26-//25-appending newDiv2 to container element    
    containerElement.append(newDiv2)
//27-add class to   containerElement  
    containerElement.classList.add('container')
//28- add event estener  to search button   
    newBtn.addEventListener('click',function(e){
        let keyWord= newInput.value
        getData(keyWord,newDiv2,paggingDiv,1,colorList,selectOrientation,categorylist,minWidthinp,minHieghtinp)
    })
    }
    else{
        //if elemnt not exist
        console.log('Element with Id"'+elementI+'"could not be found');
    }
}
//29-geting data using fetch and async await function 
async function getData(keyWord,div,paggingDiv,pagenumber,colorElement,orientationElement,categoryelement,minWidthElement,minHeightElement){
    //  console.log(colorElement.options);
    //  console.log(colorElement);
    //  console.log(colorElement.selectedIndex)
//30-declare color parameter to add it to Api to make search mohr specified
  let selectdColor =colorElement.options[colorElement.selectedIndex].value
    //  console.log(selectdColor)
  let colorParameter =''
     if(selectdColor){
        colorParameter='&colors=' +selectdColor
        }
//31-declare orientation parameter to add it toApi to make search mohr specified
    //  console.log(orientationElement);
    //  console.log(orientationElement.selectedIndex)
  let selecorientation=orientationElement.options[orientationElement.selectedIndex].value
  let orientationParameter=''
     if(selecorientation){
        orientationParameter='&orientation='+selecorientation
       }
//32-declare orientation parameter to add it toApi to make search mohr specified
       console.log(categoryelement);
    let selectedCategoryelement = categoryelement. options[categoryelement.selectedIndex].value;
    let categoryParameter=''
      if (selectedCategoryelement){
        categoryParameter='&category='+selectedCategoryelement
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
    let response= await fetch('https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyWord+'&page='+pagenumber+colorParameter+orientationParameter+categoryParameter+minWidthParameter + minHeightParameter)
    if (response.status==200){

        let data = await response.json()
        //data is a Object
        console.log(data)
 // get how many pagging buttons 
// we need to divide total hits to 20 in each page
        let num = data.totalHits/20
        //data.hits is an Array  of Object
         console.log(data.hits)
    let btnNumber=Math.ceil(num)
        console.log(btnNumber)
// clear paggingdiv content before add buttons to it
        paggingDiv.innerHTML =''
        div.innerHTML = ''
for (let i = 0; i < btnNumber; i++) {
    let pagBtn= document.createElement('button')
    pagBtn.innerHTML=`page ${i+1}`
    paggingDiv.append(pagBtn)
// disable the button if its page is shown
    if (pagenumber==i+1){
        pagBtn.disabled =true
     }
// add event click for pagging button
    pagBtn.addEventListener('click',function (e) {
        getData(keyWord,div,paggingDiv,i+1, colorElement,orientationElement,categoryelement,minWidthElement, minHeightElement)
    })
}
        data.hits.forEach(element => {
 // create img element
        let newImg =document.createElement('img')
        newImg.src=element.previewURL// Yes or
        newImg.setAttribute('src', element.previewURL)
        newImg.setAttribute('alt', "Image Not Found")
        let newA=document.createElement('a')
        newA.setAttribute('href',element.largeImageURL)
        newA.setAttribute('target','_blank')

        newA.append(newImg)
        div.append(newA)
    });
    
    
    
    }
    

}

