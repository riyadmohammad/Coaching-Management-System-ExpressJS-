var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

var multer=require('multer');


var storage = multer.diskStorage({
	destination: function (req, file, callback) {
	  callback(null, 'uploads/')
	},
	filename: function (req, file, callback) {
	  callback(null, Date.now() + file.originalname)
	}
  })
  
  var upload = multer({ storage: storage })


/*router.get('*', function(req, res, next){
	if(req.cookies['email'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});*/


// router.get('/',function(req,res){

//     res.render('noteup/notes_upload.ejs');

// });



router.get('/', function(req, res){	
	if(req.cookies['email'] != null){
		userModel.courseInfo (req.cookies['email'], function(results){
			console.log(results);
			console.log('data shows');
			res.render('noteup/notes_upload.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});


// router.post('/',function(req,res){


// 	if(req.cookies['email'] != null){
// 		userModel.teacherInfo (req.cookies['email'], function(results){

//                 if(results.length!=null){

                    
//     var noote_data={

       


        
//         };

//         console.log(noote_data);

//         userModel.noteInsert(noote_data, function(status){
//             if(status){
               
//                res.redirect('/dashbord');
//            }else{
//                res.send('/');
//            }
//        });









//                 }

//                 else{

//                     res.redirect('/notice_upload');


//                 }

            
//     });
              
// 	}










// });


router.post('/upload', upload.single('fileForUp'), function(req, res, next) {
	var fileinfo = req.file;
	var title = req.body.title;
	console.log(title);
	res.send(fileinfo);
  });







module.exports = router;