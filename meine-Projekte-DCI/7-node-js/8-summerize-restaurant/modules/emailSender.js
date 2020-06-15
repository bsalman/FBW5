const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'blabla@gmail.com',
        pass: 'your password'
    }
})

function sendEmail(name, email, subject, message, callback) {

    const mailOption ={
        from: 'blabla@gmail.com',
        to: 'emailtosendto@bla.com',
        subject: subject,
        text: email + '\n' + name + '\n' + message
    }
    transporter.sendMail(mailOption, function (error, info) {
        if(error){
            console.log(error);
            callback(false);
            
        } else {
            console.log(info.response);
            callback(true);
        }
      })

  }

  module.exports = { sendEmail }