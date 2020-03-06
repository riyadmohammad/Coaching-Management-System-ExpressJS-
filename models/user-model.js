var db = require('./db');

module.exports= {




	teacherInsert: function(teacher_data,callback){



        var sql = "insert into teacherreg values(?,?,?,?,?,?,?)";
		db.execute(sql, [null,teacher_data.fullname, teacher_data.email, teacher_data.password, teacher_data.phoneNo, teacher_data.qualification, teacher_data.satus], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});


	},



	
	teacherLogin: function(user,callback){

		var sql ="SELECT * FROM teacherreg where temail=? and  	tpass =?";
		db.getResults(sql, [user.email, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},



	teacherInfo:function(email, callback){
        var sql = "select * from teacherreg where temail = ?";
        db.getResults(sql, [email],function(results){
            if(results){
                callback(results);
               
            }
            else{
                callback([]);

            }
        });
        
    },





	
teacherUpdate: function(teacher,callback){


	console.log(teacher);
	console.log('data recive');
  
	var sql = "update teacherreg set tname=?,tpass=? where temail=?";
	db.execute(sql, [teacher.name, teacher.password,teacher.email], function(results){
		if(results){
			console.log('DATA NAI');
			callback(true);
		   
		}
		else{

			callback(false);
		}
	});
},



courseInsert:function(course_data,callback){



	var sql = "insert into courses values(?,?,?,?,?,?,?,?)";
	db.execute(sql, [null, course_data.type,course_data.batch,course_data.fees,course_data.time,course_data.day,course_data.subject,course_data.email ],function(status){
		if(status){
			callback(true);
		}else{
			callback(false);
		}
	});


},


courseInfo:function(email, callback){

	var sql = "select * from courses where temail= ?";
	db.getResults(sql, [email],function(results){
		if(results){
			callback(results);
			console.log(results);
			console.log('dada nai');
		   
		}
		else{
			callback([]);

		}
	});
	
},




noticeInsert:function(notice_data,callback){

	console.log(notice_data);
	console.log('data recive');



	var sql = "insert into notice values(?,?,?,?,?,?)";
	db.execute(sql, [null,notice_data.topic,notice_data.details,notice_data.date,notice_data.adminid, notice_data.id],function(status){
		if(status){
			callback(true);
		}else{
			callback(false);
		}
	});


},









noteInsert:function(note_data,callback){

	console.log(note_data);
	console.log('data recive');



	var sql = "insert into notes values(?,?,?,?,?,?)";
	db.execute(sql, [null,notice_data.topic,notice_data.details,notice_data.date,notice_data.adminid, notice_data.id],function(status){
		if(status){
			callback(true);
		}else{
			callback(false);
		}
	});


},




   
	











}