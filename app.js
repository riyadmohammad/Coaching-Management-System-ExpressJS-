
//internal

var express=require('express');
var bodyParser=require('body-parser');
var ejs=require('ejs');
var cookie=require('cookie-parser');
//var validator=require('express-validator');





//extrnal
var home=require('./controllers/home');
var login=require('./controllers/login');
var signup =require('./controllers/signup');
var courses =require('./controllers/courses');
var notice =require('./controllers/notice');
var teacher_reg= require('./controllers/teacher_reg');
var dashbord =require('./controllers/dashbord');
var create_course=require('./controllers/create_course');
var view_course=require('./controllers/view_course');

var router =express.Router();

var app=express();





app.set('view engin','ejs');

app.use(bodyParser.urlencoded({extended:true}));
//app.use(validator());
app.use(cookie());


//middlewers

app.use('/home',home);
app.use('/login',login);
app.use('/signup', signup);
app.use('/courses', courses);
app.use('/notice', notice);
app.use('/teacher_reg', teacher_reg);
app.use('/dashbord',dashbord);
app.use('/create_course',create_course);
app.use('/view_course',view_course);



app.use('/assets', express.static('assets'));















app.get('/', function(req,res){


    res.render('home/index.ejs');
       


});



app.listen('5000', function(){


    console.log("       Welcome sarver start    ");



});

module.exports = router;
