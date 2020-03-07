var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();

router.get('/',function(req,res){

    res.render('marks/marks_entry.ejs');





});


router.post('/',function(req,res){


    var marks={
            xm:req.body.examType,
            xmName:req.body.examName,
            cid:req.body.courseId,
            id:req.body.user,
            mark:req.body.marks,
    };
    
    userModel.markup(marks, function(status){
        if(status){

            console.log(marks);
            console.log("data recive");
           
           res.redirect('/mark');
       }else{
        res.redirect('/dashbord');
          
       }
   });





});



module.exports = router;
