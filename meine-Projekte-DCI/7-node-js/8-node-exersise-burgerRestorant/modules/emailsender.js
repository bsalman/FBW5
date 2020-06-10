const nodemailer =require('nodemailer')

const transporter = nodemailer.createTransport({service:'gmail',
auth:{
    user:'bisho395850@gmail.com',
    pass:'0969000583'

}});

function sendEmail(message,name,email,subject,callback) {
    const mailOption={
             email : email,
             to:'bisho395850@gmail.com',
             subject:subject,
             text :email+'\n'+name +'\n'+ message
             
         }
    transporter.sendMail(mailOption,function(error,info){
             if (error) {
                 console.log(error);
                 callback(false)
                 }else{
                     console.log(info.response)
                     callback(true)
                 }
         })
}

module.exports ={sendEmail}

    
       
        
       
        
        
