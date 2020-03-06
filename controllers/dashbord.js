var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');


router.get('*', function(req, res, next){
	if(req.cookies['email'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

/* 
router.get('/',function(req,res){

	res.render('dashbord/teacher_dashboard.ejs');
	
	

}); */




router.get('/', function(req, res){	
	if(req.cookies['email'] != null){
		userModel.teacherInfo (req.cookies['email'], function(results){
			console.log(results);
			res.render('dashbord/teacher_dashboard.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});



// router.get('/:id',function(req,res){

//     userModel.teacherInfo(function(results){
// 		if(results.length > 0){
// 			res.render('dashbord/teacher_dashboard.ejs', {results: results});
// 		}else{
// 			res.redirect('/home');
// 		}
// 	});
	   
// 	console.log('results');


// });

router.post('/',function(req,res){

	var teacher={

		name : req.body.name,
		email:req.body.email,
		password:req.body.password,



	}

	userModel.teacherUpdate(teacher,function(results){

		if(results){
			res.redirect('/dashbord');
		}
		else{
			res.redirect('/dashbord');


		}
	})





});






module.exports = router;