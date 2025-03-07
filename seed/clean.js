var mongoose  = require('mongoose')
var clean = require('../models/clean')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var cleans = [
     {
        image: "https://s3.gifyu.com/images/bbQVj.png",
        title: "'Paintello's Paint Washable Satinée - Brilliant White 4KG",
        price: 2390.00
    },
   
    {
        image: "https://s3.gifyu.com/images/bbQVq.png",
        title: "'Paintello's Paint Washable Satinée - beige01 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVh.png",
        title: "'Paintello's Paint Washable Satinée - blue09 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVk.png",
        title: "'Paintello's Paint Washable Satinée - blue08 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVv.png",
        title: "'Paintello's Paint Washable Satinée - beige09 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVm.png",
        title: "'Paintello's Paint Washable Satinée - beige02 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQV7.png",
        title: "'Paintello's Paint Washable Satinée - blue14 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVI.png",
        title: "'Paintello's Paint Washable Satinée - blue15 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVl.png",
        title: "'Paintello's Paint Washable Satinée - green08 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVn.png",
        title: "'Paintello's Paint Washable Satinée - green09 4KG",
        price: 2590.00
    },
     {
        image: "https://s3.gifyu.com/images/bbQVu.png",
        title: "'Paintello's Paint Washable Satinée - green13 4KG",
        price: 2590.00
    },
     {
        image: "https://s3.gifyu.com/images/bbQVQ.png",
        title: "'Paintello's Paint Washable Satinée - grey01 4KG",
        price: 2590.00
    },
     {
        image: "https://s3.gifyu.com/images/bbQVW.png",
        title: "'Paintello's Paint Washable Satinée - grey03 4KG",
        price: 2590.00
    },
     {
        image: "https://s3.gifyu.com/images/bbQVc.png",
        title: "'Paintello's Paint Washable Satinée - grey14 4KG",
        price: 2590.00
    },
     {
        image: "https://s3.gifyu.com/images/bbQVg.png",
        title: "'Paintello's Paint Washable Satinée - pink02 4KG",
        price: 2590.00
    },
     {
        image: "https://s3.gifyu.com/images/bbQV6.png",
        title: "'Paintello's Paint Washable Satinée - pink03 4KG",
        price: 2590.00
    },
     {
        image: "https://s3.gifyu.com/images/bbQV8.png",
        title: "'Paintello's Paint Washable Satinée - pink07 4KG",
        price: 2590.00
    },
     {
        image: "https://s3.gifyu.com/images/bbQVR.png",
        title: "'Paintello's Paint Washable Satinée - pink09 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVi.png",
        title: "'Paintello's Paint Washable Satinée - pink13 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQV0.png",
        title: "'Paintello's Paint Washable Satinée - taupe01 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVC.png",
        title: "'Paintello's Paint Washable Satinée - yellow01 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVF.png",
        title: "'Paintello's Paint Washable Satinée - yellow05 4KG",
        price: 2590.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQVU.png",
        title: "'Paintello's Paint Washable Satinée - yellow06 4KG",
        price: 2590.00
    }
    
 
];

function seedclean(){
    clean.remove({}, err => {
        if(err) console.log(err);
        cleans.forEach(seed => {
            clean.create(seed, (err, clean) => {
                if(err) console.log(err);
                clean.save();
            });
        });
    });
}

module.exports = seedclean;
