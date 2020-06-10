window.onload = function(){
    // get HTML elements
    let coursesList = document.querySelector('#coursesList')
    let studentGradeInp = document.querySelector('#studentGradeInp')
    let addGradeBtn = document.querySelector('#addGradeBtn')
    let gradeListElement = document.querySelector('#gradeListElement')
    let saveStudentBtn = document.querySelector('#saveStudentBtn')
    let studentNameInp = document.querySelector('#studentNameInp')
    let prentContener =document.querySelector('#prentContener')
    // declare empty array to save grade OBJECTS
    let gradesArr = []
    // declare students array to save students
    let studentsArr = []
    addGradeBtn.addEventListener('click', function (e) {
        //console.log(coursesList.selectedIndex);
        //console.log(coursesList.options[coursesList.selectedIndex].value);
        let selectedCourse = coursesList.options[coursesList.selectedIndex].value
        let grade = studentGradeInp.value
        if(selectedCourse !== '' && grade.trim() !== ''){
            let listItem = document.createElement('li')
            listItem.innerText = selectedCourse + ': ' + grade + '%'
            gradeListElement.append(listItem)
            studentGradeInp.value = ''
            // create grade object to push it in gradesArr
            let gradeObj = {}
            // if(selectedCourse == 'Math'){
            //     gradeObj.math = grade
            // }
            // if(selectedCourse == 'English'){
            //     gradeObj.english = grade
            // }
            // if(selectedCourse == 'computer science1'){
            //     gradeObj.computer_science1 = grade
            // }
            // if(selectedCourse == 'java'){
            //     gradeObj.java = grade
            // }
            //to creat the items insid the Object we shod writ  objectName[set selectedCourse value as keyname  ]= the vale of grade
            gradeObj[selectedCourse.replace(/ /g, "_")] = grade
            console.log(gradeObj);
            
            gradesArr.push(gradeObj)
            console.log(gradesArr);
            
        }
      })
      saveStudentBtn.addEventListener('click', function (e) {
          
          if(studentNameInp.value.trim()){
            let studentObj = {}
            studentObj.name = studentNameInp.value
            studentObj.grades = gradesArr
            studentsArr.push(studentObj)
            localStorage.setItem('students', JSON.stringify(studentsArr))
            gradeListElement.innerHTML = ''
            studentGradeInp.value = ''
            studentNameInp.value = ''
            gradesArr = []

          }
         
          
      })
//          let studentJson = localStorage.getItem('students')
//          if (studentJson!= null){
//             let copStudentArr= JSON.parse(studentJson)
//             console.log(copStudentArr);
            
// copStudentArr.forEach(element => {
// let H2Name =document.createElement('h2')
// H2Name.innerText=element.name
// let greadUl= document.createElement('ul')
// // gradesArr.forEach(element => {
// //     let greadli =document.createElement('li')
// //     greadli.innerText=element
// //     greadUl.append(greadli)
// // });
// for (const key in element.grades) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }

// // for (let i = 0; i < gradesArr.length; i++) {
// //     let greadli =document.createElement('li')

    
// // }

// prentContener.append(H2Name)
// prentContener.append(greadUl)

// // console.log(element.grades[grades.selectedIndex]);

// // greadli.innerText=element.grades[grades.selectedIndex]
// // greadUl
                
//             });
//          }

}

// 1 == "1"  true check only the value
// 1 === "1" falsecheck type and value

