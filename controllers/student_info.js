var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');



router.get('/', function(req, res){	
	if(req.cookies['email'] != null){
		userModel.studentInfo( function(results){
			console.log(results);
			console.log('data shows');
			res.render('student_info/student_info.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});






module.exports = router;