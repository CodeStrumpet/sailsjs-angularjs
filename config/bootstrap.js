/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

var async = require('async');

module.exports.bootstrap = function (cb) {


  // edit router:request listener functions so we can use passport policies with websocket requests
  // http://stackoverflow.com/questions/17365444/sails-js-passport-js-authentication-through-websockets
  var passport = require('passport'),
    initialize = passport.initialize(),
    session = passport.session(),
    http = require('http'),
    methods = ['login', 'logIn', 'logout', 'logOut', 'isAuthenticated', 'isUnauthenticated'];

  sails.removeAllListeners('router:request');
  sails.on('router:request', function(req, res) {
    initialize(req, res, function () {
      session(req, res, function (err) {
        if (err) {
          return sails.config[500](500, req, res);
        }
        for (var i = 0; i < methods.length; i++) {
          req[methods[i]] = http.IncomingMessage.prototype[methods[i]].bind(req);
        }
        sails.router.route(req, res);
      });
    });
  });



  // ********************************************
  // Create Dummy Todo Data
  // ********************************************
  function createDummyTodoData(done) {
    var dummyTodos = [
      {
        "title": "First todo",
        "isComplete": false
      },
      {
        "title": "Completed todo",
        "isComplete": true
      },
      {
        "title": "One more todo",
        "isComplete": false
      }
    ];
    Todo.count().exec(function(err, count) {
      if (err) return done(err);
      if (count > 0) return done();
      Todo.create(dummyTodos).exec(done);
    });
  }

  // ********************************************
  // Create User Data
  // ********************************************
  function createUserData(done) {
    var users = [
      {
        "username": "test",
        "password": "test123",
        "email": "foo@bar.com"
      }
    ];
    User.count().exec(function(err, count) {
      if (err) return done(err);
      if (count > 0) return done();
      User.create(users).exec(done);
    });
  }

  // ********************************************
  // Bootstrap Passport Middleware
  // Credit:
  // @theangryangel https://gist.github.com/theangryangel/5060446
  // @Mantish https://gist.github.com/Mantish/6366642
  // @anhnt https://gist.github.com/anhnt/8297229
  // @adityamukho https://gist.github.com/adityamukho/6260759
  // ********************************************
  function boostrapPassportMiddleware(done) {

    var passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy;

    // Passport session setup.
    // To support persistent login sessions, Passport needs to be able to
    // serialize users into and deserialize users out of the session. Typically,
    // this will be as simple as storing the user ID when serializing, and finding
    // the user by ID when deserializing.
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
      User.findOne(id).done(function (err, user) {
        done(err, user);
      });
    });


    // Use the LocalStrategy within Passport.
    // Strategies in passport require a `verify` function, which accept
    // credentials (in this case, a email and password), and invoke a callback
    // with a user object.
    passport.use(new LocalStrategy({
        usernameField: 'email'
      },
      function(email, password, done) {
        // Find the user by email. If there is no user with the given
        // email, or the password is not correct, set the user to `false` to
        // indicate failure and set a flash message. Otherwise, return the
        // authenticated `user`.
        User.findOneByEmail(email).done(function(err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false, { message: 'Unknown user ' + email }); }
          user.validPassword(password, function(err, res) {
            if (err) { return done(err); }
            if (!res) { return done(null, false, { message: 'Invalid password' }); }
            done(null, user);
          })
        });
      }
    ));

    done();
  }

  //
  // Bootstrap
  //
  async.parallel([
    createDummyTodoData,
    createUserData,
    boostrapPassportMiddleware
  ], cb);

};