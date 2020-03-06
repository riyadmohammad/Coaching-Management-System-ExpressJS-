var express = require('express');
var router =express.Router();


router.get('/',function(req,res){

    res.render('signup/register.ejs');





});


router.post('/',function(req,res){


                var teacher_data={

                fullname: req.body.fname,
                email: req.body.email,
                password: req.body.password,
                phoneNO: req.body.TPhoneNumber,
                qualification: req.body.qualification_details,

                };

                userModel.teacherInsert(teacher_data, function(status){
                    if(status){
                       
                       res.redirect('/login');
                   }else{
                       res.send('/');
                   }
               });



});





module.exports = router;