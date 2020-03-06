var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();

router.get('/',function(req,res){

    res.render('login/login.ejs');





});





router.post('/', function(req,res){

    var user={


        email:req.body.email,
        password:req.body.password,



    };

    userModel.teacherLogin(user, function(status){
        if(status){
           res.cookie('email', req.body.email);
           res.redirect('/dashbord');
       }else{
           res.send('invalid email/password');
       }
   });




});






module.exports = router;