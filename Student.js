var User = require("./User");

function Student(id, name, age){
	User.apply(this, [id, name, age]);
	this.study = function(resp){

		resp.write(this.name + "学习")
	}

};

module.exports = Student;

