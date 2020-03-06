var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();

router.get('/',function(req,res){

    res.render('noticeup/notice_upload.ejs');





});
module.exports = router;