var express = require('express');
var router =express.Router();


router.get('/',function(req,res){

    res.render('notice/notice.ejs');





});
router.get('/home',function(req,res){

    res.render('home/index.ejs');





});





module.exports = router;