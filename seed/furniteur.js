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
        image: "https://s12.gifyu.com/images/SVZ7a.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Brilliant White 4KG",
        price: 900.00
    },
   
    {
        image: "https://s12.gifyu.com/images/SVZ7V.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Red Spice 4KG",
        price: 1100.00
    },
    {
        image: "https://s9.gifyu.com/images/SVZ7f.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Mocha 4KG",
        price: 1100.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7Z.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Deep Amethyst 4KG",
        price: 1100.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7U.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Dark Angel 4KG",
        price: 1100.00
    },
    {
        image: "https://s9.gifyu.com/images/SVZ7F.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Burnt Sugar 4KG",
        price: 1100.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7R.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Aqua 4KG",
        price: 1100.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7i.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Rich Red 4KG",
        price: 1100.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ7j.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Sweet Lavender 4KG",
        price: 1100.00
    },
    {
        image: "https://s12.gifyu.com/images/SVZ70.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Lime Crush 4KG",
        price: 1100.00
    },
  {
        image: "https://s12.gifyu.com/images/SVZ7C.png",
        title: "Paintello Paint Vinyl Silk Emulsion - Beig  4KG",
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
