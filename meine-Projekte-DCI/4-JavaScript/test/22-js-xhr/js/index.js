function ProSearsh(keyWord,numInPage,pageNum) {
    let xhr = new XMLHttpRequest
    xhr.open('POST', 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency');
    let obj = {
        "requests" : [
            {"indexName":"ikea","params":"query="+keyWord+"&hitsPerPage="+numInPage+"&page=" + pageNum}
        ]

    }
    xhr.send(JSON.stringify(obj));
    xhr.onload = function () {
        if(xhr.status==200)
        {
            let convertetData=JSON.parse(xhr.response);
            console.log(convertetData);
            let htmlElement='';
            convertetData.results[0].hits.forEach(element => {
                 htmlElement +='<img src="' + element.image +'></img>'
                 htmlElement+= element.name + '';
                 htmlElement+= element.price +'Euro';

                
            });
            
            document.write(htmlElement)
            document.close()
            
        }else{
            console.log(xhr.status);
            
        }
        
    }
    
}


ProSearsh(prompt('enter a search word'), prompt('enter a number of the result in a page'), prompt('enter the page number'))