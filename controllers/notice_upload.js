var express = require('express');
var userModel = require.main.require('./models/user-model');
var router =express.Router();

var datetime = new Date();
    console.log(datetime);







router.get('/', function(req, res){	
	if(req.cookies['email'] != null){
		userModel.teacherInfo (req.cookies['email'], function(results){
			console.log(results);
			res.render('noticeup/notice_upload.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});



router.post('/',function(req,res){




    if(req.cookies['email'] != null){
		userModel.teacherInfo (req.cookies['email'], function(results){

                if(results.length!=null){

                    
    var notice_data={

        date:datetime,
        topic:req.body.topic,
        details:req.body.details,
        id:results[0].tid,
        adminid:'',


        
        };

        console.log(notice_data);

        userModel.noticeInsert(notice_data, function(status){
            if(status){
               
               res.redirect('/dashbord');
           }else{
               res.send('/');
           }
       });









                }

                else{

                    res.redirect('/notice_upload');


                }

            
    });
              
	}


    // var notice_data={

    //     date:datetime,
    //     topic:req.body.topic,
    //     details:req.body.details,
    //     id:tid,
    //     adminid:'',


        
    //     };

    //     console.log(notice_data);

    //     userModel.noticeInsert(notice_data, function(status){
    //         if(status){
               
    //            res.redirect('/dashbord');
    //        }else{
    //            res.send('/');
    //        }
    //    });






});






















module.exports = router;