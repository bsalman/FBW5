const nodemailer = require('nodemailer');
const sensitveData = require('./sensitivData')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'blabla@gmail.com',
        pass: sensitveData.password()
    }
})

function sendEmail(email, subject, message) {
return new Promise((resolve, reject) => {
    const mailOption ={
        from: 'blabla@gmail.com',
        to: email,
        subject: subject,
        text:  message
    }
    transporter.sendMail(mailOption, function (error, info) {
        if(error){
            console.log(error);
            reject(error)
            
        } else {
            console.log(info.response);
            resolve(info.response)
        }
      })
})
    

  }

  module.exports = { sendEmail }