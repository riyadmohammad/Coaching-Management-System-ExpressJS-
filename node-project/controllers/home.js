var express = require('express');
var router =express.Router();


router.get('/',function(req,res){

    res.render('home/index.ejs');





});
router.get('/home',function(req,res){

    res.render('home/index.ejs');





});


router.get('/',function(req,res){

    res.render('login/login.ejs');





});







module.exports = router;