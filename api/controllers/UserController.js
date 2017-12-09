/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   * `UserController.login()`
   */
  login: function (req, res) {
    if(req.body.username) {
        User.find({username:req.body.username, password: req.body.password, role: req.body.role}).exec(function (err, usersNamedFinn){
            if (err) {
              return res.serverError(err);
            }
            if(usersNamedFinn.length) {
              return res.json(usersNamedFinn);
            } else {
              res.json("Username or password doesn't match!");
            }
        });
      }
  },


  /**
   * `UserController.register()`
   */
  register: function (req, res) {
    if(req.body.email) {
        User.find({email:req.body.email}).exec(function (err, usersNamedFinn){
          if (err) {
            return res.serverError(err);
          }
          if(usersNamedFinn.length) {
            return res.json(usersNamedFinn);
          } else {
            User.create(req.body).exec(function (err, finn){
              if (err) { return res.serverError(err); }

              return res.ok();
            });
          }
        });

      }
  }
};

