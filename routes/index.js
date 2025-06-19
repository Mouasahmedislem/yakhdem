var express = require('express')
var router = express.Router()
var Cart = require("../models/cart");
const getMetaUserData = require('../utils/metaUserData');
const sendMetaCAPIEvent = require('../services/metaCapi');
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();
const twilio = require('twilio');
var Producthome = require('../models/producthome');
var Paintello = require('../models/paintello');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const Order = require('../models/order');
const Powers = require('../models/powers');
const middleware = require('../middleware');
const stripe = require("stripe")(process.env.STRIPE_API_KEY);





var furniteur = require('../models/furniteur');
var rug = require('../models/rug');
var cuisin = require('../models/cuisin');
var clean = require('../models/clean');
var coat = require('../models/coat');
var sample = require('../models/sample');
var tool = require('../models/tool');


router.get("/sale/furniteur", async function(req, res) {
  try {
    const furniteurs = await furniteur.find({});
    const headers = await header.find({});
    
    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
         fbc: req.cookies._fbc || undefined,
         fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_furniteur_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale Furniteur Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("sale/furniteur", { furniteurs, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

router.get("/add-to-cart-furniteur/:id", async function(req, res) {
  const furniteurId = req.params.id;
  const cart = new Cart(req.session.cart || {});

  try {
    const item = await furniteur.findById(furniteurId);
    if (!item) return res.redirect("/sale/furniteur");

    cart.add(item, item.id);
    req.session.cart = cart;
    console.log("🛒 Item added to cart:", item.title);

    // ✅ Prepare Meta CAPI AddToCart
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
         fbc: req.cookies._fbc || undefined,
         fbp: req.cookies._fbp || undefined  
    };

    const eventId = `addtocart_furniteur_${item.id}_${Date.now()}`;

    await sendMetaCAPIEvent({
      eventName: "AddToCart",
      eventId,
      userData,
      customData: {
        content_name: item.title,
        content_ids: [item.id],
        content_type: "product",
        value: item.price,
        currency: "DZD",
        anonymous_id: req.sessionID
      },
      testEventCode: "TEST12345" // Optional for Meta test events
    });

    res.redirect("/sale/furniteur");

  } catch (err) {
    console.error("❌ AddToCart Error:", err);
    res.redirect("/sale/furniteur");
  }
});


router.get("/sale/cuisin", async function(req, res) {
  try {
    const cuisins = await cuisin.find({});
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_cuisin_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "sale cuisin Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("sale/cuisin", { cuisins, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading /sale/cuisin:", err);
    res.status(500).send("Error loading page");
  }
});

router.get("/add-to-cart-cuisin/:id", async function(req, res) {
  const cuisinId = req.params.id;
  const cart = new Cart(req.session.cart || {});

  try {
    const item = await cuisin.findById(cuisinId);
    if (!item) return res.redirect("/sale/cuisin");

    cart.add(item, item.id);
    req.session.cart = cart;
    console.log("🛒 Item added to cart:", item.title);

    // ✅ Prepare Meta CAPI AddToCart
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `addtocart_cuisin_${item.id}_${Date.now()}`;

    await sendMetaCAPIEvent({
      eventName: "AddToCart",
      eventId,
      userData,
      customData: {
        content_name: item.title,
        content_ids: [item.id],
        content_type: "product",
        value: item.price,
        currency: "DZD",
        anonymous_id: req.sessionID
      },
      testEventCode: "TEST12345" // Optional for Meta test events
    });

    res.redirect("/sale/cuisin");

  } catch (err) {
    console.error("❌ AddToCart Error:", err);
    res.redirect("/sale/cuisin");
  }
});

router.get("/sale/clean", async function(req, res) {
  try {
    const cleans = await clean.find({});
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_clean_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "sale clean Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("sale/clean", { cleans, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading /sale/cuisin:", err);
    res.status(500).send("Error loading page");
  }
});

router.get("/add-to-cart-clean/:id", async function(req, res) {
  const cleanId = req.params.id;
  const cart = new Cart(req.session.cart || {});

  try {
    const item = await clean.findById(cleanId);
    if (!item) return res.redirect("/sale/clean");

    cart.add(item, item.id);
    req.session.cart = cart;
    console.log("🛒 Item added to cart:", item.title);

    // ✅ Prepare Meta CAPI AddToCart
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `addtocart_clean_${item.id}_${Date.now()}`;

    await sendMetaCAPIEvent({
      eventName: "AddToCart",
      eventId,
      userData,
      customData: {
        content_name: item.title,
        content_ids: [item.id],
        content_type: "product",
        value: item.price,
        currency: "DZD",
        anonymous_id: req.sessionID
      },
      testEventCode: "TEST12345" // Optional for Meta test events
    });

    res.redirect("/sale/clean");

  } catch (err) {
    console.error("❌ AddToCart Error:", err);
    res.redirect("/sale/clean");
  }
});

router.get("/sale/coat", async function(req, res) {
  try {
    const coats = await coat.find({});
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_coat_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale coat Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("sale/coat", { coats, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

router.get("/add-to-cart-coat/:id", async function(req, res) {
  const coatId = req.params.id;
  const cart = new Cart(req.session.cart || {});

  try {
    const item = await coat.findById(coatId);
    if (!item) return res.redirect("/sale/coat");

    cart.add(item, item.id);
    req.session.cart = cart;
    console.log("🛒 Item added to cart:", item.title);

    // ✅ Prepare Meta CAPI AddToCart
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `addtocart_coat_${item.id}_${Date.now()}`;

    await sendMetaCAPIEvent({
      eventName: "AddToCart",
      eventId,
      userData,
      customData: {
        content_name: item.title,
        content_ids: [item.id],
        content_type: "product",
        value: item.price,
        currency: "DZD",
        anonymous_id: req.sessionID
      },
      testEventCode: "TEST12345" // Optional for Meta test events
    });

    res.redirect("/sale/coat");

  } catch (err) {
    console.error("❌ AddToCart Error:", err);
    res.redirect("/sale/coat");
  }
});

router.get("/sale/sample", async function(req, res) {
  try {
    const samples = await sample.find({});
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_coat_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale Furniteur Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("sale/sample", { samples, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

router.get("/add-to-cart-sample/:id", async function(req, res) {
  const sampleId = req.params.id;
  const cart = new Cart(req.session.cart || {});

  try {
    const item = await sample.findById(sampleId);
    if (!item) return res.redirect("/sale/sample");

    cart.add(item, item.id);
    req.session.cart = cart;
    console.log("🛒 Item added to cart:", item.title);

    // ✅ Prepare Meta CAPI AddToCart
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `addtocart_sample_${item.id}_${Date.now()}`;

    await sendMetaCAPIEvent({
      eventName: "AddToCart",
      eventId,
      userData,
      customData: {
        content_name: item.title,
        content_ids: [item.id],
        content_type: "product",
        value: item.price,
        currency: "DZD",
        anonymous_id: req.sessionID
      },
      testEventCode: "TEST12345" // Optional for Meta test events
    });

    res.redirect("/sale/sample");

  } catch (err) {
    console.error("❌ AddToCart Error:", err);
    res.redirect("/sale/sample");
  }
});


router.get("/sale/tool", async function(req, res) {
  try {
    const tools = await tool.find({});
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_tool_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale coat Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("sale/tool", { tools, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

router.get("/add-to-cart-tool/:id", async function(req, res) {
  const toolId = req.params.id;
  const cart = new Cart(req.session.cart || {});

  try {
    const item = await tool.findById(toolId);
    if (!item) return res.redirect("/sale/tool");

    cart.add(item, item.id);
    req.session.cart = cart;
    console.log("🛒 Item added to cart:", item.title);

    // ✅ Prepare Meta CAPI AddToCart
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `addtocart_tool_${item.id}_${Date.now()}`;

    await sendMetaCAPIEvent({
      eventName: "AddToCart",
      eventId,
      userData,
      customData: {
        content_name: item.title,
        content_ids: [item.id],
        content_type: "product",
        value: item.price,
        currency: "DZD",
        anonymous_id: req.sessionID
      },
      testEventCode: "TEST12345" // Optional for Meta test events
    });

    res.redirect("/sale/tool");

  } catch (err) {
    console.error("❌ AddToCart Error:", err);
    res.redirect("/sale/tool");
  }
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

router.post("/add-to-cart-beigea/:id", function(req, res){
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
            res.render("onecoat/beig02", {beigebs: beigebs,headers:headers });
        
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
        res.redirect("/shop");
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

router.get("/myfixateur/fixateur", async function(req, res) {
  try {
    
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_fixateur_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale fixateur Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("myfixateur/fixateur", { headers, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});


router.get("/paintellomac/paintellomac", async function(req, res) {
  try {
    
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_paintellomac_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale fixateur Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("paintellomac/paintellomac", { headers, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
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


router.get("/coulors/blue", async function(req, res) {
  try {
    
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_paintellblue_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale blue Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("coulors/blue", { headers, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});



router.get("/coulors/greens", async function(req, res) {
  try {
    
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_paintellgreens_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale green Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("coulors/greens", { headers, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});
router.get("/coulors/grey", async function(req, res) {
  try {
    
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_paintellgrey_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale grey Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("coulors/grey", { headers, headers ,eventId});

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

    router.get("/coulors/yellowv2", async function(req, res) {
  try {
    
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_paintellyellowv2_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale yellowv2 Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("coulors/yellowv2", { headers, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

 router.get("/coulors/pink", async function(req, res) {
  try {
    
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_paintellpink_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale pink Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("coulors/pink", { headers, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

 router.get("/coulors/neutral", async function(req, res) {
  try {
    
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      country: "algeria",
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_paintellneutral_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale neutral Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("coulors/neutral", { headers, headers,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

router.get("/favicon.ico", function(req, res){
     res.render("views/favicon");
    });

router.get("/power", async function(req, res) {
  try {
    var errMsg = req.flash('error')[0];
    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      country: "algeria",
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_power_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "power Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
      testEventCode: "TEST12345"
    });

    res.render("event/power", { errMsg: errMsg, noError: !errMsg ,eventId });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

router.get('/shop', async (req, res) => {
  try {
    const cart = new Cart(req.session.cart || {});
    const shippings = await shipping.find({});

    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      country: "algeria",
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
      fbc: req.cookies._fbc,
      fbp: req.cookies._fbp
    };

    const eventId = `view_${Date.now()}`;

    // ✅ Send ViewContent to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Shop Page",
        content_type: "product_group",
        value: cart.totalPrice || 0,
        currency: "DZD"
      },
      // Replace with real test code or remove in production
    });

    // ✅ Render page
    res.render('event/shop', {
      products: cart.generateArray(),
      shippings: shippings,
      totalPrice: cart.totalPrice,
      price: shippings.price ,eventId
    });

  } catch (err) {
    console.error("❌ Error in /shop route:", err);
    res.status(500).send("Error loading shop");
  }
});


router.get("/", async function(req, res) {
  try {
    var successMsg = req.flash('success')[0];
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      country: "algeria",
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_${Date.now()}`;

    // ✅ Send ViewContent event to Meta
    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Sale home Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
   
    });

    res.render("event/home", { headers, headers , successMsg: successMsg ,eventId  });

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});
    
router.get("/wow", async function(req, res) {
  try {
    const wows = await wow.find({});
    const headers = await header.find({});

    // ✅ Collect user or anonymous data
   

  } catch (err) {
    console.error("❌ Error loading sale/furniteur:", err);
    res.status(500).send("Error loading page");
  }
});

router.get("/add-to-cart-wow/:id", async function(req, res) {
  const wowId = req.params.id;
  const cart = new Cart(req.session.cart || {});

  try {
    const item = await wow.findById(wowId);
    if (!item) return res.redirect("/wow");

    cart.add(item, item.id);
    req.session.cart = cart;
    console.log("🛒 Item added to cart:", item.title);

    // ✅ Prepare Meta CAPI AddToCart
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: user.numero,
      firstName: user.firstName,
      lastName: user.lastName,
      country: "algeria",
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `addtocart_wow_${item.id}_${Date.now()}`;

    await sendMetaCAPIEvent({
      eventName: "AddToCart",
      eventId,
      userData,
      customData: {
        content_name: item.title,
        content_ids: [item.id],
        content_type: "product",
        value: item.price,
        currency: "DZD",
        anonymous_id: req.sessionID
      },
       // Optional for Meta test events
    });

    res.redirect("/wow");

  } catch (err) {
    console.error("❌ AddToCart Error:", err);
    res.redirect("/wow");
  }
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
        
      router.get('/checkout', function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('event/shop', { products: null });
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];

  // ✅ Add Meta CAPI InitiateCheckout tracking here
  const user = req.user || {};
  const userData = {
    email: user.email,
    numero: user.numero,
    firstName: user.firstName,
    lastName: user.lastName,
    country: "algeria",
    ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
    userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
  };

  const eventId = `checkout_${Date.now()}`;

  // ✅ Fire InitiateCheckout
  sendMetaCAPIEvent({
    eventName: "InitiateCheckout",
    eventId,
    userData,
    customData: {
      content_type: "product",
      value: cart.totalPrice,
      currency: "DZD"
    },
    testEventCode: "TEST47263" // Optional: replace with your real test code
  });

  res.render('event/checkout', {
    totalPrice: cart.totalPrice,
    errMsg: errMsg,
    noError: !errMsg
  });
});

          
      router.post('/checkout', function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('event/shop', { products: null });
  }

  var cart = new Cart(req.session.cart);
  const freeShippingThreshold = 5000;
  const wilayaShippingInfo = {
   "ADRAR": { fee: 800, delay: "4–6 days" },
    "CHLEF": { fee: 600, delay: "3–5 days" },
    "LAGHOUAT": { fee: 750, delay: "4–6 days" },
    "OUM EL BOUAGHI": { fee: 600, delay: "3–5 days" },
    "BATNA": { fee: 600, delay: "3–5 days" },
    "BEJAIA": { fee: 500, delay: "2–4 days" },
    "BISKRA": { fee: 700, delay: "3–5 days" },
    "BECHAR": { fee: 850, delay: "4–6 days" },
    "BLIDA": { fee: 300, delay: "1–2 days" },
    "BOUIRA": { fee: 500, delay: "2–3 days" },
    "TAMANRASSET": { fee: 1000, delay: "5–8 days" },
    "TEBESSA": { fee: 700, delay: "3–5 days" },
    "TLEMCAN": { fee: 500, delay: "2–3 days" },
    "TIARET": { fee: 550, delay: "3–4 days" },
    "TIZI OUZOU": { fee: 400, delay: "2–3 days" },
    "DJELFA": { fee: 600, delay: "3–4 days" },
    "JIJEL": { fee: 450, delay: "2–3 days" },
    "SETIF": { fee: 500, delay: "2–3 days" },
    "SAIDA": { fee: 600, delay: "3–4 days" },
    "SKIKDA": { fee: 500, delay: "2–3 days" },
    "SIDI BELABBAS": { fee: 550, delay: "3–4 days" },
    "GEULMA": { fee: 600, delay: "3–4 days" },
    "MEDEA": { fee: 400, delay: "2–3 days" },
    "MOSTAGANEM": { fee: 450, delay: "2–3 days" },
    "M'SILA": { fee: 500, delay: "2–3 days" },
    "MASCARA": { fee: 500, delay: "2–3 days" },
    "OUERGLA": { fee: 700, delay: "4–6 days" },
    "EL BAYADH": { fee: 750, delay: "4–6 days" },
    "BORJ BOU ARRERIDJ": { fee: 500, delay: "2–3 days" },
    "BOUMERDAS": { fee: 350, delay: "1–2 days" },
    "EL TAREF": { fee: 700, delay: "3–5 days" },
    "TISSEMSIL": { fee: 550, delay: "3–4 days" },
    "EL OUED": { fee: 750, delay: "4–6 days" },
    "KHENCHLA": { fee: 650, delay: "3–5 days" },
    "SOUK AHRAS": { fee: 600, delay: "3–4 days" },
    "TIPAZA": { fee: 300, delay: "1–2 days" },
    "MILA": { fee: 500, delay: "2–3 days" },
    "AIN DEFLA": { fee: 400, delay: "2–3 days" },
    "NAAMA": { fee: 800, delay: "4–6 days" },
    "AIN TEMOUCHENT": { fee: 550, delay: "3–4 days" },
    "GHARDAIA": { fee: 700, delay: "4–6 days" },
    "GHILEZAN": { fee: 500, delay: "2–3 days" },
    "EL M'GHAIAR": { fee: 800, delay: "4–6 days" },
    "EL MENIA": { fee: 900, delay: "5–7 days" },
    "OULED DJELLAL": { fee: 700, delay: "4–6 days" },
    "BENI ABBAS": { fee: 900, delay: "5–7 days" },
    "TIMIMOUN": { fee: 950, delay: "5–7 days" },
    "TOUGGOURT": { fee: 850, delay: "4–6 days" },
    "IN SALEH": { fee: 1000, delay: "6–8 days" },
    "IN GUEZZAM": { fee: 1200, delay: "6–9 days" },
    "ALGIERS": { fee: 300, delay: "1–2 days" },
    "ORAN": { fee: 400, delay: "2–3 days" },
    "CONSTANTINE": { fee: 500, delay: "2–3 days" },
    "ANNABA": { fee: 500, delay: "2–3 days" }
  // Add all wilayas with their respective info...
};
      
  const selectedcity = req.body.city;
  const shippingFees = {
  "ADRAR": 800,
  "CHLEF": 500,
  "LAGHOUAT": 650,
  "OUM EL BOUAGHI": 550,
  "BATNA": 550,
  "BEJAIA": 500,
  "BISKRA": 600,
  "BECHAR": 750,
  "BLIDA": 300,
  "BOUIRA": 450,
  "TAMANRASSET": 900,
  "TEBESSA": 600,
  "TLEMCAN": 500,
  "TIARET": 500,
  "TIZI OUZOU": 400,
  "DJELFA": 600,
  "JIJEL": 500,
  "SETIF": 550,
  "SAIDA": 500,
  "SKIKDA": 550,
  "SIDI BELABBES": 500,
  "GEULMA": 550,
  "ANNABA": 550,
  "CONSTANTINE": 500,
  "MEDEA": 450,
  "MOSTAGANEM": 450,
  "M'SILA": 500,
  "MASCARA": 500,
  "OUERGLA": 700,
  "EL BAYADH": 750,
  "BOUMERDAS": 350,
  "EL TAREF": 600,
  "TINDOUF": 1000,
  "TISSEMSIL": 500,
  "EL OUED": 700,
  "KHENCHLA": 600,
  "SOUK AHRAS": 600,
  "TIPAZA": 350,
  "MILA": 500,
  "AIN DEFLA": 400,
  "NAAMA": 750,
  "AIN TEMOUCHENT": 500,
  "GHARDAIA": 700,
  "RELIZANE": 500,
  "ALGIERS": 300,
  "ORAN": 400,
  "EL M'GHAIAR": 700,
  "EL MENIA": 750,
  "OULED DJELLAL": 650,
  "BENI ABBES": 800,
  "TIMIMOUN": 800,
  "TOUGGOURT": 700,
  "DJANET": 950,
  "IN SALEH": 850,
  "IN GUEZZAM": 1000,
  "BORDJ BADJI MOKHTAR": 950,
  "TARF": 600,
  "ILLIZI": 950,
  "TAMANRASSET": 900,
  "Default": 700
};

const shipping = wilayaShippingInfo[selectedcity] || { fee: 1000, delay: "3-5 days" };
  // Determine fee
const shippingFee = cart.totalPrice >= freeShippingThreshold ? 0 : shipping.fee;
 const finalTotalPrice = cart.totalPrice + shippingFee;
  const rawNumero = req.body.numero || (req.user ? req.user.numero : undefined);
  let order = new Order({
    user: req.user,
    cart: cart,
    address: req.body.address,
    name: req.body.name,
    country: req.body.country,
    city: selectedcity,
    numero: rawNumero,
    shippingFee: shippingFee,
    deliveryDelay: shipping.delay,
    totalWithShipping: finalTotalPrice
  });

order.save(async function(err, result) {
  if (err) {
    req.flash('error', err.message);
    return res.redirect('/checkout');
     
  } else {
    
    const user = req.user || {};
    const userData = {
      email: user.email,
      numero: rawNumero,
      firstName: user.firstName,
      lastName: user.lastName,
      country: "algeria",
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined,
       country: req.body.country,
       city: req.body.city
    };

    const eventId = `purchase_${result._id}_${Date.now()}`;

    await sendMetaCAPIEvent({
      eventName: "Purchase",
      eventId,
      userData,
      customData: {
        value: finalTotalPrice,
        currency: "DZD",
        content_type: "product",
        order_id: result._id.toString()
      },
      
    });
    req.session.cart = null;

   // ✅ Clean the phone number
  const numeroRaw = req.body.numero;
  const cleanNumero = '213' + numeroRaw.replace(/^0+/, '').replace(/\D/g, '');

  // ✅ Prepare WhatsApp message payload

    const payload = {
  messaging_product: "whatsapp",
  to: cleanNumero,
  type: "template",
  template: {
    name: "commande_confirmee", // your actual template name
    language: { code: "fr" },
    components: [
      {
        type: "header", // ✅ Add this block for the image header
        parameters: [
          {
            type: "image",
            image: {
              link: "https://www.paintello.uk/img/logo.png" // ✅ your logo URL
            }
          }
        ]
      },
      {
        type: "body",
        parameters: [
          { type: "text", text: req.body.name || "Client" },
          { type: "text", text: cart.totalPrice.toString() },
          { type: "text", text: `${req.body.address}, ${selectedcity}` },
          
        ]
      }
    ]
  }
};

  try {
    // ✅ Send WhatsApp message
    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${process.env.META_PHONE_ID}/messages`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.META_WA_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log("✅ WhatsApp message sent:", response.data);
  } catch (err) {
    console.error("❌ WhatsApp error:", err.response?.data || err.message);
  }

    res.render('event/confirmation', {
      name: req.body.name,
      numero: rawNumero,
      city: selectedcity,
      address: req.body.address,
      cartTotal: cart.totalPrice,
      deliveryDelay: shipping.delay,
      shippingFee: shippingFee,
      totalPrice: finalTotalPrice
    });
  }
});

});


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

router.get('/shipping-fee/:wilaya', (req, res) => {
  const { wilaya } = req.params;
  const fee = item.shippingFees[wilaya];

  if (fee !== undefined) {
    res.json({ wilaya, shippingFee: fee });
  } else {
    res.status(404).json({ error: 'Wilaya not found' });
  }
});
router.post('/update-cart/:id', (req, res) => {
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  let productId = req.params.id;
  let newQty = parseInt(req.body.quantity);

  if (newQty > 0) {
    cart.update(productId, newQty);
  }
  req.session.cart = cart;
  res.redirect('/shop'); // or wherever the cart page is
});
          
router.post('/cart/increase/:id', (req, res) => {
  const productId = req.params.id;
  const cart = new Cart(req.session.cart || {});
  cart.increaseQty(productId);
  req.session.cart = cart;

  res.json({
    qty: cart.items[productId].qty,
    itemTotal: cart.items[productId].price,
    totalPrice: cart.totalPrice
  });
});

router.post('/cart/decrease/:id', (req, res) => {
  const productId = req.params.id;
  const cart = new Cart(req.session.cart || {});
  cart.decreaseQty(productId);
  req.session.cart = cart;

  let qty = 0, itemTotal = 0;
  if (cart.items[productId]) {
    qty = cart.items[productId].qty;
    itemTotal = cart.items[productId].price;
  }

  res.json({
    qty: qty,
    itemTotal: itemTotal,
    totalPrice: cart.totalPrice
  });
});


var Newsletter = require('../models/newsletter')


// Newsletter route
router.post('/subscribe', async function (req, res) {
  const email = req.body.email;

  if (!email) {
    req.flash('error', 'Email is required.');
    return res.redirect('/'); // Redirect to homepage or newsletter page
  }

  try {
    // Save to database
    const newEmail = new Newsletter({ email: email });
    await newEmail.save();

    // Setup nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASS
      }
    });

    // Mail options
    let mailOptions = {
      from: `"Paintello" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🎉 Welcome to Paintello!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Thank you for subscribing!</h2>
          <p>We’re excited to have you with us. Expect great offers and design inspiration in your inbox.</p>
        </div>
      `
    };

    // Send mail
await transporter.sendMail(mailOptions);

    req.flash('success', 'Subscription successful! Please check your email.');
    res.redirect('event/confirmation'); // Redirect to homepage (or any page you choose)
  } catch (err) {
    console.error('Newsletter error:', err);
    req.flash('error', 'Something went wrong. Please try again later.');
    res.redirect('event/confirmation'); // Redirect back with error
  }
});
router.get("/track-login", function(req, res){
    
    
        res.render("event/track-login");
    
});

router.post('/track-login', async (req, res) => {
  const numero = req.body.numero;
  try {
    const order = await Order.findOne({ numero: numero });
    if (order) {
      req.session.trackingUser = numero; // Store login
      res.redirect('/track-order');
    } else {
      req.flash('error', 'No order found for this number.');
      res.redirect('/track-login');
    }
  } catch (err) {
    console.error(err);
    res.redirect('/track-login');
  }
});

router.get('/track-order', async (req, res) => {
  if (!req.session.trackingUser) return res.redirect('/track-login');

  const orders = await Order.find({ numero: req.session.trackingUser }).sort({ createdAt: -1 });
  res.render('event/track-order', { orders });
});



router.get("/producthome/:id", async (req, res) => {
  const producthome = await Producthome.findById(req.params.id);
  const eventId = `view_${producthome.id}_${Date.now()}`;

  // ✅ Use req.user directly — no fallback needed
  console.log("✅ req.user", req.user); // debug

  const userData = {
    email: req.user?.email || undefined,
    numero: req.user?.numero || undefined,
    firstName: req.user?.firstName || undefined,
    lastName: req.user?.lastName || undefined,
    country: "algeria",
    ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
    userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
  };

  console.log("🔍 Raw userData before hashing:", userData);


  await sendMetaCAPIEvent({
    eventName: "ViewContent",
    eventId,
    userData,
    customData: {
      content_name: producthome.title,
      content_ids: [producthome.id],
      content_type: "product",
      value: producthome.price,
      currency: "DZD"
    },
    
  });

  res.render("event/producthome", { producthome, eventId });
});



router.get("/add-to-cart-producthome/:id", async function(req, res) {
  const producthomeId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  const producthome = await Producthome.findById(producthomeId);

  cart.add(producthome, producthome.id);
  req.session.cart = cart;

  // ✅ User data from req.user
  const user = req.user || {};
  const userData = {
    email: user.email,
    numero: user.numero,
    firstName: user.firstName,
    lastName: user.lastName,
    country: "algeria",
    ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
    userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
  };

  // ✅ Unique event ID
  const eventId = `addtocart_${producthome.id}_${Date.now()}`;

  // ✅ Send CAPI event
  await sendMetaCAPIEvent({
    eventName: "AddToCart",
    eventId,
    userData,
    customData: {
      content_name: producthome.title,
      content_ids: [producthome.id],
      content_type: "product",
      value: producthome.price,
      currency: "DZD"
    },
    // Change to real test code if needed
  });

  res.redirect("/shop");
});


 

router.get('/paintello', async (req, res) => {
  try {
    const paintellos = await Paintello.find({});

    const isLoggedIn = !!req.user;

    const userData = {
      email: isLoggedIn ? req.user.email : undefined,
      numero: isLoggedIn ? req.user.numero : undefined,
      firstName: isLoggedIn ? req.user.firstName : undefined,
      lastName: isLoggedIn ? req.user.lastName : undefined,
      country: "algeria",
      ip: req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
      userAgent: req.get("User-Agent"),
        fbc: req.cookies._fbc || undefined,
        fbp: req.cookies._fbp || undefined  
    };

    const eventId = `view_paintello_${Date.now()}`;

    await sendMetaCAPIEvent({
      eventName: "ViewContent",
      eventId,
      userData,
      customData: {
        content_name: "Paintello Home Page",
        content_type: "product_group",
        anonymous_id: req.sessionID // optional for retargeting
      },
     
    });

    res.render('event/paintellohome', { paintellos,eventId });
  } catch (err) {
    res.status(500).send('Error loading home products');
  }
});


// ✅ Must be included and correctly mounted
router.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = "paintello_webhook_token"; // same token you entered

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook verified");
    return res.status(200).send(challenge);
  } else {
    return res.sendStatus(403);
  }
});
router.post('/webhook', (req, res) => {
  console.log("📩 Webhook POST received:");
  console.dir(req.body, { depth: null });

  // Respond to Meta to confirm receipt
  res.sendStatus(200);
});

const Incoming = require('../models/Incoming'); // For saving messages

router.post('/webhook', async (req, res) => {
  res.sendStatus(200); // Always respond fast

  try {
    const entry = req.body.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const message = value?.messages?.[0];
    const contact = value?.contacts?.[0];

    if (!message || !message.from) return;

    const wa_id = message.from;
    const name = contact?.profile?.name || 'Client';
    const msgType = message.type;

    // Save incoming message to DB
    const newMsg = new Incoming({
      from: wa_id,
      name: name,
      type: msgType,
      text: message.text?.body || null,
      payload: message.button?.payload || null,
      timestamp: message.timestamp,
      raw: req.body
    });
    await newMsg.save();

    // --- Custom Reply Logic ---
    let reply = null;

    if (msgType === 'button') {
      const payload = message.button.payload;

      if (payload === 'ANNULER_LA_COMMANDE') {
        reply = `❌ Votre commande a été annulée. Contactez-nous si vous avez des questions.`;
      } else if (payload === 'DISCUTER_AVEC_AGENT') {
        reply = `💬 Un conseiller va vous répondre sous peu. Merci de patienter.`;
      } else {
        reply = `Merci pour votre réponse : "${payload}".`;
      }
    }

    if (msgType === 'text') {
      const userText = message.text.body.trim().toLowerCase();

      if (["bonjour", "salut", "slt"].includes(userText)) {
        reply = `👋 Bonjour ${name} ! Comment pouvons-nous vous aider ?`;
      } else if (userText.includes("commande")) {
        reply = `🛒 Pour suivre ou annuler une commande, veuillez utiliser les boutons ou donner plus de détails.`;
      } else {
        reply = `🤖 Merci pour votre message. Nous reviendrons vers vous très vite !`;
      }
    }

    if (reply) {
      await axios.post(
        `https://graph.facebook.com/v19.0/${process.env.META_PHONE_ID}/messages`,
        {
          messaging_product: "whatsapp",
          to: wa_id,
          type: "text",
          text: { body: reply }
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.META_WA_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("✅ Custom reply sent:", reply);
    }
  } catch (err) {
    console.error("❌ Webhook error:", err.response?.data || err.message);
  }
});



});
router.get('/admin/messages', isLoggedIn, async (req, res) => {
  const messages = await Incoming.find().sort({ createdAt: 1 });
  const grouped = {};

  messages.forEach(msg => {
    if (!grouped[msg.from]) {
      grouped[msg.from] = {
        name: msg.name || 'N/A',
        messages: []
      };
    }
    grouped[msg.from].messages.push(msg);
  });

  res.render('admin/messages', { grouped });
});

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '123456';

router.get('/admin/login', (req, res) => {
  res.render('admin/login', { error: null });
});

router.post('/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    res.redirect('/admin/messages');
  } else {
    res.render('admin/login', { error: '❌ Invalid login credentials' });
  }
});

router.get('/admin/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
});

router.post('/admin/reply', isLoggedIn, async (req, res) => {
  const { to, text } = req.body;
  if (!to || !text) return res.status(400).send("Missing parameters");

  try {
    await axios.post(
      `https://graph.facebook.com/v19.0/${process.env.META_PHONE_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: text }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.META_WA_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.redirect('/admin/messages');
  } catch (err) {
    console.error("❌ Reply error:", err.response?.data || err.message);
    res.status(500).send("Failed to send message");
  }
});
     
module.exports = router
