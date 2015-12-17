var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '@gmail.com',
    pass: 'ilovecode1'
  }
});

function sendMail(mailData){
  console.log('sending email', mailData);

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: 'Fred Foo ✔ <bailey1.brandon@gmail.com>', // sender address
    to: 'bailey1.brandon@gmail.com', // list of receivers
    subject: 'Hello ✔ 😎😁😃', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
  };

// send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);

  });
}

/* GET Feedback page*/
router.get('/', function(req, res, next) {
  var mailData = req.query; 
  console.log('got request', mailData);
  sendMail(mailData);
});

module.exports = router;