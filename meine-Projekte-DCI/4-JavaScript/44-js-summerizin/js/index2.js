window.onload = function () {
    let username = document.querySelector('#username')
    let email =document.querySelector('#email')
    let  saveBtn =document.querySelector('#saveBtn')

  class personalObj {
            constructor(Name,Email){
            this.Name= Name
            this.Email= Email  
        }

    peraonData(){
                return this.Name+' '+this.Email
            }
}

let arr=[]
    saveBtn.onclick = function (e) {
        
        let neuPersonData = new personalObj(username.value,email.value)
        arr.push(neuPersonData)
        console.log(arr);
        
        let prsonArr = JSON.stringify(arr)
        localStorage.setItem('person',prsonArr)
      
        
    } }