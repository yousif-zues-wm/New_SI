/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res){
		User.findOne({email: req.param('email')}).exec(function(err, user){
			if (err) {
				return res.serverError(err)
			}
			//Add login handling
			
		})
	},
	register: function(err, user){
		User.findOne({email: req.param('email')}).exec(function(err, user){
			var userExist = user == undefined ? false : true
			if(err){
				res.serverError(err)
			}
			if (userExist) {
				res.send({"Message": "User Already Exists"})
			}
			else{
				User.create(user).exec(function(err, newUser){
					if (err) {
						return ress.serverError(err)
					}
					//Add user signin handling and password hashing

					res.redirect('/')
				})
			}
		})
	}
};
