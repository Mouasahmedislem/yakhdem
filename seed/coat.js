var mongoose  = require('mongoose')
var coat = require('../models/coat')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var coats = [
     {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0017.jpg",
        title: "'Paintello's Paint Washable Satinée - Brilliant White 4KG",
        price: 2390.00
    },
   
    {
        image: "https://s5.gifyu.com/images/SRFTR.jpg",
        title: "'Paintello's Paint Washable Satinée - Red Spice 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFT8.jpg",
        title: "'Paintello's Paint Washable Satinée - Mocha 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFT6.jpg",
        title: "'Paintello's Paint Washable Satinée - Deep Amethyst 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFT4.jpg",
        title: "'Paintello's Paint Washable Satinée - Dark Angel 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFTg.jpg",
        title: "'Paintello's Paint Washable Satinée - Burnt Sugar 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFTc.jpg",
        title: "'Paintello's Paint Washable Satinée - Aqua 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFTu.jpg",
        title: "'Paintello's Paint Washable Satinée - Rich Red 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFTn.jpg",
        title: "'Paintello's Paint Washable Satinée - Sweet Lavender 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFTl.jpg",
        title: "'Paintello's Paint Washable Satinée - Lime Crush 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFTQ.jpg",
        title: "'Paintello's Paint Washable Satinée - Waterfall 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFTW.png",
        title: "'Paintello's Paint Washable Satinée - New Duck Egg 4KG",
        price: 2590.00
    }
 
    
 
];

function seedcoat(){
    coat.remove({}, err => {
        if(err) console.log(err);
        coats.forEach(seed => {
          coat.create(seed, (err, coat) => {
                if(err) console.log(err);
                coat.save();
            });
        });
    });
}

module.exports = seedcoat;
