var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "https://www.paintello.uk/auth/facebook/callback",
  profileFields: ['id', 'emails', 'name'] // Request email, first and last name
}, async function(accessToken, refreshToken, profile, done) {
  try {
    const existingUser = await User.findOne({ 'facebookId': profile.id });

    if (existingUser) return done(null, existingUser);

    // If not found, create new user
    const newUser = new User({
      facebookId: profile.id,
      email: profile.emails?.[0].value || `user_${profile.id}@facebook.com`,
      firstName: profile.name.givenName || '',
      lastName: profile.name.familyName || '',
      numero: '', // Facebook doesn't provide phone number
      isAdmin: false
    });

    await newUser.save();
    return done(null, newUser);
  } catch (err) {
    return done(err, null);
  }
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id).exec();
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


// sign up logic
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  req.assert('email', 'invalid email').notEmpty().isEmail();
  req.assert('password', 'invalid password (must be more than 4 characters)').notEmpty().isLength({ min: 4 });
  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    console.log(errors);
    errors.forEach(function(error) {
      messages.push(error.msg);
    });
    return done(null, false, req.flash('error', messages));
  }

  User.findOne({ 'email': email }, function(err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, false, { message: 'This email is already used' });
    }

    var newUser = new User();
    newUser.email = email;
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.numero = req.body.numero;
    newUser.password = newUser.encryptPassword(password);
    newUser.isAdmin = true;

    newUser.save(function(err, result) {
      if (err) {
        return done(err);
      }

      // ✅ Set session after successful signup
      req.session.user = {
        email: newUser.email,
        numero: newUser.numero,
        firstName: newUser.firstName,
        lastName: newUser.lastName
      };

      return done(null, newUser);
    });
  });
}));

// sign in logic
passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  req.assert('email', 'invalid email').notEmpty().isEmail();
  req.assert('password', 'invalid password (must be more than 4 characters)').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    console.log(errors);
    errors.forEach(function(error) {
      messages.push(error.msg);
    });
    return done(null, false, req.flash('error', messages));
  }

  User.findOne({ 'email': email }, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'No user found.' });
    }

    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Wrong password.' });
    }

    // ✅ Set session after successful login
    req.session.user = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName
    };

    return done(null, user);
  });
}));
