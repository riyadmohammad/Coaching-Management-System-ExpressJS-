var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();

router.get('/',function(req,res){

    res.render('alert_parent/alert_parent.ejs');





});



module.exports = router;
