// Credit:
// @theangryangel https://gist.github.com/theangryangel/5060446
// @Mantish https://gist.github.com/Mantish/6366642
// @anhnt https://gist.github.com/anhnt/8297229

var passport = require('passport');

var PassportAuthController = {

  login: function (req,res) {
    res.view({ message: req.flash('error') });
  },

  loginProcess: function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) return next(err);
      if (!user) {
        return res.view('passportauth/login', {
          email: req.body.email,
          message: info.message
        });
      }
      // set the user as a variable on the session
      req.session.user = user;

      // use passport's session management
      req.logIn(user, function(err) {
        if (err) return next(err);
        return res.redirect('/protected');
      });
    })(req, res, next);
  },

  logout: function(req,res) {
    // remove the user variable on the session
    delete(req.session.user);

    // passport's session management
    req.logout();
    res.redirect('/');
  },

  protected: function(req, res) {
    res.view();
  }

};

module.exports = PassportAuthController;