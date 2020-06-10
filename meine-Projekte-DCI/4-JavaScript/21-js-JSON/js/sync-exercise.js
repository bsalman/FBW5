

function sillyJoks(cb) { 
   let xhr = new XMLHttpRequest();
   xhr.open('GET','https://api.chucknorris.io/jokes/random');
   xhr.send();
   xhr.onload =function (){
       if(xhr.status ==200){
       let result;
       result = JSON.parse(xhr.response)
           cb(result.value)
       }  
        else{
             return('error Number : '+xhr.status)
       }
     }   
  };


  
   sillyJoks(callBackFun)
   let callBackFun = function(toPrint){
     document.write(toPrint)
   }