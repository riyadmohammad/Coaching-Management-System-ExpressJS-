var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();


// router.get('/', function(req, res){	
// 	if(req.cookies['email'] != null){
// 		userModel.courseInfo (req.cookies['email'], function(results){
// 			console.log(results);
// 			console.log('data shows');
// 			res.render('view_course/view_course.ejs', {results: results});
// 		});
// 	}else{
// 		res.redirect('/logout');
// 	}
// });





router.get('/delete',function(req,res){

    var id={id:req.params.id};

    userModel.courseDelete(id, function(status){
        if(status){
           
           res.redirect('/dashbord');
       }else{
           res.send('/view_course');
       }
   });




});

module.exports = router;