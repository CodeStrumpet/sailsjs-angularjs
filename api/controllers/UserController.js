/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var consts = require('../../assets/linker/js/sharedConstants').consts;

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/user/new`
   */
   new: function (req, res) {
    
    res.view();
    /*
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
    */
  },


  /**
   * Action blueprints:
   *    `/user/create`
   */
   create: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },

  create: function(req, res, next) {

    var userObj = {
      email: req.param('email'),
      password: req.param('password')
    };

    // // check if there is an existing user logged in
    // if (req.user) {
    //   if (req.user.role == consts.ACCESS_ROLES.admin) {
    //     console.log('logged in user is an admin');
    //   }
    // }

    // Create a User with the params sent from 
    // the sign-up form --> new.jade
    User.create(userObj, function userCreated(err, user) {

      // // If there's an error
      // if (err) return next(err);

      if (err) {
        console.log(JSON.stringify(err));
        return res.view('user/new', {
          email: req.param('email'),          
          message: err
        });
      }

      req.logIn(user, function(err) {
        if (err) {
          return next(err);      
        } else {
          return res.redirect('/');
        }
      });
    });
  },



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
