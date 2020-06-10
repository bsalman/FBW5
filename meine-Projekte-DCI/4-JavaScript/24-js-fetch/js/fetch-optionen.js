async function getProducts(keyWord, numInPage, page) {
    let url = 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency'
    let obj = {
        "requests":[
            {"indexName":"ikea","params":"query="+keyWord+"&hitsPerPage="+numInPage+"&page="+page}
        ]
    }

let response =await fetch(url,
    {method :'POST',
    body: JSON.stringify(obj)})
    let resultData =await response.json()
    console.log(resultData)
};
getProducts('che',10,1)