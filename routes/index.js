var express = require('express')
var router = express.Router()

const Order = require('../models/order');
const Powers = require('../models/powers');
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
var tool = require('../models/tool');


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

router.get("/sale/tool", function(req, res){
    tool.find({}, function(err, tools){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("sale/tool", {tools: tools,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-tool/:id", function(req, res){
    var toolId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    tool.findById(toolId, function(err, tool){
        if(err){
            return res.redirect("/sale/tool");
        }
        cart.add(tool, tool.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/sale/tool");
    });
});




var Cart = require("../models/cart");
var wow = require('../models/wow');
var sale = require('../models/saleH');
var header = require('../models/header');
var shipping = require('../models/shipping');
var pinksap = require('../models/pinksap');
var pinkpon = require('../models/pinkpon');
var pinklit = require('../models/pinklit');
var pinkcool = require('../models/pinkcool');
var yallaw = require('../models/yallaw');
var yellow = require('../models/yellow');
var greya = require('../models/greya');
var greyb = require('../models/greyb');
var greyc = require('../models/greyc');
var greyd = require('../models/greyd');
var greye = require('../models/greye');
var greyf = require('../models/greyf');
var greena = require('../models/greena');
var greenb = require('../models/greenb');
var greenc = require('../models/greenc');
var greend = require('../models/greend');
var greene = require('../models/greene');
var greenf = require('../models/greenf');
var greeng = require('../models/greeng');
var greenh = require('../models/greenh');
var bluea = require('../models/bluea');
var blueb = require('../models/blueb');
var bluec = require('../models/bluec');
var blued = require('../models/blued');
var beigea = require('../models/beigea');
var beigeb = require('../models/beigeb');
var beigec = require('../models/beigec');
var beiged = require('../models/beiged');
var beigee = require('../models/beigee');
var beigef = require('../models/beigef');
var beigeg = require('../models/beigeg');
var beigeh = require('../models/beigeh');
var beigei = require('../models/beigei');
var beigej = require('../models/beigej');
var beigek = require('../models/beigek');
var beigel = require('../models/beigel');
var beigem = require('../models/beigem');
var beigen = require('../models/beigen');
var beigeo = require('../models/beigeo');
var beigep = require('../models/beigep');
var beigeq = require('../models/beigeq');
var beiger = require('../models/beiger');
var beiges = require('../models/beiges');
var beiget = require('../models/beiget');




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
    yallaw.find({}, function(err, yallaws){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/yallaw", {yallaws: yallaws,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-yallaw/:id", function(req, res){
    var yallawId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    yallaw.findById(yallawId, function(err, yallaw){
        if(err){
            return res.redirect("/onecoat/yallaw");
        }
        cart.add(yallaw, yallaw.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/yallaw");
    });
});
router.get("/onecoat/yellow01", function(req, res){
    yellow.find({}, function(err, yellows){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/yellow01", {yellows: yellows,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-yellow/:id", function(req, res){
    var yellowId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    yellow.findById(yellowId, function(err, yellow){
        if(err){
            return res.redirect("/onecoat/yellow01");
        }
        cart.add(yellow, yellow.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/yellow01");
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


router.get("/onecoat/grey01", function(req, res){
    greya.find({}, function(err, greyas){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/grey01", {greyas: greyas,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greya/:id", function(req, res){
    var greyaId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greya.findById(greyaId, function(err, greya){
        if(err){
            return res.redirect("/onecoat/grey01");
        }
        cart.add(greya, greya.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/grey01");
    });
});
router.get("/onecoat/grey03", function(req, res){
    greyb.find({}, function(err, greybs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/grey03", {greybs: greybs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greyb/:id", function(req, res){
    var greybId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greyb.findById(greybId, function(err, greyb){
        if(err){
            return res.redirect("/onecoat/grey03");
        }
        cart.add(greyb, greyb.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/grey03");
    });
});
router.get("/onecoat/grey14", function(req, res){
    greyc.find({}, function(err, greycs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/grey14", {greycs: greycs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greyc/:id", function(req, res){
    var greycId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greyc.findById(greycId, function(err, greyc){
        if(err){
            return res.redirect("/onecoat/grey14");
        }
        cart.add(greyc, greyc.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/grey14");
    });
});
router.get("/onecoat/grey15", function(req, res){
    greyd.find({}, function(err, greyds){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/grey15", {greyds: greyds,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greyd/:id", function(req, res){
    var greydId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greyd.findById(greydId, function(err, greyd){
        if(err){
            return res.redirect("/onecoat/grey15");
        }
        cart.add(greyd, greyd.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/grey15");
    });
});
router.get("/onecoat/grey16", function(req, res){
    greye.find({}, function(err, greyes){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/grey16", {greyes: greyes,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greye/:id", function(req, res){
    var greyeId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greye.findById(greyeId, function(err, greye){
        if(err){
            return res.redirect("/onecoat/grey16");
        }
        cart.add(greye, greye.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/grey16");
    });
});
router.get("/onecoat/grey17", function(req, res){
    greyf.find({}, function(err, greyfs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/grey17", {greyfs: greyfs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greyf/:id", function(req, res){
    var greyfId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greyf.findById(greyfId, function(err, greyf){
        if(err){
            return res.redirect("/onecoat/grey17");
        }
        cart.add(greyf, greyf.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/grey17");
    });
});


router.get("/onecoat/green08", function(req, res){
    greena.find({}, function(err, greenas){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green08", {greenas: greenas,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greena/:id", function(req, res){
    var greenaId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greena.findById(greenaId, function(err, greena){
        if(err){
            return res.redirect("/onecoat/green08");
        }
        cart.add(greena, greena.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/green08");
    });
});
router.get("/onecoat/green09", function(req, res){
    greenb.find({}, function(err, greenbs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green09", {greenbs: greenbs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greenb/:id", function(req, res){
    var greenbId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greenb.findById(greenbId, function(err, greenb){
        if(err){
            return res.redirect("/onecoat/green09");
        }
        cart.add(greenb, greenb.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/green09");
    });
});
router.get("/onecoat/green13", function(req, res){
    greenc.find({}, function(err, greencs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green13", {greencs: greencs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greenc/:id", function(req, res){
    var greencId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greenc.findById(greencId, function(err, greenc){
        if(err){
            return res.redirect("/onecoat/green13");
        }
        cart.add(greenc, greenc.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/green13");
    });
});
router.get("/onecoat/green18", function(req, res){
    greend.find({}, function(err, greends){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green18", {greends: greends,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greend/:id", function(req, res){
    var greendId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greend.findById(greendId, function(err, greend){
        if(err){
            return res.redirect("/onecoat/green18");
        }
        cart.add(greend, greend.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/green18");
    });
});
router.get("/onecoat/green19", function(req, res){
    greene.find({}, function(err, greenes){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green19", {greenes: greenes,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greene/:id", function(req, res){
    var greeneId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greene.findById(greeneId, function(err, greene){
        if(err){
            return res.redirect("/onecoat/green19");
        }
        cart.add(greene, greene.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/green19");
    });
});
router.get("/onecoat/green20", function(req, res){
    greenf.find({}, function(err, greenfs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green20", {greenfs: greenfs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greenf/:id", function(req, res){
    var greenfId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greenf.findById(greenfId, function(err, greenf){
        if(err){
            return res.redirect("/onecoat/green20");
        }
        cart.add(greenf, greenf.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/green20");
    });
});
router.get("/onecoat/green21", function(req, res){
    greeng.find({}, function(err, greengs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green21", {greengs: greengs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greeng/:id", function(req, res){
    var greengId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greeng.findById(greengId, function(err, greeng){
        if(err){
            return res.redirect("/onecoat/green21");
        }
        cart.add(greeng, greeng.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/green21");
    });
});
router.get("/onecoat/green22", function(req, res){
    greenh.find({}, function(err, greenhs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/green22", {greenhs: greenhs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-greenh/:id", function(req, res){
    var greenhId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    greenh.findById(greenhId, function(err, greenh){
        if(err){
            return res.redirect("/onecoat/green22");
        }
        cart.add(greenh, greenh.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/green22");
    });
});

router.get("/onecoat/bleu09", function(req, res){
    bluea.find({}, function(err, blueas){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/bleu09", {blueas: blueas,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-bluea/:id", function(req, res){
    var blueaId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    bluea.findById(blueaId, function(err, bluea){
        if(err){
            return res.redirect("/onecoat/bleu09");
        }
        cart.add(bluea, bluea.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/bleu09");
    });
});
router.get("/onecoat/bleue14", function(req, res){
    blueb.find({}, function(err, bluebs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/bleue14", {bluebs: bluebs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-blueb/:id", function(req, res){
    var bluebId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    blueb.findById(bluebId, function(err, blueb){
        if(err){
            return res.redirect("/onecoat/bleue14");
        }
        cart.add(blueb, blueb.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/bleue14");
    });
});
router.get("/onecoat/blue08", function(req, res){
    bluec.find({}, function(err, bluecs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/blue08", {bluecs: bluecs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-bluec/:id", function(req, res){
    var bluecId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    bluec.findById(bluecId, function(err, bluec){
        if(err){
            return res.redirect("/onecoat/blue08");
        }
        cart.add(bluec, bluec.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/blue08");
    });
});
router.get("/onecoat/blue15", function(req, res){
    blued.find({}, function(err, blueds){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/blue15", {blueds: blueds,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-blued/:id", function(req, res){
    var bluedId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    blued.findById(bluedId, function(err, blued){
        if(err){
            return res.redirect("/onecoat/blue15");
        }
        cart.add(blued, blued.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/blue15");
    });
});

router.get("/onecoat/BEIGE09", function(req, res){
    beigea.find({}, function(err, beigeas){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/BEIGE09", {beigeas: beigeas,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigea/:id", function(req, res){
    var beigeaId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigea.findById(beigeaId, function(err, beigea){
        if(err){
            return res.redirect("/onecoat/BEIGE09");
        }
        cart.add(beigea, beigea.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/BEIGE09");
    });
});
router.get("/onecoat/beig02", function(req, res){
    beigeb.find({}, function(err, beigebs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beig02", {beigebs: beigebs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigeb/:id", function(req, res){
    var beigebId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigeb.findById(beigebId, function(err, beigeb){
        if(err){
            return res.redirect("/onecoat/beig02");
        }
        cart.add(beigeb, beigeb.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beig02");
    });
});
router.get("/onecoat/beige03", function(req, res){
    beigec.find({}, function(err, beigecs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige03", {beigecs: beigecs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigec/:id", function(req, res){
    var beigecId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigec.findById(beigecId, function(err, beigec){
        if(err){
            return res.redirect("/onecoat/beige03");
        }
        cart.add(beigec, beigec.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige03");
    });
});
router.get("/onecoat/beige04", function(req, res){
    beiged.find({}, function(err, beigeds){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige04", {beigeds: beigeds,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beiged/:id", function(req, res){
    var beigedId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beiged.findById(beigedId, function(err, beiged){
        if(err){
            return res.redirect("/onecoat/beige04");
        }
        cart.add(beiged, beiged.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige04");
    });
});
router.get("/onecoat/beige05", function(req, res){
    beigee.find({}, function(err, beigees){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige05", {beigees: beigees,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigee/:id", function(req, res){
    var beigeeId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigee.findById(beigeeId, function(err, beigee){
        if(err){
            return res.redirect("/onecoat/beige05");
        }
        cart.add(beigee, beigee.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige05");
    });
});
router.get("/onecoat/beige06", function(req, res){
    beigef.find({}, function(err, beigefs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige06", {beigefs: beigefs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigef/:id", function(req, res){
    var beigefId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigef.findById(beigefId, function(err, beigef){
        if(err){
            return res.redirect("/onecoat/beige06");
        }
        cart.add(beigef, beigef.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige06");
    });
});
router.get("/onecoat/beige07", function(req, res){
    beigeg.find({}, function(err, beigegs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige07", {beigegs: beigegs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigeg/:id", function(req, res){
    var beigegId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigeg.findById(beigegId, function(err, beigeg){
        if(err){
            return res.redirect("/onecoat/beige07");
        }
        cart.add(beigeg, beigeg.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige07");
    });
});
router.get("/onecoat/beige08", function(req, res){
    beigeh.find({}, function(err, beigehs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige08", {beigehs: beigehs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigeh/:id", function(req, res){
    var beigehId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigeh.findById(beigehId, function(err, beigeh){
        if(err){
            return res.redirect("/onecoat/beige08");
        }
        cart.add(beigeh, beigeh.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige08");
    });
});
router.get("/onecoat/beige10", function(req, res){
    beigei.find({}, function(err, beigeis){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige10", {beigeis: beigeis,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigei/:id", function(req, res){
    var beigeiId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigei.findById(beigeiId, function(err, beigei){
        if(err){
            return res.redirect("/onecoat/beige10");
        }
        cart.add(beigei, beigei.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige10");
    });
});
router.get("/onecoat/beige11", function(req, res){
    beigej.find({}, function(err, beigejs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige11", {beigejs: beigejs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigej/:id", function(req, res){
    var beigejId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigej.findById(beigejId, function(err, beigej){
        if(err){
            return res.redirect("/onecoat/beige11");
        }
        cart.add(beigej, beigej.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige11");
    });
});
router.get("/onecoat/beige12", function(req, res){
    beigek.find({}, function(err, beigeks){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige12", {beigeks: beigeks,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigek/:id", function(req, res){
    var beigekId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigek.findById(beigekId, function(err, beigek){
        if(err){
            return res.redirect("/onecoat/beige12");
        }
        cart.add(beigek, beigek.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige12");
    });
});
router.get("/onecoat/beige13", function(req, res){
    beigel.find({}, function(err, beigels){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige13", {beigels: beigels,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigel/:id", function(req, res){
    var beigelId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigel.findById(beigelId, function(err, beigel){
        if(err){
            return res.redirect("/onecoat/beige13");
        }
        cart.add(beigel, beigel.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige13");
    });
});
router.get("/onecoat/beige14", function(req, res){
    beigem.find({}, function(err, beigems){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige14", {beigems: beigems,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigem/:id", function(req, res){
    var beigemId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigem.findById(beigemId, function(err, beigem){
        if(err){
            return res.redirect("/onecoat/beige14");
        }
        cart.add(beigem, beigem.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige14");
    });
});
router.get("/onecoat/beige15", function(req, res){
    beigen.find({}, function(err, beigens){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige15", {beigens: beigens,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigen/:id", function(req, res){
    var beigenId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigen.findById(beigenId, function(err, beigen){
        if(err){
            return res.redirect("/onecoat/beige15");
        }
        cart.add(beigen, beigen.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige15");
    });
});
router.get("/onecoat/beige16", function(req, res){
    beigeo.find({}, function(err, beigeos){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige16", {beigeos: beigeos,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigeo/:id", function(req, res){
    var beigeoId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigeo.findById(beigeoId, function(err, beigeo){
        if(err){
            return res.redirect("/onecoat/beige16");
        }
        cart.add(beigeo, beigeo.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige16");
    });
});
router.get("/onecoat/beige17", function(req, res){
    beigep.find({}, function(err, beigeps){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige17", {beigeps: beigeps,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigep/:id", function(req, res){
    var beigepId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigep.findById(beigepId, function(err, beigep){
        if(err){
            return res.redirect("/onecoat/beige17");
        }
        cart.add(beigep, beigep.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige17");
    });
});
router.get("/onecoat/beige18", function(req, res){
    beigeq.find({}, function(err, beigeqs){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige18", {beigeqs: beigeqs,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beigeq/:id", function(req, res){
    var beigeqId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beigeq.findById(beigeqId, function(err, beigeq){
        if(err){
            return res.redirect("/onecoat/beige18");
        }
        cart.add(beigeq, beigeq.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige18");
    });
});
router.get("/onecoat/beige19", function(req, res){
    beiger.find({}, function(err, beigers){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige19", {beigers: beigers,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beiger/:id", function(req, res){
    var beigerId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beiger.findById(beigerId, function(err, beiger){
        if(err){
            return res.redirect("/onecoat/beige19");
        }
        cart.add(beiger, beiger.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige19");
    });
});
router.get("/onecoat/beige20", function(req, res){
    beiges.find({}, function(err, beigess){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige20", {beigess: beigess,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beiges/:id", function(req, res){
    var beigesId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beiges.findById(beigesId, function(err, beiges){
        if(err){
            return res.redirect("/onecoat/beige20");
        }
        cart.add(beiges, beiges.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige20");
    });
});
router.get("/onecoat/beige01", function(req, res){
    beiget.find({}, function(err, beigets){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/beige01", {beigets: beigets,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-beiget/:id", function(req, res){
    var beigetId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    beiget.findById(beigetId, function(err, beiget){
        if(err){
            return res.redirect("/onecoat/beige01");
        }
        cart.add(beiget, beiget.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/beige01");
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
    pinksap.find({}, function(err, pinksaps){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink02", {pinksaps: pinksaps,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-pinksap/:id", function(req, res){
    var pinksapId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    pinksap.findById(pinksapId, function(err, pinksap){
        if(err){
            return res.redirect("/onecoat/pink02");
        }
        cart.add(pinksap, pinksap.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/pink02");
    });
});

router.get("/onecoat/pink04", function(req, res){
    pinkpon.find({}, function(err, pinkpons){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink04", {pinkpons: pinkpons,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-pinkpon/:id", function(req, res){
    var pinkponId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    pinkpon.findById(pinkponId, function(err, pinkpon){
        if(err){
            return res.redirect("/onecoat/pink04");
        }
        cart.add(pinkpon, pinkpon.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/pink04");
    });
});
router.get("/onecoat/pink07", function(req, res){
    pinklit.find({}, function(err, pinklits){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink07", {pinklits: pinklits,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-pinklit/:id", function(req, res){
    var pinklitId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    pinklit.findById(pinklitId, function(err, pinklit){
        if(err){
            return res.redirect("/onecoat/pink07");
        }
        cart.add(pinklit, pinklit.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/pink07");
    });
});

router.get("/onecoat/pink09", function(req, res){
    pinkcool.find({}, function(err, pinkcools){
    header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("onecoat/pink09", {pinkcools: pinkcools,headers:headers});
        }
    });
});
});

router.get("/add-to-cart-pinkcool/:id", function(req, res){
    var pinkcoolId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    pink.findById(pinkcoolId, function(err, pinkcool){
        if(err){
            return res.redirect("/onecoat/pink09");
        }
        cart.add(pinkcool, pinkcool.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect("/onecoat/pink09");
    });
});









router.get("/coulors/blue", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("coulors/blue", {headers:headers});
        }
    });
});

router.get("/coulors/greens", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("coulors/greens", {headers:headers});
        }
    });
});
      router.get("/coulors/grey", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("coulors/grey", {headers:headers});
        }
    });
});

 router.get("/coulors/yellowv2", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("coulors/yellowv2", {headers:headers});
        }
    });
});

 router.get("/coulors/pink", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("coulors/pink", {headers:headers});
        }
    });
});
 router.get("/coulors/neutral", function(req, res){
    
        header.find({}, function(err, headers){
        if(err){
            console.log(err);
        }
        else{
            res.render("coulors/neutral", {headers:headers});
        }
    });
});

router.get("/favicon.ico", function(req, res){
    
    
        res.render("views/favicon");
    
});
router.get("/power", function(req, res, next){
    
     var errMsg = req.flash('error')[0];
        res.render("event/power", { errMsg: errMsg, noError: !errMsg });
    
});

router.get('/shop', (req, res)=> {
            if(!req.session.cart) {
                 res.render('event/shop', {products: null});
            }
            var cart = new Cart(req.session.cart);
            shipping.find(function(err, shippings) {
             res.render('event/shop', {products: cart.generateArray(),shippings:shippings, totalPrice: cart.totalPrice, price: shippings.price});
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

router.post('/power', function(req, res, next) {
            
           
              let powers = new Powers({
                
                chambre: req.body.chambre,
                help: req.body.help,
                etat: req.body.etat,
                product: req.body.product,
                owner: req.body.owner,
                time: req.body.time,
                etape: req.body.etape,
                budge: req.body.budge,
                contactemail: req.body.contactemail,
                contactnum: req.body.contactnum
                
              });
              powers.save(function(err, result) {
                if (err) {
                    
                    req.flash('error', err.message);
                    
                 return res.redirect('/power');
                }
                else{
                req.flash('success', 'Successfully order painter!');
                res.redirect('/')};
              });
           
          })
 
          


module.exports = router
