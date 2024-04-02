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
        image: "https://s12.gifyu.com/images/SVZ7k.png",
        title: "'Paintello's Paint Washable Satinée - Brilliant White 4KG",
        price: 2390.00
    },
   
    {
        image: "https://s12.gifyu.com/images/SVZ7E.png",
        title: "'Paintello's Paint Washable Satinée - Red Spice 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7v.png",
        title: "'Paintello's Paint Washable Satinée - Mocha 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7h.png",
        title: "'Paintello's Paint Washable Satinée - Deep Amethyst 4KG",
        price: 2590.00
    },
    {
        image: "https://s9.gifyu.com/images/SVZ79.png",
        title: "'Paintello's Paint Washable Satinée - Dark Angel 4KG",
        price: 2590.00
    },
    {
        image: "https://s9.gifyu.com/images/SVZ73.png",
        title: "'Paintello's Paint Washable Satinée - Burnt Sugar 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7H.png",
        title: "'Paintello's Paint Washable Satinée - Aqua 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7K.png",
        title: "'Paintello's Paint Washable Satinée - Rich Red 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7N.png",
        title: "'Paintello's Paint Washable Satinée - Sweet Lavender 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7T.png",
        title: "'Paintello's Paint Washable Satinée - Lime Crush 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7w.png",
        title: "'Paintello's Paint Washable Satinée - Waterfall 4KG",
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
