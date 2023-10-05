const mailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = mailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sjasvin9493@gmail.com',
      pass: 'gvmz eecg xezc uzsz',
    },
  });

exports.emailSender = async (email) => {
    var mailOptions = {
        from: "sjasvin9493@gmail.com", // Sender's email address
        to: email, // Recipient's email address (the one just registered)
        subject: 'Welcome to VMA - Registration Confirmation',
        text: 'Thank you for registering with VMA. Your registration is successful!',
    };

    try{
        await transporter.sendMail(mailOptions);
        console.log("send successfully")
    }catch(error){
        console.log(error);
    }
};



