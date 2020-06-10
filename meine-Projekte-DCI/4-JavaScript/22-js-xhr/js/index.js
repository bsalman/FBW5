
function getProducts(keyWord,numInPage,numOfresult) {
    let xhr =new XMLHttpRequest();
xhr.open ('POST','https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency')
let obj = {
    "requests":[
        {"indexName":"ikea","params":"query="+keyWord+"&hitsPerPage="+numOfresult+"&page="+numInPage}
    ]
}
xhr.send(JSON.stringify(obj));

xhr.onload = function () {
    if (xhr.status ==200) {
        
        let convertedObj = JSON.parse(xhr.response);
        console.log(convertedObj.results[0].hits[0]
            )
            let htmlText ='';
            convertedObj.results[0].hits.forEach(product => {
                htmlText+=product.name+'      ';
                htmlText+=product.description+'          ';
                htmlText+=product.price+'Euro     ';
                htmlText+='<img src="' +product.image+'"> <br>';

                
            });
            document.write(htmlText)
    } else{
        console.log()
    }
    
}
    
}
let enterdText= prompt('enter a search woed');
let enterdPageNum = prompt('enter page number')
let numOfresult= prompt('asgfdsg')

getProducts(enterdText,enterdPageNum,numOfresult)

