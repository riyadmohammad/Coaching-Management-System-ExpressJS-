var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();
// var Nexmo = require('nexmo');




// const nexmo = new Nexmo({
//     apiKey: 'YOURAPIKEY',
//     apiSecret: 'YOURAPISECRET'
//   }, { debug: true });


router.get('/',function(req,res){


    res.render('msg/alert_parent_msg.ejs');





});




// router.post('/', function (req, res) {
//    var data={

//     number:'',
//     topic:req.body.topic,
//     text:req.body.text,



//    };
  
//     nexmo.message.sendSms(
//       'YOURVURTUALNUMBER', number, text, { type: 'unicode' },
//       (err, responseData) => {
//         if(err) {
//           console.log(err);
//         } 
  
//         }
      
//     );
//   });




















module.exports = router;