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

    res.render('approve_student/approve_student.ejs');

});








module.exports = router;