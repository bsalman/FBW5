const fs = require('fs')

function registerUser(email, password) {
    // your code here
    // read users.json and convert it to object
    return new Promise((resolve, reject) => {
      const readData = fs.readFileSync('./users.json')
      const data = JSON.parse(readData)

      // check user email is exist or not using es6 find array method
      const existUser = data.users.find(user => user.email == email) 
      if (existUser) {
        reject('exist')
      } else {
        data.users.push({
          id: data.newId,
          email: email,
          password: password
        })
        // increas the newid property for data to be used for next registered user
        data.newId++
        // convert data to json and write it in users.json
        fs.writeFileSync('./users.json', JSON.stringify(data))
        resolve()

      }


    })

  }

function addBook(bookTitle, bookDescription, bookPdf, bookImgs) {
  // image files name pattern
  // booktitle no spaces _userid_image index.extension
  // book pdf name pattern
  // booktitle_userid.pdf
  // 1-start with save images files
  // 2-save pdf file
  // 3-save json file
  return new Promise((resolve, reject) => {

    // read books.json
    const booksJson = fs.readFileSync('./books.json')
    // convert the read file to object
    const booksObj = JSON.parse(booksJson)

    const foundBook = booksObj.books.find(book => book.title == bookTitle && book.userid == 1);

    if(foundBook) {
      reject(3);
    } else {
    // check if book title is not exist for this user
    
    // array will contain the url of images to be saved in the books.json
    const imgsArr = []
    // save the images in uploadedfolder and set the new name pattern
    bookImgs.forEach((img, idx) => {
      // get file extension
      let ext = img.name.substr(img.name.lastIndexOf('.'))
      // set the new image name
      let newName = bookTitle.trim().replace(/ /g, '_') + '_' + 1 + '_' + idx + ext
      img.mv('./public/uploadedfiles/' + newName)
      imgsArr.push('/uploadedfiles/' + newName)
    });
    // set a new pdf file name
    let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + 1 + '.pdf'
    // move the pdf file with the new name to uploadedfiles folder
    bookPdf.mv('./public/uploadedfiles/' + pdfName)
    // set the pdf url that gonna be saved in the json file
    let pdfNewUrl = '/uploadedfiles/' + pdfName

    // add the new book to books.json
    booksObj.books.push({
      id: booksObj.newid,
      title: bookTitle.trim(),
      description: bookDescription,
      imgs: imgsArr,
      pdfUrl: pdfNewUrl,
      userid: 1
    })
    // increase the newid by one for the next book
    booksObj.newid++
    // save the booksObj to books.json
    fs.writeFileSync('./books.json', JSON.stringify(booksObj))
    resolve()
  }
  })
  }

function getAllBooks() {
  return new Promise((resolve, reject) => {
    // read file to json
    const booksJson = fs.readFileSync('./books.json')
    // convert json to object
    const booksObj = JSON.parse(booksJson)
    // export the object using resolve to be used on then hand 
    resolve(booksObj.books)

  })
  }

  module.exports = {
    registerUser,
    addBook,
    getAllBooks
  }