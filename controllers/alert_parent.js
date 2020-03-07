var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();

// router.get('/',function(req,res){

//     res.render('alert_parent/alert_parent.ejs');





// });


router.get('/', function(req, res){	
	if(req.cookies['email'] != null){
		userModel.studentInfo( function(results){
			console.log(results);
			console.log('data shows');
			res.render('alert_parent/alert_parent.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});












module.exports = router;
