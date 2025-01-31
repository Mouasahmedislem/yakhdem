var express = require('express')
var router = express.Router()

const Order = require('../models/order');
const middleware = require('../middleware');
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

if (process.env.NODE_ENV !== 'production') {
    /* setting up enviroment variables */
    require('dotenv').config({path: '.env'});
    }





var furniteur = require('../models/furniteur');
var rug = require('../models/rug');
var cuisin = require('../models/cuisin');
var clean = require('../models/clean');
var coat = require('../models/coat');
var sample = require('../models/sample');


router.get("/sale/furniteur", function(req, res){
    furniteur.find({}, function(err, furniteurs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/furniteur", {furniteurs: furniteurs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-furniteur/:id", function(req, res){
    var furniteurId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    furniteur.findById(furniteurId, function(err, furniteur){
        if(err){
            return res.redirect("/sale/furniteur");
        }
        cart.add(furniteur, furniteur.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/furniteur");
    });
});



router.get("/sale/rug", function(req, res){
    rug.find({}, function(err, rugs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/rug", {rugs: rugs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-rug/:id", function(req, res){
    var rugId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    rug.findById(rugId, function(err, rug){
        if(err){
            return res.redirect("/sale/rug");
        }
        cart.add(rug, rug.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/rug");
    });
});


router.get("/sale/cuisin", function(req, res){
    cuisin.find({}, function(err, cuisins){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/cuisin", {cuisins: cuisins,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-cuisin/:id", function(req, res){
    var cuisinId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    cuisin.findById(cuisinId, function(err, cuisin){
        if(err){
            return res.redirect("/sale/cuisin");
        }
        cart.add(cuisin, cuisin.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/cuisin");
    });
});


router.get("/sale/clean", function(req, res){
    clean.find({}, function(err, cleans){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/clean", {cleans: cleans,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-clean/:id", function(req, res){
    var cleanId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    clean.findById(cleanId, function(err, clean){
        if(err){
            return res.redirect("/sale/clean");
        }
        cart.add(clean, clean.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/clean");
    });
});

router.get("/sale/coat", function(req, res){
    coat.find({}, function(err, coats){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/coat", {coats: coats,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-coat/:id", function(req, res){
    var coatId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    coat.findById(coatId, function(err, coat){
        if(err){
            return res.redirect("/sale/coat");
        }
        cart.add(coat, coat.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/coat");
    });
});

router.get("/sale/sample", function(req, res){
    sample.find({}, function(err, samples){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/sample", {samples: samples,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-sample/:id", function(req, res){
    var sampleId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    sample.findById(sampleId, function(err, sample){
        if(err){
            return res.redirect("/sale/sample");
        }
        cart.add(sample, sample.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/sample");
    });
});




var Cart = require("../models/cart");
var wow = require('../models/wow');
var sale = require('../models/saleH');
var header = require('../models/header');
var shipping = require('../models/shipping');




router.get("/return", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("event/return", {headers:headers});
        }
    });
});

router.get("/sale/ROBE1", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/ROBE1", {headers:headers});
        }
    });
});

router.get("/sale/ROBE2", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/ROBE2", {headers:headers});
        }
    });
});

router.get("/onecoat/yallaw", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/yallaw", {headers:headers});
        }
    });
});

router.get("/onecoat/white01", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/white01", {headers:headers});
        }
    });
});

router.get("/onecoat/taupe", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/taupe", {headers:headers});
        }
    });
});

router.get("/onecoat/red01", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/red01", {headers:headers});
        }
    });
});

router.get("/onecoat/pink13", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink13", {headers:headers});
        }
    });
});

router.get("/onecoat/pink09", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink09", {headers:headers});
        }
    });
});

router.get("/onecoat/grey01", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/grey01", {headers:headers});
        }
    });
});

router.get("/onecoat/green18", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green18", {headers:headers});
        }
    });
});

router.get("/onecoat/green08", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green08", {headers:headers});
        }
    });
});

router.get("/onecoat/bleu09", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/bleu09", {headers:headers});
        }
    });
});

router.get("/onecoat/beig02", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beig02", {headers:headers});
        }
    });
});
router.get("/myfixateur/fixateur", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("myfixateur/fixateur", {headers:headers});
        }
    });
});

router.get("/paintellomac/paintellomac", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("paintellomac/paintellomac", {headers:headers});
        }
    });
});
router.get("/onecoat/pink02", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink02", {headers:headers});
        }
    });
});
router.get("/onecoat/pink03", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink03", {headers:headers});
        }
    });
});
router.get("/onecoat/pink04", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink04", {headers:headers});
        }
    });
});
router.get("/onecoat/pink07", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink07", {headers:headers});
        }
    });
});
router.get("/onecoat/yellow01", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/yellow01", {headers:headers});
        }
    });
});
router.get("/onecoat/grey14", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/grey14", {headers:headers});
        }
    });
});
router.get("/onecoat/grey03", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/grey03", {headers:headers});
        }
    });
});
router.get("/onecoat/green09", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green09", {headers:headers});
        }
    });
});
router.get("/onecoat/green13", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green13", {headers:headers});
        }
    });
});
router.get("/onecoat/beige01", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige01", {headers:headers});
        }
    });
});
router.get("/onecoat/BEIGE09", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/BEIGE09", {headers:headers});
        }
    });
});
router.get("/onecoat/bleue14", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/bleue14", {headers:headers});
        }
    });
});
router.get("/onecoat/blue15", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/blue15", {headers:headers});
        }
    });
});


router.get("/favicon.ico", function(req, res){
    
    
        res.render("views/favicon");
    
});

router.get('/shop', (req, res)=> {
            if(!req.session.cart) {
                 res.render('event/shop', {products: null});
            }
            var cart = new Cart(req.session.cart);
            shipping.find(function(err, shippings) {
             res.render('event/shop', {products: cart.generateArray(),shippings:shippings, totalPrice: cart.totalPrice, price: shipping.price});
        });
 });

               


    
  router.get('/', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  header.find({}, function(err, headers){
  
    if(err){
        console.log(err);
    }
    else{
    res.render('event/home', { headers:headers , successMsg: successMsg });
}
 });
});


        router.get("/wow", function(req, res){
            wow.find({}, function(err, wows){
            header.find({}, function(err, headers){

                if(err){
                    console.log(err);
                }
                else{
                    res.render("wow/wowdeal", {wows: wows, headers:headers});
                }
            });
            });
        });
       
        router.get("/add-to-cart-wow/:id", function(req, res){
            var wowId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            wow.findById(wowId, function(err, wow){
                if(err){
                    return res.redirect("/wow");
                }
                cart.add(wow, wow.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/wow");
            });
        });

        router.get('/reduce/:id', function (req, res, next) {
            const productId = req.params.id;
            const cart = new Cart(req.session.cart ? req.session.cart : {});
            cart.reduceByOne(productId);
            req.session.cart = cart;
            res.redirect('/shop');
        });
        
        router.get('/remove/:id', function (req, res, next) {
            const productId = req.params.id;
            const cart = new Cart(req.session.cart ? req.session.cart : {});
            cart.removeItem(productId);
            req.session.cart = cart;
            res.redirect('/shop');
        });
        
        router.get('/checkout', middleware.isLoggedIn, function(req, res, next) {
            if (!req.session.cart) {
              return res.redirect('event/shop', {products: null});
            }
            var cart = new Cart(req.session.cart);
            var errMsg = req.flash('error')[0];
            res.render('event/checkout', { totalPrice: cart.totalPrice, errMsg: errMsg, noError: !errMsg });
          });
          
          router.post('/checkout', function(req, res, next) {
            if (!req.session.cart) {
              return res.redirect('event/shop', {products: null});
            }
            var cart = new Cart(req.session.cart);
           
              let order = new Order({
                user: req.user, // passport places signed in user in req object\
                cart: cart,
                address: req.body.address,
                name: req.body.name,
                wilaya: req.body.wilaya,
                commune: req.body.commune,
                numero: req.body.numero
                
              });
              order.save(function(err, result) {
                if (err) {
                    
                    req.flash('error', err.message);
                    
                 return res.redirect('/checkout');
                }
                else{
                req.flash('success', 'Successfully bought product!');
                req.session.cart = null;
                res.redirect('/')};
              });
           
          })
          


module.exports = router
