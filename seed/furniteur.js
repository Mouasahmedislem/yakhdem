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
        image: "https://s5.gifyu.com/images/SRVVH.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Brilliant White 4KG",
        price: 900.00
    },
   
    {
        image: "https://s5.gifyu.com/images/SRVVx.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Red Spice 4KG",
        price: 1100.00
    },
    {
        image: "https://s5.gifyu.com/images/SRVVs.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Mocha 4KG",
        price: 1100.00
    },
    {
        image: "https://s5.gifyu.com/images/SRVVL.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Deep Amethyst 4KG",
        price: 1100.00
    },
    {
        image: "https://s5.gifyu.com/images/SRVVp.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Dark Angel 4KG",
        price: 1100.00
    },
    {
        image: "https://s5.gifyu.com/images/SRVVz.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Burnt Sugar 4KG",
        price: 1100.00
    },
    {
        image: "https://s5.gifyu.com/images/SRVVb.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Aqua 4KG",
        price: 1100.00
    },
    {
        image: "https://s5.gifyu.com/images/SRVVS.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Rich Red 4KG",
        price: 1100.00
    },
    {
        image: "https://s5.gifyu.com/images/SRVV2.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Sweet Lavender 4KG",
        price: 1100.00
    },
    {
        image: "https://s5.gifyu.com/images/SRVUe.jpg",
        title: "Paintello Paint Vinyl Silk Emulsion - Lime Crush 4KG",
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
