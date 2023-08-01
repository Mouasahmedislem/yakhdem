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
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0017.jpg",
        title: "'Paintello's Paint Washable Satinée - Brilliant White 4KG",
        price: 2390.00
    },
   
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0012.jpg",
        title: "'Paintello's Paint Washable Satinée - Red Spice 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0013.jpg",
        title: "'Paintello's Paint Washable Satinée - Mocha 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0011.jpg",
        title: "'Paintello's Paint Washable Satinée - Deep Amethyst 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0010.jpg",
        title: "'Paintello's Paint Washable Satinée - Dark Angel 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0009.jpg",
        title: "'Paintello's Paint Washable Satinée - Burnt Sugar 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0008.jpg",
        title: "'Paintello's Paint Washable Satinée - Aqua 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0007.jpg",
        title: "'Paintello's Paint Washable Satinée - Rich Red 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0006.jpg",
        title: "'Paintello's Paint Washable Satinée - Sweet Lavender 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0005.jpg",
        title: "'Paintello's Paint Washable Satinée - Lime Crush 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0004.jpg",
        title: "'Paintello's Paint Washable Satinée - Waterfall 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0002.jpg",
        title: "'Paintello's Paint Washable Satinée - New Duck Egg 4KG",
        price: 2490.00
    },
    
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0001.jpg",
        title: "'Paintello's Paint Washable Satinée - Moonlit Sky 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0000.jpg",
        title: "'Paintello's Paint Washable Satinée - Steel Smoke 4KG",
        price: 2490.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0003262f55a722470303.jpg",
        title: "Paintello's Paint Washable Satinée - Manhattan Grey 4KG",
        price: 2490.00
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
