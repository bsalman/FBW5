const getIData = (searchWord, perPage, pageNum) => {
    //console.log(pageNum);
    return new Promise((resolve, reject) => {


        const url = 'https://pixabay.com/api?key=12000491-41fc68d8c365df909e022ceb6&q='+searchWord+'&per_page='+perPage+'&page='+pageNum

        fetch(url, {
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else{
                reject(new error('can not getthe data.respons status is:'+response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
}
// role: component always starts with capital letter

export default getIData