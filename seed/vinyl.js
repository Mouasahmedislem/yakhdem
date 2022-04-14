
var mongoose  = require('mongoose')
var vinyl = require('../models/vinyl')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

vinyls = [
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00274b1dc76bfe75c8b3.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Brilliant White 2.5L",
        price: 1199.99
    },
   
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00304f5ed1ae68cff814.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Red Spice 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0029.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Mocha 2.5",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA002889a6143060ada9e3.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Deep Amethyst 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0024667f6cfa9798436e.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Dark Angel 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0025.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Burnt Sugar 2.5",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0022.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Aqua 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00233e4df872b8be1e1a.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Rich Red 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00213ca9b5b06cab5f57.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Sweet Lavender 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0020.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Lime Crush 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0019.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Waterfall 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220412-WA00157c687c8ca0c32283.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - New Duck Egg 2.5L",
        price: 1299.99
    },
    
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00184e2a88ed98c970c5.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Moonlit Sky 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0017.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Steel Smoke 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0012.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Manhattan Grey 2.5",
        price: 1299.99
    }
];

function seedvinyl(){
    vinyl.remove({}, err => {
        if(err) console.log(err);
        vinyls.forEach(seed => {
            vinyl.create(seed, (err, vinyl) => {
                if(err) console.log(err);
                vinyl.save();
            });
        });
    });
}

module.exports = seedvinyl;

    