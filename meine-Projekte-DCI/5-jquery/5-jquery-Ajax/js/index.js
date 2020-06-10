$(document).ready(function () {
    // $.ajax({
    //     type:"method",get,post,update,
    //     url:"url",
    //     data:"data", sending data
    //     dataType:"dataType",
    //     success:function(response){}
    // })

    let obj={
    "requests":[
        {"indexName":"ikea","params":"query=chair&hitsPerPage=5&page=1"}]}

    $.ajax({   
       
       type: "POST",
       url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
       data: JSON.stringify(obj),
       dataType:"json" ,
       success: function (response) {
        let resutsObj=response
        console.log(resutsObj.results[0].hits[0].name);
        let hitsArr=resutsObj.results[0].hits
       hitsArr.forEach(function(element) {
       console.log(element);
       
            let resultDiv=document.createElement('div')
            let nameSapn=document.createElement('span')
            $(nameSapn).text(element.name)
            $(resultDiv).append($(nameSapn))
            let priceSapn=document.createElement('span')
            $(priceSapn).text(' price:'+element.price+'$')
            $(resultDiv).append($(priceSapn))
            let foto=document.createElement('img')
            // $(foto).attr('src',element.image)
            foto.src = element.image
            $(foto).css('width','100px')
           
            $(resultDiv).append($(foto))
            $('#container').append($(resultDiv))
        });
       }
   });

 
});