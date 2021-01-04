var cron = require('node-cron');
var nodemailer = require('nodemailer');
var express = require('express');
var app = express();


var port = process.env.PORT || 3000;


var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'iotapp420@gmail.com',
    pass: 'Indiacan420'
  }
});

var mailOptions = {
  from: 'iotapp420@gmail.com',
  to: 'aadityamonu67@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

cron.schedule('0 */15 * * * *', () => {
    console.log("schduled")
    transporter.sendMail(mailOptions, function (err, info) {
        if(err) 
          console.log(err);
        else
          console.log(info);
         });
    });

    app.get('/', function(req, res){
        res.send("Hello world!");
     });


app.listen(port);

