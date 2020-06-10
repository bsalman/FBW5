window.onload=function () {
let courslist =document.querySelector('#courslist')

let studentGradInp= document.querySelector('#studentGradInp')

let addGradeBtn =document.querySelector('#addGradeBtn')

let greadListElement =document.querySelector('#greadListElement')
let saveStudentBtn =document.querySelector('#saveStudentBtn')
let studentNameIbp = document.querySelector('#studentNameIbp')
let arr =[]
addGradeBtn.addEventListener('click',function () {
    // console.log(courslist.selectedIndex);
    // console.log(courslist.options[courslist.selectedIndex]);
    let selectedCourse =courslist.options[courslist.selectedIndex].value
   let gread= studentGradInp.value
   if(selectedCourse!='' && gread.trim()!=''){
       let listItem=document.createElement('li')
       listItem.innerText=selectedCourse +':'+gread+'%'
       greadListElement.append(listItem)
    //    let obj = {}
    //    obj[selectedCourse] = gread
    // Object.selectedCourse = "fff"
    // obj[selectedCourse] = gread
    // obj.math
  arr.push(listItem.innerText)
  console.log(arr);
  
       studentGradInp.value=''
       
   }
    
})
let studentArr=[]
saveStudentBtn.addEventListener('click',function (e) {
 let studentObj = {
     name:studentNameIbp.value,
     grades: arr   
 }
 
 
  studentArr.push(studentObj)
//  console.log(studentArr);
 
localStorage.setItem('student',JSON.stringify(studentArr))
arr=[]
greadListElement.innerHTML=''
studentNameIbp.value=''
})

    
}


