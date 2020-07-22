const passwordHash = require('password-hash')
// const {MongoClient, ObjectID} = require('mongodb')

const fs = require('fs')

// require mongoose
const mongoose = require('mongoose')


const connectionString = 'mongodb+srv://user1:Rbt6CCjKCHdYYwfe@cluster0.jufz4.mongodb.net/test1?retryWrites=true&w=majority'
// const Schema = mongoose.Schema
const {
    Schema
} = mongoose

// create users schema
const usersSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})


const Users = mongoose.model('users', usersSchema)

const booksSchema = new Schema({

    title: {
        type: String,
        required: true,
       
    },

    description: {
        type: String,
        required: true,
       
    },
    pdfUrl: {
        type: String,
        required: true,
       
    },
    imgs: {
        //because we have morthan img 
        type: [String],
        required: true,
        //atlist one imgurl
       min:1,
       //maxsemum 30img Url 
       max:3
    },
    userid: {
        type: String,
        required: true ,
        // to we nead to make  userid uniq
        // unique: true
    }

})

//creat books module 
const Books = mongoose.model('books', booksSchema)


function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject()
            })
        }

    })
}

function registerUser(email, password) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const newUser = new Users({
                email: email,
                password: passwordHash.generate(password),
            })
            newUser.save().then(result => {
                console.log(result);
                resolve(result)
            }).catch(error => {
                console.log(error);
                if (error.code === 11000) {
                    reject('exist');
                } else {
                    reject(error);
                }

            })
        }).catch(error => {
            reject(error)
        })
    })
}

function checkUser(email, password) {
    // your code
    return new Promise((resolve, reject) => {

        connect().then(() => {
            Users.findOne({
                email: email
            }).then(result => {
                console.log(result);
                if (result) {
                    if (passwordHash.verify(password, result.password)) {
                        
                        resolve(result)
                    } else {
                        reject(3)
                    }
                } else {
                    reject(3)
                }
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            erject(error)
        })
    })
}


function addBook(bookTitle, bookDescription, bookPdf, bookImgs, userid) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            // const db = client.db('test1')
            // db.collection('books')
            Books.findOne({
                title: bookTitle,
                userid: userid
            }).then(findBook => {
                if (findBook) {
                    
                    reject(3)
                } else {
                    // create images array to be saved in database
                    const imgsArr = []
                    bookImgs.forEach((img, idx) => {
                        // get file extension
                        let ext = img.name.substr(img.name.lastIndexOf('.'))
                        // set the new image name
                        let newName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '_' + idx + ext
                        img.mv('./public/uploadedfiles/' + newName)
                        imgsArr.push('/uploadedfiles/' + newName)
                    });
                    // set a new pdf file name
                    let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '.pdf'
                    // move the pdf file with the new name to uploadedfiles folder
                    bookPdf.mv('./public/uploadedfiles/' + pdfName)
                    // set the pdf url that gonna be saved in the json file
                    let pdfNewUrl = '/uploadedfiles/' + pdfName
                    const newBook= new Books({
                        title:bookTitle ,
                        description: bookDescription,
                        pdfUrl: pdfNewUrl,
                        imgs:imgsArr ,
                        userid:userid
                    })
                    newBook.save().then(() => {
                            resolve()
                    }).catch(error => {
                        reject(error)
                    })
                }
            }).catch(error => {
                client.close()
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
  
})}

function getAllBooks() {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            
           Books.find().then(books => {
                // add id property to each book instead of _id
                // becausethis how it used in ejs
                books.forEach(book => {
                    // book.id = book._id
                    book['id'] = book['_id']
                })
                
                resolve(books)
            }).catch(error => {
                
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getBook(id) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
           
           Books.findOne({
                _id: id
            }).then(book => {
                
                if (book) {
                    book.id = book._id
                    resolve(book)
                } else {
                    reject(new Error('can not find a book with this id : ' + id))
                }
            }).catch(error => {
               
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function userBooks(userid) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            
            Books.find({
                userid: userid
            }).then(books => {
                // add id property to each book instead of _id
                // becausethis how it used in ejs
                books.forEach(book => {
                    // book.id = book._id
                    book['id'] = book['_id']
                })
                
                resolve(books)
            }).catch(error => {
                
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function updateBook(bookid, newBookTitle, oldImgsUrls, bookDescription, newPdfBook, newImgs, userid) {
    return new Promise((resolve, reject) => {
        try {


            (async () => {
                let oldBookData = await getBook(bookid)
                const deletedImgs = []
                const keepImgs = []
                // get update version number
                // let updateNum = 1
                // if (oldBookData.update) {
                //     updateNum = oldBookData.update + 1
                // }

                // check which images user wants to keep and which to delete
                oldBookData.imgs.forEach(img => {
                    if (oldImgsUrls.indexOf(img) >= 0) {
                        keepImgs.push(img)
                    } else {
                        deletedImgs.push(img)
                    }
                })
                // save new images to file system and to array to be saved to db
                const newImgsUrlsArr = []
                newImgs.forEach((img, idx) => {
                    const imgExt = img.name.substr(img.name.lastIndexOf('.'))
                    const newImgName = newBookTitle.trim().replace(/ /g, '_') + '_' + userid + '_' + idx + '_' + (oldBookData.__v+1) + imgExt
                    newImgsUrlsArr.push('/uploadedfiles/' + newImgName)
                    img.mv('./public/uploadedfiles/' + newImgName)
                })
                // delete the deleted images files from the system
                deletedImgs.forEach(file => {
                    // first check file is exist
                    if (fs.existsSync('./public' + file)) {
                        fs.unlinkSync('./public' + file)
                    }
                })
                // check if user upload a new pdf file and move it to the same place of the old one so it will OVERWRITE it
                if (newPdfBook) {
                    newPdfBook.mv('./public' + oldBookData.pdfUrl)
                }
                await connect()
                await Books.updateOne({
                    _id: bookid
                }, {
                    
                        title: newBookTitle,
                        description: bookDescription,
                        imgs: [...keepImgs, ...newImgsUrlsArr],
                        
                    $inc:{__v:1}
                })
                resolve()

            })()
        } catch (error) {
            reject(error)
        }
    })
}

function deleteBook(bookid, userid) {
    return new Promise((resolve, reject) => {
        getBook(bookid).then((book) => {
            if (book.userid == userid) {
                book.imgs.forEach(img => {
                    if (fs.existsSync('./public' + img)) {
                        fs.unlinkSync('./public' + img)

                    }
                })
                if (fs.existsSync('./public' + book.pdfUrl)) {
                    fs.unlinkSync('./public' + book.pdfUrl)
                }
                
                    
                    Books.deleteOne({
                        _id: bookid
                    }).then(() => {
                        
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })

                
            } else {
                rereject(new Error('hacking try'))
            }
        }).catch(error => {
            rereject(error)
        })
    })

}
module.exports = {
    registerUser,
    checkUser,
    addBook,
    getAllBooks,
    getBook,
    userBooks,
    updateBook,
    deleteBook,


}