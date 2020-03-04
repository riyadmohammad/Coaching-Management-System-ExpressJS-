var db = require('./db');

module.exports= {




    teacherInsert: function(teacher_data,callback){



        var sql = "insert into teacherreg values(?,?,?,?,?,?,?)";
		db.execute(sql, [null,teacher_data.fullname, teacher_data.email, teacher_data.password, teacher_data.phoneNO, teacher_data.qualification, null ], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});


    },











}