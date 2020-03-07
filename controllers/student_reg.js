var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();



router.get('/',function(req,res){

    res.render('signup/register.ejs');





});

router.post('/',function(req,res){


            var student_data={



            };


            userModel.teacherInsert(teacher_data,function(status){

                    if(status){

                        res.render('login/login.ejs');


                    }
                    else
                    {
                        res.redirect('/student_reg');

                    

                    }


            });
            






});






module.exports = router;