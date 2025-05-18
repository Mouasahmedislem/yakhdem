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


var User = require("./models/user");
var Cart = require("./models/cart");
require('dotenv').config();
const nodemailer = require('nodemailer');


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
var seedtool = require('./seed/tool');
var seedpinksap = require('./seed/pinksap');
var seedpinkpon = require('./seed/pinkpon');
var seedpinklit = require('./seed/pinklit');
var seedpinkcool = require('./seed/pinkcool');
var seedyallaw = require('./seed/yallaw');
var seedyellow = require('./seed/yellow');
var seedgreya = require('./seed/greya');
var seedgreyb = require('./seed/greyb');
var seedgreyc = require('./seed/greyc');
var seedgreyd = require('./seed/greyd');
var seedgreye = require('./seed/greye');
var seedgreyf = require('./seed/greyf');
var seedgreena = require('./seed/greena');
var seedgreenb = require('./seed/greenb');
var seedgreenc = require('./seed/greenc');
var seedgreend = require('./seed/greend');
var seedgreene = require('./seed/greene');
var seedgreenf = require('./seed/greenf');
var seedgreeng = require('./seed/greeng');
var seedgreenh = require('./seed/greenh');
var seedbluea = require('./seed/bluea');
var seedblueb = require('./seed/blueb');
var seedbluec = require('./seed/bluec');
var seedblued = require('./seed/blued');
var seedbeigea = require('./seed/beigea');
var seedbeigeb = require('./seed/beigeb');
var seedbeigec = require('./seed/beigec');
var seedbeiged = require('./seed/beiged');
var seedbeigee = require('./seed/beigee');
var seedbeigef = require('./seed/beigef');
var seedbeigeg = require('./seed/beigeg');
var seedbeigeh = require('./seed/beigeh');
var seedbeigei = require('./seed/beigei');
var seedbeigek = require('./seed/beigek');
var seedbeigel = require('./seed/beigel');
var seedbeigem = require('./seed/beigem');
var seedbeigen = require('./seed/beigen');
var seedbeigeo = require('./seed/beigeo');
var seedbeigep = require('./seed/beigep');
var seedbeigeq = require('./seed/beigeq');
var seedbeiger = require('./seed/beiger');
var seedbeiges = require('./seed/beiges');
var seedbeiget = require('./seed/beiget');
var seedbeigej = require('./seed/beigea');




var newsletter = require('./models/newsletter');
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
var tool = require('./models/tool');
var pinksap = require('./models/pinksap');
var pinkpon = require('./models/pinkpon');
var pinklit = require('./models/pinklit');
var pinkcool = require('./models/pinkcool');
var yallaw = require('./models/yallaw');
var yellow = require('./models/yellow');
var greya = require('./models/greya');
var greyb = require('./models/greyb');
var greyc = require('./models/greyc');
var greyd = require('./models/greyd');
var greye = require('./models/greye');
var greyf = require('./models/greyf');
var greena = require('./models/greena');
var greenb = require('./models/greenb');
var greenc = require('./models/greenc');
var greend = require('./models/greend');
var greene = require('./models/greene');
var greenf = require('./models/greenf');
var greeng = require('./models/greeng');
var greenh = require('./models/greenh');
var bluea = require('./models/bluea');
var blueb = require('./models/blueb');
var bluec = require('./models/bluec');
var blued = require('./models/blued');
var beigea = require('./models/beigea');
var beigeb = require('./models/beigeb');
var beigec = require('./models/beigec');
var beiged = require('./models/beiged');
var beigee = require('./models/beigee');
var beigef = require('./models/beigef');
var beigeg = require('./models/beigeg');
var beigeh = require('./models/beigeh');
var beigei = require('./models/beigei');
var beigej = require('./models/beigej');
var beigek = require('./models/beigek');
var beigel = require('./models/beigel');
var beigem = require('./models/beigem');
var beigen = require('./models/beigen');
var beigeo = require('./models/beigeo');
var beigep = require('./models/beigep');
var beigeq = require('./models/beigeq');
var beiger = require('./models/beiger');
var beiges = require('./models/beiges');
var beiget = require('./models/beiget');



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
//var sportRoutes = require("./routes/sport");
//var saleRoutes = require("./routes/sale");
//var electricalsRoutes = require("./routes/electricals");



app.use('/', routes)
app.use("/user", userRoutes);
//app.use("/sport", sportRoutes);
//app.use("/sale", saleRoutes);
//app.use("/sale/electricals", electricalsRoutes);


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
