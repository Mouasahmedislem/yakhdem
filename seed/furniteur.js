var mongoose  = require('mongoose')
var furniteur = require('../models/furniteur')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var furniteurs = [
    {
        image: "https://s3.gifyu.com/images/bbQZf.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Brilliant White 4KG",
        price: 900.00
    },
   
    {
        image: "https://s3.gifyu.com/images/bbQa6.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Brilliant White  10KG",
        price: 2000.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZl.png",
        title: "Paintello Paint Vinyl Silk Emulsion - blue09 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZn.png",
        title: "Paintello Paint Vinyl Silk Emulsion - blue08 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZu.png",
        title: "Paintello Paint Vinyl Silk Emulsion - beige09 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZQ.png",
        title: "Paintello Paint Vinyl Silk Emulsion - beige02 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZW.png",
        title: "Paintello Paint Vinyl Silk Emulsion - beige01 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZc.png",
        title: "Paintello Paint Vinyl Silk Emulsion - blue14 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZg.png",
        title: "Paintello Paint Vinyl Silk Emulsion - blue15 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZ4.png",
        title: "Paintello Paint Vinyl Silk Emulsion - green08 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZ6.png",
        title: "Paintello Paint Vinyl Silk Emulsion - green09 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZ8.png",
        title: "Paintello Paint Vinyl Silk Emulsion - green13 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZR.png",
        title: "Paintello Paint Vinyl Silk Emulsion - grey01 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZi.png",
        title: "Paintello Paint Vinyl Silk Emulsion - grey03 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZj.png",
        title: "Paintello Paint Vinyl Silk Emulsion - grey14 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZ0.png",
        title: "Paintello Paint Vinyl Silk Emulsion - pink02  4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZC.png",
        title: "Paintello Paint Vinyl Silk Emulsion - pink03 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZF.png",
        title: "Paintello Paint Vinyl Silk Emulsion - pink07 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZU.png",
        title: "Paintello Paint Vinyl Silk Emulsion - pink09 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZV.png",
        title: "Paintello Paint Vinyl Silk Emulsion - pink13 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZZ.png",
        title: "Paintello Paint Vinyl Silk Emulsion - taupe01 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZY.png",
        title: "Paintello Paint Vinyl Silk Emulsion - yellow01 4KG",
        price: 1100.00
    },
    {
        image: "https://s3.gifyu.com/images/bbQZr.png",
        title: "Paintello Paint Vinyl Silk Emulsion - yellow05 4KG",
        price: 1100.00
    },
     {
        image: "https://s3.gifyu.com/images/bbQZt.png",
        title: "Paintello Paint Vinyl Silk Emulsion - yellow06 4KG",
        price: 1100.00
    }
     
 
];

function seedfurniteur(){
    furniteur.remove({}, err => {
        if(err) console.log(err);
        furniteurs.forEach(seed => {
            furniteur.create(seed, (err, furniteur) => {
                if(err) console.log(err);
                furniteur.save();
            });
        });
    });
}

module.exports = seedfurniteur;
