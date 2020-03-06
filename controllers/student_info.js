var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');


router.get('/',function(req,res){

		res.render('student_info/student_info.ejs');



});






module.exports = router;