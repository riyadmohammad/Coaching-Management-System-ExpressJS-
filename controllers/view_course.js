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


router.get('/', function(req, res){	
	if(req.cookies['email'] != null){
		userModel.courseInfo (req.cookies['email'], function(results){
			console.log(results);
			console.log('data shows');
			res.render('view_course/view_course.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});




router.post('/', function(req,res){

	var edite_data={

			id:req.body.id,
			type:req.body.type,
			batch:req.body.batch,
			day:req.body.day,
			time:req.body.time,
			subject:req.body.subject,
			fees:req.body.fees,
			

	};



	console.log(edite_data);
	console.log('update DATA'),

        userModel.courseUpdate(edite_data, function(status){
            if(status){
               
               res.redirect('/view_course');
           }else{
               res.send('/');
           }
       });




});



router.get('/delete/:id',function(req,res){

    var id={id:req.params.id};

    userModel.courseDelete(id, function(status){
        if(status){
           
           res.redirect('/view_course');
       }else{
           res.send('/view_course');
       }
   });




});








module.exports = router;