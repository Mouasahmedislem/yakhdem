var express = require('express')
var router = express.Router()

const Order = require('../models/order');
const middleware = require('../middleware');
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

if (process.env.NODE_ENV !== 'production') {
    /* setting up enviroment variables */
    require('dotenv').config({path: '.env'});
    }



var scooter = require('../models/scooter');
var fitnes = require('../models/fitnes');
var travel = require('../models/travel');

router.get("/sport/scooter", function(req, res){
    scooter.find({}, function(err, scooters){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sport/scooter", {scooters: scooters,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-scooter/:id", function(req, res){
    var scooterId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    scooter.findById(scooterId, function(err, scooter){
        if(err){
            return res.redirect("/sport/scooter");
        }
        cart.add(scooter, scooter.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sport/scooter");
    });
});

router.get("/sport/travel", function(req, res){
    travel.find({}, function(err, travels){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sport/travel", {travels: travels,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-travel/:id", function(req, res){
    var travelId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    travel.findById(travelId, function(err, travel){
        if(err){
            return res.redirect("/sport/travel");
        }
        cart.add(travel, travel.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sport/travel");
    });
});


router.get("/sport/fitnes", function(req, res){
    fitnes.find({}, function(err, fitness){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sport/fitnes", {fitness: fitness,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-fitnes/:id", function(req, res){
    var fitnesId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    fitnes.findById(fitnesId, function(err, fitnes){
        if(err){
            return res.redirect("/sport/fitnes");
        }
        cart.add(fitnes, fitnes.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sport/fitnes");
    });
});

var electrical = require('../models/electrical');
var furniteur = require('../models/furniteur');
var rug = require('../models/rug');
var cuisin = require('../models/cuisin');
var curtain = require('../models/curtain');
var soft = require('../models/soft');
var bedding = require('../models/bedding');
var decor = require('../models/decor');
var station = require('../models/station');
var clean = require('../models/clean');

router.get("/sale/electrical", function(req, res){
    electrical.find({}, function(err, electricals){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/electrical", {electricals: electricals,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-electrical/:id", function(req, res){
    var electricalId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    electrical.findById(electricalId, function(err, electrical){
        if(err){
            return res.redirect("/sale/electrical");
        }
        cart.add(electrical, electrical.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electrical");
    });
});

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
    
    rug.findById(cuisinId, function(err, cuisin){
        if(err){
            return res.redirect("/sale/cuisin");
        }
        cart.add(cuisin, cuisin.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/cuisin");
    });
});

router.get("/sale/curtain", function(req, res){
    curtain.find({}, function(err, curtains){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/curtain", {curtains: curtains,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-curtain/:id", function(req, res){
    var curtainId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    curtain.findById(curtainId, function(err, curtain){
        if(err){
            return res.redirect("/sale/curtain");
        }
        cart.add(curtain, curtain.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/curtain");
    });
});

router.get("/sale/decor", function(req, res){
    decor.find({}, function(err, decors){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/decor", {decors: decors,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-decor/:id", function(req, res){
    var decorId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    decor.findById(decorId, function(err, decor){
        if(err){
            return res.redirect("/sale/decor");
        }
        cart.add(decor, decor.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/decor");
    });
});

router.get("/sale/bedding", function(req, res){
    bedding.find({}, function(err, beddings){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/bedding", {beddings: beddings,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-bedding/:id", function(req, res){
    var beddingId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    bedding.findById(beddingId, function(err, bedding){
        if(err){
            return res.redirect("/sale/bedding");
        }
        cart.add(bedding, bedding.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/bedding");
    });
});

router.get("/sale/soft", function(req, res){
    soft.find({}, function(err, softs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/soft", {softs: softs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-soft/:id", function(req, res){
    var softId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    soft.findById(softId, function(err, soft){
        if(err){
            return res.redirect("/sale/soft");
        }
        cart.add(soft, soft.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/soft");
    });
});

router.get("/sale/station", function(req, res){
    station.find({}, function(err, stations){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/station", {stations: stations,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-station/:id", function(req, res){
    var stationId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    station.findById(stationId, function(err, station){
        if(err){
            return res.redirect("/sale/station");
        }
        cart.add(station, station.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/station");
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

var blander = require('../models/blander');
var cleaning = require('../models/cleaning');
var coffee = require('../models/coffee');
var food = require('../models/food');
var gaming = require('../models/gaming');
var garden = require('../models/garden');
var health = require('../models/health');
var iron = require('../models/iron');
var micro = require('../models/micro');
var mobile = require('../models/mobile');
var vacuum = require('../models/vacuum');

router.get("/sale/electricals/blander", function(req, res){
    blander.find({}, function(err, blanders){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/blander", {blanders: blanders,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-blander/:id", function(req, res){
    var blanderId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    blander.findById(blanderId, function(err, blander){
        if(err){
            return res.redirect("/sale/electricals/blander");
        }
        cart.add(blander, blander.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/blander");
    });
});

router.get("/sale/electricals/cleaning", function(req, res){
    cleaning.find({}, function(err, cleanings){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/cleaning", {cleanings: cleanings,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-cleaning/:id", function(req, res){
    var cleaningId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    cleaning.findById(cleaningId, function(err, cleaning){
        if(err){
            return res.redirect("/sale/electricals/cleaning");
        }
        cart.add(cleaning, cleaning.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/cleaning");
    });
});

router.get("/sale/electricals/coffee", function(req, res){
    coffee.find({}, function(err, coffees){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/coffee", {coffees: coffees,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-coffee/:id", function(req, res){
    var coffeeId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    coffee.findById(coffeeId, function(err, coffee){
        if(err){
            return res.redirect("/sale/electricals/coffee");
        }
        cart.add(coffee, coffee.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/coffee");
    });
});

router.get("/sale/electricals/food", function(req, res){
    food.find({}, function(err, foods){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/food", {foods: foods,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-food/:id", function(req, res){
    var foodId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    food.findById(foodId, function(err, food){
        if(err){
            return res.redirect("/sale/electricals/food");
        }
        cart.add(food, food.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/food");
    });
});

router.get("/sale/electricals/gaming", function(req, res){
    gaming.find({}, function(err, gamings){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/gaming", {gamings: gamings,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-gaming/:id", function(req, res){
    var gamingId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    gaming.findById(gamingId, function(err, gaming){
        if(err){
            return res.redirect("/sale/electricals/gaming");
        }
        cart.add(gaming, gaming.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/gaming");
    });
});

router.get("/sale/electricals/garden", function(req, res){
    garden.find({}, function(err, gardens){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/garden", {gardens: gardens,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-garden/:id", function(req, res){
    var gardenId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    garden.findById(gardenId, function(err, garden){
        if(err){
            return res.redirect("/sale/electricals/garden");
        }
        cart.add(garden, garden.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/garden");
    });
});

router.get("/sale/electricals/health", function(req, res){
    health.find({}, function(err, healths){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/health", {healths: healths,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-health/:id", function(req, res){
    var healthId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    health.findById(healthId, function(err, health){
        if(err){
            return res.redirect("/sale/electricals/health");
        }
        cart.add(health, health.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/health");
    });

});
router.get("/sale/electricals/iron", function(req, res){
    iron.find({}, function(err, irons){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/iron", {irons: irons,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-iron/:id", function(req, res){
    var ironId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    iron.findById(ironId, function(err, iron){
        if(err){
            return res.redirect("/sale/electricals/iron");
        }
        cart.add(iron, iron.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/iron");
    });
});

router.get("/sale/electricals/micro", function(req, res){
    micro.find({}, function(err, micros){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/micro", {micros: micros,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-micro/:id", function(req, res){
    var microId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    micro.findById(microId, function(err, micro){
        if(err){
            return res.redirect("/sale/electricals/micro");
        }
        cart.add(micro, micro.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/micro");
    });
});

router.get("/sale/electricals/mobile", function(req, res){
    mobile.find({}, function(err, mobiles){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/mobile", {mobiles: mobiles,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-mobile/:id", function(req, res){
    var mobileId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    mobile.findById(mobileId, function(err, mobile){
        if(err){
            return res.redirect("/sale/electricals/mobile");
        }
        cart.add(mobile, mobile.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/mobile");
    });
});

router.get("/sale/electricals/vacuum", function(req, res){
    vacuum.find({}, function(err, vacuums){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/vacum", {vacuums: vacuums,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-vacuum/:id", function(req, res){
    var vacuumId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    vacuum.findById(vacuumId, function(err, vacuum){
        if(err){
            return res.redirect("/sale/electricals/vacuum");
        }
        cart.add(vacuum, vacuum.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/electricals/vacuum");
    });
});


var vinyl = require('../models/vinyl')
var Cart = require("../models/cart");
var Wall = require('../models/wallpaper');
var satin = require('../models/satin');
var kitchen = require('../models/kitchen');
var gliter = require('../models/gliter');
var spray = require('../models/spray');
var deco = require('../models/deco');
var floor = require('../models/floor');
var wow = require('../models/wow');
var tool = require('../models/tool');
var power = require('../models/power');
var hand = require('../models/hand');
var ladder = require('../models/ladder');

var home = require('../models/home');
var paint = require('../models/paintH');
var sport = require('../models/sportH');
var home1 = require('../models/home1');
var sale = require('../models/saleH');
var deal = require('../models/dealH');
var interior = require('../models/interior');
var header = require('../models/header');
var shipping = require('../models/shipping');



router.get("/interior/emolusion", function(req, res){
    vinyl.find({}, function(err, vinyls){
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("interior/emolusion", {vinyls: vinyls,headers:headers});
        }
    });
});
});


router.get("/add-to-cart/:id", function(req, res){
    var vinylId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    vinyl.findById(vinylId, function(err, vinyl){
        if(err){
            return res.redirect("/interior/emolusion");
        }
        cart.add(vinyl, vinyl.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/interior/emolusion");
    });
    
});

router.get("/interior/satin", function(req, res){
    
    satin.find({}, function(err, satins){
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("interior/satin", {satins: satins,headers:headers});
        }
    });
});
});
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
router.get("/favicon.ico", function(req, res){
    
    
        res.render("views/favicon");
    
});



router.get("/add-to-cart-satin/:id", function(req, res){
    var satinId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    satin.findById(satinId, function(err, satin){
        if(err){
            return res.redirect("/interior/satin");
        }
        cart.add(satin, satin.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/interior/satin");
    });
});
        
router.get('/interior', function (req, res, next) {
  interior.find(function(err, interiors) {
    header.find({}, function(err, headers){
    res.render('interior/interior', { interiors: interiors,headers:headers});
 });
});
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
  paint.find(function(err, paints) {
  header.find({}, function(err, headers){
  deal.find(function(err, deals) {
  sport.find(function(err, sports) {
  sale.find(function(err, sales) {
  home.find(function(err, homes) {
  home1.find(function(err, homes1) {
    if(err){
        console.log(err);
    }
    else{
    res.render('event/home', { homes1: homes1 , homes: homes , deals:deals,headers:headers , paints:paints , sports:sports , sales:sales, successMsg: successMsg });
}
 });
});
});
});
});
});
 });
});

 
router.get("/wallpaper", function(req, res){
            Wall.find({}, function(err, Walls){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("event/wallpaper", {Walls: Walls,headers:headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-wall/:id", function(req, res){
            var WallId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            Wall.findById(WallId, function(err, Wall){
                if(err){
                    return res.redirect("/wallpaper");
                }
                cart.add(Wall, Wall.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/wallpaper");
            });
        });

        router.get("/interior/Kitchen", function(req, res){
            kitchen.find({}, function(err, kitchens){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("interior/kitchen", {kitchens: kitchens,headers:headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-kitchen/:id", function(req, res){
            var kitchenId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            kitchen.findById(kitchenId, function(err, kitchen){
                if(err){
                    return res.redirect("/interior/kitchen");
                }
                cart.add(kitchen, kitchen.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/interior/kitchen");
            });
        });


        router.get("/interior/gliter", function(req, res){
            gliter.find({}, function(err, gliters){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("interior/gliter", {gliters: gliters,headers:headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-gliter/:id", function(req, res){
            var gliterId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            gliter.findById(gliterId, function(err, gliter){
                if(err){
                    return res.redirect("/interior/gliter");
                }
                cart.add(gliter, gliter.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/interior/gliter");
            });
        });

        router.get("/event/tool/power", function(req, res){
            power.find({}, function(err, powers){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("event/power", {powers: powers,headers:headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-power/:id", function(req, res){
            var powerId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            power.findById(powerId, function(err, power){
                if(err){
                    return res.redirect("/event/power");
                }
                cart.add(power, power.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/event/power");
            });
        });

        router.get("/event/tool/hand", function(req, res){
            hand.find({}, function(err, hands){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("event/hand", {hands: hands,headers:headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-hand/:id", function(req, res){
            var handId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            hand.findById(handId, function(err, hand){
                if(err){
                    return res.redirect("/event/hand");
                }
                cart.add(hand, hand.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/event/hand");
            });
        });

        router.get("/event/tool/ladder", function(req, res){
            ladder.find({}, function(err, ladders){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("event/ladder", {ladders: ladders,headers:headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-ladder/:id", function(req, res){
            var ladderId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            ladder.findById(ladderId, function(err, ladder){
                if(err){
                    return res.redirect("/event/ladder");
                }
                cart.add(ladder, ladder.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/event/ladder");
            });
        });


        router.get("/interior/spray", function(req, res){
            spray.find({}, function(err, sprays){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("interior/spray", {sprays: sprays,headers:headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-spray/:id", function(req, res){
            var sprayId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            spray.findById(sprayId, function(err, spray){
                if(err){
                    return res.redirect("/interior/spray");
                }
                cart.add(spray, spray.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/interior/spray");
            });
        });


       


        router.get("/floor", function(req, res){
            floor.find({}, function(err, floors){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("event/floor", {floors: floors,headers:headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-floor/:id", function(req, res){
            var floorId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            floor.findById(floorId, function(err, floor){
                if(err){
                    return res.redirect("/floor");
                }
                cart.add(floor, floor.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/floor");
            });
        });

        router.get("/deco", function(req, res){
            deco.find({}, function(err, decos){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("event/deco", {decos: decos,headers,headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-deco/:id", function(req, res){
            var decoId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            deco.findById(decoId, function(err, deco){
                if(err){
                    return res.redirect("/deco");
                }
                cart.add(deco, deco.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/deco");
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



        router.get("/tool", function(req, res){
            tool.find({}, function(err, tools){
    header.find({}, function(err, headers){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("event/tool", {tools: tools,headers:headers});
                }
            });
        });
        });
       
        router.get("/add-to-cart-tool/:id", function(req, res){
            var toolId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            
            tool.findById(toolId, function(err, tool){
                if(err){
                    return res.redirect("/tool");
                }
                cart.add(tool, tool.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect("/tool");
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