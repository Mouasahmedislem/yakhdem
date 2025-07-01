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
const ReturnRequest = require('../models/ReturnRequest');
const { isLoggedIn } = require('../middleware/index');
const mongoose = require('mongoose');

const { sendAdminOrderEmail, sendClientReplyEmail, sendReturnConfirmationEmail } = require('../utils/mailer');
var Blue = require('../models/blue');
var Pink = require('../models/pink');
var Grey = require('../models/grey');
var Green = require('../models/green');
var Yelloow = require('../models/yelloow');
var Neutral = require('../models/neutral');
const passport = require('passport');

router.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['email']
}));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    failureFlash: true
  }),
  function(req, res) {
    res.redirect('/');
  });

// Politique de confidentialité
router.get('/privacy', (req, res) => {
  res.render('privacy', {
    title: 'Politique de Confidentialité'
  });
});

// Conditions générales d’utilisation
router.get('/terms', (req, res) => {
  res.render('terms', {
    title: 'Conditions Générales d\'Utilisation'
  });
});

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

var sale = require('../models/saleH');
var header = require('../models/header');
var shipping = require('../models/shipping');

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
      eventName: "PageView",
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

router.get("/blue/:id", async (req, res) => {
  const blue = await Blue.findById(req.params.id);
  const eventId = generateEventId(); // Use a proper UUID generator

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
      content_name: blue.title,
      content_ids: [blue.id],
      content_type: "product",
      value: blue.price,
      currency: "DZD"
    },
    
  });

  res.render("event/blue", { blue, 
    metaEventId: eventId, req });
});



router.get("/add-to-cart-blue/:id", async function(req, res) {
  const blueId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  const blue = await Blue.findById(blueId);

  cart.add(blue, blue.id);
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
  const eventId = `addtocart_${blue.id}_${Date.now()}`;

  // ✅ Send CAPI event
  await sendMetaCAPIEvent({
    eventName: "AddToCart",
    eventId,
    userData,
    customData: {
      content_name: blue.title,
      content_ids: [blue.id],
      content_type: "product",
      value: blue.price,
      currency: "DZD"
    },
    // Change to real test code if needed
  });

  res.redirect("/shop");
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
      eventName: "PageView",
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

router.get("/green/:id", async (req, res) => {
  const green = await Green.findById(req.params.id);
 const eventId = generateEventId(); // Use a proper UUID generator

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
      content_name: green.title,
      content_ids: [green.id],
      content_type: "product",
      value: green.price,
      currency: "DZD"
    },
    
  });

  res.render("event/green", { green, 
    metaEventId: eventId, req });
});



router.get("/add-to-cart-green/:id", async function(req, res) {
  const greenId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  const green = await Green.findById(greenId);

  cart.add(green, green.id);
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
  const eventId = `addtocart_${green.id}_${Date.now()}`;

  // ✅ Send CAPI event
  await sendMetaCAPIEvent({
    eventName: "AddToCart",
    eventId,
    userData,
    customData: {
      content_name: green.title,
      content_ids: [green.id],
      content_type: "product",
      value: green.price,
      currency: "DZD"
    },
    // Change to real test code if needed
  });

  res.redirect("/shop");
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
      eventName: "PageView",
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

router.get("/grey/:id", async (req, res) => {
  const grey = await Grey.findById(req.params.id);
 const eventId = generateEventId(); // Use a proper UUID generator

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
      content_name: grey.title,
      content_ids: [grey.id],
      content_type: "product",
      value: grey.price,
      currency: "DZD"
    },
    
  });

  res.render("event/grey", { grey, 
    metaEventId: eventId, req });
});



router.get("/add-to-cart-grey/:id", async function(req, res) {
  const greyId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  const grey = await Grey.findById(greyId);

  cart.add(grey, grey.id);
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
  const eventId = `addtocart_${grey.id}_${Date.now()}`;

  // ✅ Send CAPI event
  await sendMetaCAPIEvent({
    eventName: "AddToCart",
    eventId,
    userData,
    customData: {
      content_name: grey.title,
      content_ids: [grey.id],
      content_type: "product",
      value: grey.price,
      currency: "DZD"
    },
    // Change to real test code if needed
  });

  res.redirect("/shop");
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
      eventName: "PageView",
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

router.get("/yelloow/:id", async (req, res) => {
  const yelloow = await Yelloow.findById(req.params.id);
  const eventId = generateEventId(); // Use a proper UUID generator

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
      content_name: yelloow.title,
      content_ids: [yelloow.id],
      content_type: "product",
      value: yelloow.price,
      currency: "DZD"
    },
    
  });

  res.render("event/yelloow", { yelloow,
    metaEventId: eventId , req });
});



router.get("/add-to-cart-yelloow/:id", async function(req, res) {
  const yelloowId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  const yelloow = await Yelloow.findById(yelloowId);

  cart.add(yelloow, yelloow.id);
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
  const eventId = `addtocart_${yelloow.id}_${Date.now()}`;

  // ✅ Send CAPI event
  await sendMetaCAPIEvent({
    eventName: "AddToCart",
    eventId,
    userData,
    customData: {
      content_name: yelloow.title,
      content_ids: [yelloow.id],
      content_type: "product",
      value: yelloow.price,
      currency: "DZD"
    },
    // Change to real test code if needed
  });

  res.redirect("/shop");
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
      eventName: "PageView",
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

router.get("/pink/:id", async (req, res) => {
  const pink = await Pink.findById(req.params.id);
const eventId = generateEventId(); // Use a proper UUID generator

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
      content_name: pink.title,
      content_ids: [pink.id],
      content_type: "product",
      value: pink.price,
      currency: "DZD"
    },
    
  });

  res.render("event/pink", { pink, req,
    metaEventId: eventId });
});



router.get("/add-to-cart-pink/:id", async function(req, res) {
  const pinkId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  const pink = await Pink.findById(pinkId);

  cart.add(pink, pink.id);
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
  const eventId = `addtocart_${pink.id}_${Date.now()}`;

  // ✅ Send CAPI event
  await sendMetaCAPIEvent({
    eventName: "AddToCart",
    eventId,
    userData,
    customData: {
      content_name: pink.title,
      content_ids: [pink.id],
      content_type: "product",
      value: pink.price,
      currency: "DZD"
    },
    // Change to real test code if needed
  });

  res.redirect("/shop");
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
      eventName: "PageView",
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

router.get("/neutral/:id", async (req, res) => {
  const neutral = await Neutral.findById(req.params.id);
  const eventId = generateEventId(); // Use a proper UUID generator

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
      content_name: neutral.title,
      content_ids: [neutral.id],
      content_type: "product",
      value: neutral.price,
      currency: "DZD"
    },
    
  });

  res.render("event/neutral", { neutral, req,
    metaEventId: eventId});
});



router.get("/add-to-cart-neutral/:id", async function(req, res) {
  const neutralId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  const neutral = await Neutral.findById(neutralId);

  cart.add(neutral, neutral.id);
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
  const eventId = `addtocart_${neutral.id}_${Date.now()}`;

  // ✅ Send CAPI event
  await sendMetaCAPIEvent({
    eventName: "AddToCart",
    eventId,
    userData,
    customData: {
      content_name: neutral.title,
      content_ids: [neutral.id],
      content_type: "product",
      value: neutral.price,
      currency: "DZD"
    },
    // Change to real test code if needed
  });

  res.redirect("/shop");
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
      testEventCode: "TEST44573"
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

    // Check for pending Meta events
    const metaEvent = req.session.metaEventData ? {
      id: req.session.metaEventId,
      ...req.session.metaEventData
    } : null;

    // Clear the session data after retrieving
    if (req.session.metaEventData) {
      delete req.session.metaEventId;
      delete req.session.metaEventData;
    }

    // Render page with all necessary data
    res.render('event/shop', {
      metaEvent,
      products: cart.generateArray(),
      shippings: shippings,
      totalPrice: cart.totalPrice,
      price: shippings.price,
      user: req.user || null, // Important for pixel initialization
      _fbp: req.cookies._fbp || null, // Facebook click ID
      _fbc: req.cookies._fbc || null // Facebook browser ID
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

          
     router.post('/checkout', async function(req, res) {

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
  const order = new Order({
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
console.log("📝 Tentative d’enregistrement :", order);
try {
  const result = await order.save();

    
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

    // ✅ OPTIONAL: Send email notification to admin
    await sendAdminOrderEmail({
      name: req.body.name,
      numero: cleanNumero,
      total: cart.totalPrice.toString(),
      address: `${req.body.address}, ${selectedcity}`
    });
    
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
 } catch (err) {
  console.error("❌ Erreur lors de la sauvegarde de la commande :", err.message);
  req.flash('error', "Erreur lors de la commande.");
  return res.redirect('/checkout');
}
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

router.get("/contact", function(req, res){
    
    
        res.render("event/contact");
    
});

router.post('/track-login', async (req, res) => {
    const { numero } = req.body;
    
    try {
        // Validate phone number format
        if (!/^0[5-7][0-9]{8}$/.test(numero)) {
            req.flash('error', 'Invalid phone number format');
            return res.redirect('/track-order');
        }

        // Find orders by phone number
        const orders = await Order.find({ numero }).sort({ createdAt: -1 });
        
        // Render track-order page with orders (empty array if none found)
        return res.render('event/track-order', { 
            orders,
            phoneNumber: numero // Pass the searched number to display
        });
        
    } catch (err) {
        console.error('Track order error:', err);
        req.flash('error', 'Error processing your request');
        return res.redirect('/track-order');
    }
});

router.get('/track-order', async (req, res) => {
  if (!req.session.trackingUser) return res.redirect('/track-login');

  try {
    const orders = await Order.find({ numero: req.session.trackingUser })
                            .sort({ createdAt: -1 })
                            .populate({
                              path: 'returnRequest',
                              options: { strictPopulate: false } // Bypass the check
                            });
    
    res.render('event/track-order', { orders });
  } catch (err) {
    console.error('Error fetching orders:', err);
    req.flash('error', 'Error loading your orders');
    res.redirect('/track-login');
  }
});



router.get("/producthome/:id", async (req, res) => {
  const producthome = await Producthome.findById(req.params.id);
  const eventId = generateEventId(); // Use a proper UUID generator


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
    testEventCode: "TEST44573"
  });

  res.render("event/producthome", { producthome, req,
    metaEventId: eventId  });
});

// UUID v4 generator function
function generateEventId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

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
   const eventId = generateEventId(); // Use a proper UUID generator


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
    testEventCode: "TEST44573"
    // Change to real test code if needed
  });
// Store the event ID in session for client-side tracking
  req.session.metaEventId = eventId;
  req.session.metaEventData = {
    eventName: "AddToCart",
    productData: {
      content_name: producthome.title,
      content_ids: [producthome.id],
      content_type: "product",
      value: producthome.price,
      currency: "DZD"
    }
  };
  res.redirect('/shop');
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

    const eventId = generateEventId(); // Use a proper UUID generator

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

    res.render('event/paintellohome', { paintellos, req,
    metaEventId: eventId });
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


const Incoming = require('../models/Incoming');


const fs = require('fs');
const path = require('path');

router.post('/webhook', async (req, res) => {
  try {
    const entry = req.body.entry?.[0];
    const changes = entry?.changes?.[0];
    const messages = changes?.value?.messages?.[0];

    if (!messages) {
      return res.sendStatus(200); // ✅ pas de message, réponse immédiate
    }

    const from = messages.from; // ✅ numéro client (WhatsApp ID)
    const text = messages.text?.body?.trim(); // ✅ on ne transforme pas encore en uppercase ici

    // ✉️ Informations à transmettre
    const name = "Client WhatsApp";
    const numero = from.startsWith('213') ? '0' + from.slice(3) : from;
    const response = text || "[Message vide ou non texte]";

    // ✅ Envoie de l'email
    await sendClientReplyEmail({ name, numero, response });

    console.log("📨 Réponse client reçue et email envoyé :", response);
    return res.sendStatus(200); // ✅ très important : on répond 200 à Meta

  } catch (err) {
    console.error("❌ Erreur Webhook:", err.message);
    return res.sendStatus(500);
  }
});

// Add these routes:

// Start return process
router.get('/start-return/:orderId', async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (!order) {
            req.flash('error', 'Order not found');
            return res.redirect('/track-order');
        }
        
       
        res.render('event/start-return', { order });
    } catch (err) {
        console.error('Error starting return:', err);
        req.flash('error', 'Error processing your request');
        res.redirect('/track-order');
    }
});

// Submit return request
router.post('/submit-return', async (req, res) => {
    try {
        const order = await Order.findById(req.body.orderId);
        if (!order) {
            req.flash('error', 'Order not found');
            return res.redirect('/track-order');
        }
        
    
        
        // Create return request
        const returnRequest = new ReturnRequest({
            orderId: req.body.orderId,
            userId: req.user ? req.user._id : null,
            numero: req.user ? req.user.numero : order.numero,
            reason: req.body.reason,
            refundMethod: req.body.refundMethod,
            exchangeItem: req.body.exchangeItem,
            ccpNumber: req.body.ccpNumber,
            notes: req.body.notes,
            status: 'pending'
        });
        
        await returnRequest.save();
        
        // Update order with return request
        order.returnRequest = returnRequest._id;
        await order.save();
        
        // Send confirmation email (implement this function in your mailer utils)
        await sendReturnConfirmationEmail({
            email: req.user?.email || order.email,
            orderId: order._id,
            returnId: returnRequest._id
        });
        
        res.render('event/return-confirmation', { returnRequest });
    } catch (err) {
        console.error('Error submitting return:', err);
        req.flash('error', 'Error processing your return request');
        res.redirect('/track-order');
    }
});

    
module.exports = router
