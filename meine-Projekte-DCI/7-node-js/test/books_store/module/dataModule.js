const fs = require('fs');

//this is the fis part of Promise the secound part is in app.post(/regester)
function registerUser(email,password) {
    return new Promise((resolve,reject)=>{
        const jsonText = fs.readFileSync('./users.json');
        const dataUsers = JSON.parse(jsonText) 
        const existUser = dataUsers.users.find(user=>user.email== email)
        if (existUser) {
            reject('exist')
        }else{
            resolve('notexist')
            dataUsers.users.push({
                id:dataUsers.newId,
                email:email,
                password:password
            },
             dataUsers.newId++
            )
           
            fs.writeFileSync('./users.json',JSON.stringify(dataUsers))
        }

    })
    
    
}

function addNewBooks(bookTitle,bookDescription,bookImgs,bookPdf){
return new Promise((resolve,rejects)=>{
    const booksFile = fs.readFileSync('./booksFile.json')
    const booksObj = JSON.parse(booksFile)
     const imgArr=[]
     bookImgs.forEach((img,idx) => {
         let extention = img.name.substr(img.name.lastIndexOf('.'))
         let newName = bookTitle.trim().replace(/ /g,'_')+'_'+1+'_'+idx+extention
         img.mv('./public/uploadedfile/'+newName)
         imgArr.push('./public/uploadedfile/'+newName)
     });

        let pdfName = bookTitle.trim().replace(/ /g,'_')+'_'+1+'_'+'pdf'
       
        bookPdf.mv('./public/uploadedfile/'+pdfName)
        
         let pdfNewUrl ='./public/uploadedfile/'+pdfName



    resolve('exist')
    booksObj.books.push({
        id:1,
        title:bookTitle,
        description:bookDescription,
        imgs:imgArr,
        pdfUrl:pdfNewUrl,
        userid: 1

    },
   booksObj.newId++
    )
    
fs.writeFileSync('./booksFile.json',JSON.stringify(booksObj))

})


}

function getAllBooks(){
    
}

module.exports={
    registerUser,
    addNewBooks
}