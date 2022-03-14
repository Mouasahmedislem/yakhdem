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
var seedvinyl = require("./seed/vinyl");
var seedWall = require('./seed/wallpaper');
var seedsatin = require('./seed/satin');
var seedkitchen = require('./seed/kitchen');
var seedgliter = require('./seed/gliter');
var seedspray = require('./seed/spray');
var seeddeco = require('./seed/deco');
var seedfloor = require('./seed/floor');
var seedwow = require('./seed/wow');
var seedtool = require('./seed/tool');
var seedfitnes = require('./seed/fitnes');
var seedtravel = require('./seed/travel');
var seedscooter = require('./seed/scooter');
var seedfurniteur = require('./seed/furniteur');
var seedelectrical = require('./seed/electrical');
var seedrug = require('./seed/rug');
var seedcuisin = require('./seed/cuisin');
var seeddecor = require('./seed/decor');
var seedcurtain = require('./seed/curtain');
var seedbedding = require('./seed/bedding');
var seedsoft = require('./seed/soft');
var seedstation = require('./seed/station');
var seedclean = require('./seed/clean');
var seedhome = require('./seed/home');
var seedhome1 = require('./seed/home1');
var seedpaint = require('./seed/paintH');
var seedsport = require('./seed/sportH');
var seedsale = require('./seed/saleH');
var seeddeal = require('./seed/dealH');
var seedinterior = require('./seed/interior');
var seedheader = require('./seed/header');
var seedblander = require('./seed/eblander');
var seedcleaning = require('./seed/ecleaning');
var seedcoffee = require('./seed/ecoffee');
var seedfood = require('./seed/efood');
var seedgaming = require('./seed/egaming');
var seedgarden = require('./seed/egarden');
var seedhealth = require('./seed/ehealth');
var seediron = require('./seed/eiron');
var seedmicro = require('./seed/emicro');
var seedmobile = require('./seed/emobile');
var seedvacuum = require('./seed/evacuum');
var seedshipping = require('./seed/shipping');



var Wall = require('./models/wallpaper');
var satin = require('./models/satin');
var kitchen = require('./models/kitchen');
var gliter = require('./models/gliter');
var spray = require('./models/spray');
var deco = require('./models/deco');
var floor = require('./models/floor');
var wow = require('./models/wow');
var tool = require('./models/tool');
var fitnes = require('./models/fitnes');
var scooter = require('./models/scooter');
var travel = require('./models/travel');
var furniteur = require('./models/furniteur');
var electrical = require('./models/electrical');
var rug = require('./models/rug');
var cuisin = require('./models/cuisin');
var decor = require('./models/decor');
var curtain = require('./models/curtain');
var bedding = require('./models/bedding');
var soft = require('./models/soft');
var station = require('./models/station');
var clean = require('./models/clean');
var home = require('./models/home');
var home1 = require('./models/home1');
var paint = require('./models/paintH');
var sport = require('./models/sportH');
var sale = require('./models/saleH');
var deal = require('./models/dealH');
var interior = require('./models/interior');
var header = require('./models/header');
var blander = require('./models/blander');
var cleaning = require('./models/cleaning');
var coffee = require('./models/coffee');
var food = require('./models/food');
var gaming = require('./models/gaming');
var garden = require('./models/garden');
var health = require('./models/health');
var iron = require('./models/iron');
var micro = require('./models/micro');
var mobile = require('./models/mobile');
var vacuum = require('./models/vacuum');
var shipping = require('./models/shipping');




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
app.use('/roboto',express.static(__dirname + 'font/roboto'))
app.use(express.static('node_modules'))
app.use(flash());
seedvinyl(); seedWall(); seedsatin(); seedkitchen(); seedgliter(); seedspray(); seeddeco(); seedfloor(); seedwow();
seedtool(); seedscooter(); seedfitnes(); seedtravel(); seedfurniteur(); seedelectrical(); seedrug();
seedcuisin(); seeddecor(); seedsoft(); seedbedding(); seedcurtain(); seedstation(); seedclean(); seedhome();
seedhome1(); seedpaint(); seedsport(); seedsale(); seeddeal(); seedinterior(); seedblander(); seedcleaning(); seedcoffee();seedfood();seedgaming();seedgarden();seedhealth();seediron();seedmicro();seedmobile();seedvacuum();
seedheader();
seedshipping(); 

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
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;