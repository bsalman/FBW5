//decler the nodemailer
const nodemailer =require('nodemailer')
//decler the transporter for nodemailer
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'bs395280@gmail.com',
        pass:''
    }
    
})
function emailsender(subject,name,message,email,callback) {
    const mailOption ={
        from:email,
        to:'bs395280@gmail.com',
        subject:subject,
        text:email+'\n'+name +'\n'+ message
     }

     transporter.sendMail(mailOption,function(error,info){
        if(error){
            console.log(error)
            callback(false)
        } else {
            console.log(info.response)
            callback(true)
        }
    
  })
}

module.export = {emailsender}