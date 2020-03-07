var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();


router.get('/',function(req,res){

    res.render('signup/register.ejs');





});


router.post('/',function(req,res){


                var student_data={

                    name:req.body.fname,
                    school:req.body.sname,
                    email:req.body.email,
                    password:req.body.password,
                    sphoneNo:req.body.SPhoneNumber,
                    pname:req.body.pname,
                    ppnoneNo:req.body.PPhoneNumber,
                    spemail:'',
                    status:'',

                
                };

                userModel.studentInsert(student_data, function(status){
                    if(status){

                        console.log(student_data);
                        console.log("data recive");
                       
                       res.redirect('/login');
                   }else{
                       res.send('/');
                   }
               });



});





module.exports = router;