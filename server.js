var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var bcrypt = require('bcrypt-nodejs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var LocalStrategy = require("passport-local");
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');

var MongoDBStore = require('connect-mongodb-session')(session);

var vinyl = require("./models/vinyl");
var User = require("./models/user");
var Cart = require("./models/cart");


var seedwow = require('./seed/wow');
var seedfurniteur = require('./seed/furniteur');
var seedrug = require('./seed/rug');
var seedcuisin = require('./seed/cuisin');
var seedclean = require('./seed/clean');
var seedsale = require('./seed/saleH');
var seedheader = require('./seed/header');
var seedshipping = require('./seed/shipping');
var seedcoat = require('./seed/coat');
var seedsample = require('./seed/sample');


var wow = require('./models/wow');
var furniteur = require('./models/furniteur');
var rug = require('./models/rug');
var cuisin = require('./models/cuisin');
var clean = require('./models/clean');
var sale = require('./models/saleH');
var header = require('./models/header');
var shipping = require('./models/shipping');
var coat = require('./models/coat');
var sample = require('./models/sample');



mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
    
    require('./config/passport');

    app.use(validator());
    app.use(cookieParser());
    var store = new MongoDBStore({
      uri: 'mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority',
      collection: 'mySessions'
    });
    
    // Catch errors
    store.on('error', function(error) {
      console.log(error);
    });
    
    app.use(require('express-session')({
      secret: 'This is a secret',
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
      },
      store: store,
      // Boilerplate options, see:
      // * https://www.npmjs.com/package/express-session#resave
      // * https://www.npmjs.com/package/express-session#saveuninitialized
      resave: true,
      saveUninitialized: true
    }));
    
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    
//Takes user info and pass it to all templates rather than addind it to all tamplates one by one.
app.use(function(req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
  });

//Routes


app.set('views', path.join(__dirname, "views"));
app.set('view engine','ejs')

//bring bodypareser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/favicon',express.static(__dirname + '/favicon'))
app.use('/css',express.static(__dirname + '/css'))
app.use('/js',express.static(__dirname + '/js'))
app.use('/img',express.static(__dirname + '/img'))
app.use('/scss',express.static(__dirname + '/scss'))
app.use('/roboto',express.static(__dirname + '/font/roboto'))
app.use(express.static('node_modules'))
app.use(flash());
 seedwow(); seedfurniteur();  seedrug(); seedcuisin();  seedclean(); seedsale();
seedheader();  seedshipping(); 

//bring events routes
var routes = require('./routes/index');
var userRoutes = require("./routes/user");
var sportRoutes = require("./routes/sport");
var saleRoutes = require("./routes/sale");
var electricalsRoutes = require("./routes/electricals");



app.use('/', routes)
app.use("/user", userRoutes);
app.use("/sport", sportRoutes);
app.use("/sale", saleRoutes);
app.use("/sale/electricals", electricalsRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;
