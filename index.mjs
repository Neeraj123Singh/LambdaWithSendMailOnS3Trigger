
import nodemailer  from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'neeraj190499@gmail.com',
      pass: 'eijznwkhacmiylsi'
    }
  });

const email_to = 'neeraj.singh@dimiour.io';

const sendEmail = function (emailBody) {
    let mailOptions= {
            from: process.env.FROM_EMAIL,
            to: email_to,
            subject: emailBody.subject,
            text: emailBody.body
          };
          
    
   
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response);
        }
      });
}


export const handler = async (event, context) => {
    // const bucket = event.Records[0].s3.bucket.name;
    // const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    // const params = {
    //     Bucket: bucket,
    //     Key: key,
    // }; 
    try {
      sendEmail({subject:'A file is Uploaded to you bucket',body:`A file is uploaded to your buket with this information and bucket name`})
       // sendEmail({subject:'A file is Uploaded to you bucket',body:`A file is uploaded to your buket with this information and bucket name ${event.Records[0].s3.bucket.name}`})
    } catch (err) {
        console.log(err);
    }
};

handler(5,4);