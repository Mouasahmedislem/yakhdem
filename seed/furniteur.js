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
        image: "https://s8.gifyu.com/images/IMG-20220413-WA0027.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Brilliant White 4KG",
        price: 800.00
    },
   
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00304f5ed1ae68cff814.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Red Spice 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0029.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Mocha 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA002889a6143060ada9e3.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Deep Amethyst 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0024667f6cfa9798436e.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Dark Angel 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0025.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Burnt Sugar 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0022.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Aqua 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00233e4df872b8be1e1a.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Rich Red 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00213ca9b5b06cab5f57.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Sweet Lavender 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0020.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Lime Crush 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0019.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Waterfall 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220412-WA00157c687c8ca0c32283.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - New Duck Egg 4KG",
        price: 900.00
    },
    
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00184e2a88ed98c970c5.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Moonlit Sky 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0017.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Steel Smoke 4KG",
        price: 900.00
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0012.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Manhattan Grey 4KG",
        price: 900.00
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
