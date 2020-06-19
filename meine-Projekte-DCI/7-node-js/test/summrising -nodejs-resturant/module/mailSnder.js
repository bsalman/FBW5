//decler the nodemailer
const nodemailer =require('nodemailer')
//decler the transporter for nodemailer
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'bsho395850@gmail.com',
        pass:'0969000583'
    }
    
})
function sendEmail(subject,name,message,email,callback) {
    const mailOption ={
        from:'bsho395850@gmail.com',
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

module.exports = {sendEmail}