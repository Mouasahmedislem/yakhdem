var mongoose  = require('mongoose')
var satin = require('../models/satin')

mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var satins = [
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0017.jpg",
        title: "'Paintello's Paint Washable Satinée - Brilliant White 2.5L",
        price: 1199.99
    },
   
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0012.jpg",
        title: "'Paintello's Paint Washable Satinée - Red Spice 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0013.jpg",
        title: "'Paintello's Paint Washable Satinée - Mocha 2.5",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0011.jpg",
        title: "'Paintello's Paint Washable Satinée - Deep Amethyst 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0010.jpg",
        title: "'Paintello's Paint Washable Satinée - Dark Angel 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0009.jpg",
        title: "'Paintello's Paint Washable Satinée - Burnt Sugar 2.5",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0008.jpg",
        title: "'Paintello's Paint Washable Satinée - Aqua 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0007.jpg",
        title: "'Paintello's Paint Washable Satinée - Rich Red 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0006.jpg",
        title: "'Paintello's Paint Washable Satinée - Sweet Lavender 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0005.jpg",
        title: "'Paintello's Paint Washable Satinée - Lime Crush 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0004.jpg",
        title: "'Paintello's Paint Washable Satinée - Waterfall 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0002.jpg",
        title: "'Paintello's Paint Washable Satinée - New Duck Egg 2.5L",
        price: 1299.99
    },
    
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0001.jpg",
        title: "'Paintello's Paint Washable Satinée - Moonlit Sky 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0000.jpg",
        title: "'Paintello's Paint Washable Satinée - Steel Smoke 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0003262f55a722470303.jpg",
        title: "Paintello's Paint Washable Satinée - Manhattan Grey 2.5",
        price: 1299.99
    }
 
];

function seedsatin(){
    satin.remove({}, err => {
        if(err) console.log(err);
        satins.forEach(seed => {
            satin.create(seed, (err, satin) => {
                if(err) console.log(err);
                satin.save();
            });
        });
    });
}

module.exports = seedsatin;