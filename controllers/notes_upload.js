var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');





var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
var upload = multer({ storage: storage });


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

router.post('/',upload.single('fileForUp'),function(req, res) {



   
    if(req.cookies['email'] != null){
		userModel.teacherInfo (req.cookies['email'], function(results){

                if(results.length!=null){

                    
   
                var ninfo = {
                    filename: req.file.filename,
                    courseid: req.body.courseid,
                    id:results[0].tid,
                    title:'files',
                    aid:'',

                }

        console.log(ninfo);

        userModel.uploadFile(ninfo,function(status){
            if(status){
                 res.redirect('/notes_upload');
            }else{
                 res.redirect('/dashbord');
          
                }
       });
   
   

    }

                else{

                    res.redirect('/notice_upload');


                }

            
    
            })
        
        }
});
        
      




router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.render('/dashbord',{
                msg: err
            });
        }
        else{
            // console.log(req.file);
            // res.send('test');

            if(req.file == undefined){
                res.render('/dashbord',{
                    msg: 'Error:  No file Selected!',
                });
            }
            else{
                res.render('/dashbord',{
                    msg: 'File Uploaded',
                    file: `uploads/${req.file.filename}`,
                });
            }
        }
    })
});


    
    

module.exports = router;