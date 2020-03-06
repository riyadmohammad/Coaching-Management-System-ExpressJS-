var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');


/*router.get('*', function(req, res, next){
	if(req.cookies['email'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});*/


router.get('/',function(req,res){

    res.render('create_course/create_course.ejs');

});

router.post('/',function(req,res){


	var course_data={

			type:req.body.courseType,
			batch:req.body.batchType,
			day:req.body.day,
			time:req.body.myTime,
			fees:req.body.fees,
			subject:req.body.subject,
			email:req.cookies['email'],



	}


	userModel.courseInsert(course_data, function(status){
		if(status){
		   
		   res.redirect('/dashbord');
	   }else{
		   res.send('/create_course');
	   }
   });




});








module.exports = router;