var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();



router.get('/',function(req,res){

    res.render('signup/teacher_reg.ejs');





});

router.post('/',function(req,res){


            var teacher_data={


                fullname: req.body.fname,
                email: req.body.email,
                password: req.body.password,
                phoneNo :req.body.TPhoneNumber,
                qualification: req.body.qualification_details,

            };


            userModel.teacherInsert(teacher_data,function(status){

                    if(status){

                        res.render('signup/teacher_reg.ejs');

                        


                    }
                    else
                    {
                        res.redirect('/teacher_reg');

                    

                    }


            });
            






});






module.exports = router;