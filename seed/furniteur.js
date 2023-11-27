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
        image: "https://gifyu.com/image/SRVVH",
        title: "Paintello Paint Vinyl Silk Emulsion - Brilliant White 4KG",
        price: 800.00
    },
   
    {
        image: "https://gifyu.com/image/SRVVx",
        title: "Paintello Paint Vinyl Silk Emulsion - Red Spice 4KG",
        price: 900.00
    },
    {
        image: "https://gifyu.com/image/SRVVs",
        title: "Paintello Paint Vinyl Silk Emulsion - Mocha 4KG",
        price: 900.00
    },
    {
        image: "https://gifyu.com/image/SRVVHL",
        title: "Paintello Paint Vinyl Silk Emulsion - Deep Amethyst 4KG",
        price: 900.00
    },
    {
        image: "https://gifyu.com/image/SRVVp",
        title: "Paintello Paint Vinyl Silk Emulsion - Dark Angel 4KG",
        price: 900.00
    },
    {
        image: "https://gifyu.com/image/SRVVHz",
        title: "Paintello Paint Vinyl Silk Emulsion - Burnt Sugar 4KG",
        price: 900.00
    },
    {
        image: "https://gifyu.com/image/SRVVb",
        title: "Paintello Paint Vinyl Silk Emulsion - Aqua 4KG",
        price: 900.00
    },
    {
        image: "https://gifyu.com/image/SRVVS",
        title: "Paintello Paint Vinyl Silk Emulsion - Rich Red 4KG",
        price: 900.00
    },
    {
        image: "https://gifyu.com/image/SRVV2",
        title: "Paintello Paint Vinyl Silk Emulsion - Sweet Lavender 4KG",
        price: 900.00
    },
    {
        image: "https://gifyu.com/image/SRVUe",
        title: "Paintello Paint Vinyl Silk Emulsion - Lime Crush 4KG",
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
