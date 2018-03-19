var User = require("./User");

function Teacher(id, name, age){
	User.apply(this, [id, name, age]);
	this.teach = function(resp){

		resp.write(this.name + "授课")
	}

};

module.exports = Teacher;

