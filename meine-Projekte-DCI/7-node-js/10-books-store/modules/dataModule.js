const fs = require('fs')
const { resolve } = require('path')




function registerUser(email, password) {
    return new Promise((resolve, reject) => {
        const readData = fs.readFileSync('./users.json')
        const data = JSON.parse(readData)
        const existUser = data.users.find(user => user.email == email)
        if (existUser) {
            reject('exist')
        } else {
            data.users.push({
                id: data.newId,
                email: email,
                password: password
            })
            //increas the number of id for data to be used for next register
            data.newId++
            //convert data to json and writed 
            fs.writeFileSync('./users.json', JSON.stringify(data))
        }

    })

}

function addBook(bookTitle, bookDescription, bookPdf, bookImgs) {
    return new Promise((resolve, rejects) => {

        const ImgArr = []
        bookImgs.forEach((img, idx) => {
            let ext = img.name.substr(img.name.lastIndexOf('.'))
            let newNam = bookTitle.trim().replace(/ /g, '_') + '_' + 1 + idx + ext
            img.mv('./public/uploadedFiles/' + newNam)
            ImgArr.push('/uploadedFile')
        });
        let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + 1 + ".pdf"
        bookPdf.mv('./public/uploadedFiles/' + pdfName)
        let pdfNewUrl = '/uploadedFiles/' + pdfName
        const booksjson = fs.readFileSync('./books.json')
        const booksObj = JSON.parse(booksjson)
        booksObj.books.push({
            id: booksObj.newid,
            title: bookTitle,
            description: bookDescription,
            imgs: ImgArr,
            pdfUrl: pdfNewUrl,
            userid: 1
        })
        booksObj.newid++
        fs.writeFileSync('./books.json', JSON.stringify(booksObj))
    })




}



module.exports = {
    registerUser,
    addBook
}