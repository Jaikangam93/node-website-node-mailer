var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET Contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

//send mail
router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
      user: 'your gmail ',
      pass:'yourpassword'
    }
  });

  var mailOptions = {
    from: '"Jaikangam Malangmei" <jaikangam12@gmail.com>',
    to: 'Jaikangam.malangmei@rippleslearning.com',
    subject: 'Hello from PCRepair',
    text: 'You have a submission from... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message,
    html: '<p>You have a submission from...</p> <ul><li>Name: '+req.body.name+'</li><li> Email: '+req.body.email+'</li><li> Message: '+req.body.message+'</li></ul>'
  }

  //insert the mailoption and send mail to it
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message send: ' +info.response);
    res.redirect('/')
  });
});


module.exports = router;
