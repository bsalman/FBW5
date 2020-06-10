
  let xhr1 =new XMLHttpRequest();
  xhr1.open('GET','/data.json');
  xhr1.send();
  xhr1.onload= function () { 
      if(xhr1.status==200){
          
       let produkte = JSON.parse(xhr1.response).arrayOfProducts
     
       produkte.forEach(product=>{
           let productHtml ='<img src="'+product.imgUrl +'"width="50">';
           productHtml+=' '+product.name;
           productHtml+='<sub><del>  '+(product.price*2) + 'Euro</del></sub>';
           productHtml+='<b>  '+product.price+'Euro</b><br>';
           document.write(productHtml)
       })
       document.close()
    }}
