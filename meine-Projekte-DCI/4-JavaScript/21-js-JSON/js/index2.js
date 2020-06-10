//  setTimeout(() => {
     
 
//  let xhr = new XMLHttpRequest();
// xhr.open('GET','/data.json');
// xhr.send();
// xhr.onload =function (){
//     // console.log(xhr.status)
//     // console.log(xhr.response)
//     //xhr.status respons number 200 is ok ,404 is page not found,500 sesver proplem
//     if (xhr.status == 200) {
//         console.log('Alles gut')
//         console.log(xhr.statusText)

//         //xhr .data comming back from the server
//         console.log(xhr.response)
        
//     } else{
//         console.log(xhr.statusText)
//         console.log('Error Number: '+xhr.status)

//     }
// }}, 50);
     
 
//     let xhr = new XMLHttpRequest();
//    xhr.open('GET','https://api.chucknorris.io/jokes/random');
//    xhr.send();
//    xhr.onload =function (){
//        if(xhr.status ==200){
//            let joke = JSON.parse(xhr.response)
//            console.log(joke.value)
//            document.write('<img src="'+joke.icon_url+'">'+'<br>')
//            document.write('<p>id:'+joke.id +'</p><br>')
//         //    document.write('Joke:'+joke.value+'<br>')
//         document.write(`<p> ID = ${joke.value}</p> <br/> `)
//        }
           
//         else{
//             console.log('error Number : '+xhr.status)
           
   
//        }
//    };

   let xhr1 =new XMLHttpRequest();
   xhr1.open('GET','/data.json');
   xhr1.send();
   xhr1.onload= function () { 
       if(xhr1.status==200){
           
        let produkte = JSON.parse(xhr1.response)
        for (let i = 0; i < produkte.arrayOfProducts.length; i++) {
            
    document.write('<img src="'+produkte.arrayOfProducts[i].imgUrl+'" style= width:100px; >'+'<br>')
    document.write('<p> Name:'+produkte.arrayOfProducts[i].name+'<br>')
    document.write('<p> Price :<del> 120 </del> new Pris'+produkte.arrayOfProducts[i].price+'<br>')
        } 
}
else{ console.log('error Number : '+xhr1.status)

}
       
   }