let nodemailer = require("nodemailer");

export function mailSend() {
    console.log('ok')
    let tranporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "whiteshadowgaming04@gmail.com",
        pass: "password0004",
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    let mailOption = {
      from: "whiteshadowgaming04@gmail.com",
      to: "chzainali6363@gmail.com",
      subject: "Title",
      text: "That was easy!",
    };
    
    tranporter.sendMail(mailOption, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
}
