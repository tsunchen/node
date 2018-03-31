var func = require("../functions/funcall");

module.exports = {

	hello: function(req, resp) {

		function recall(data) {

			response.write(data);
			response.end('');
		}

		//resp.write("登录.api");
		func.readfile('./public/hello.html', recall);

	},


	register: function(req, resp) {

		function recall(data) {

			response.write(data);
			response.end('');
		}

		//resp.write("注册.api");
		func.readfile('./public/register.html', recall);


	}



}
