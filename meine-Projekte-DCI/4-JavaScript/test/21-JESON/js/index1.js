window.onload= function(){

 function ProductsShow() {
     let Promise1 = new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest;
        xhr.open('GET','./Data/data.json');
        xhr.send();
        xhr.onload = function(){
            if (xhr.status==200) {

                resolve(xhr.response)
            //     let data =JSON.parse(xhr.response).arrayOfProducts
            
            
            //     
        
        
            //     });
            //     document.close()
            // }
            // else{
            //     alert('erroe number12050')
            // }
            
        }else{reject('es gibt eine Problem')}

     } })
    return Promise1; 
 }   

 ProductsShow().then(theResponse =>{
     let proData =JSON.parse(theResponse)
     console.log(proData);
     proData.arrayOfProducts.forEach((element) => {   
             let productHrml ='<img src ="'+element.imgUrl+'"width="50"';
              document.write(productHrml)})
 }).catch(error=>{
     console.log(error);
     
     
 })



}

