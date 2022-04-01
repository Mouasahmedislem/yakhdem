var mongoose  = require('mongoose')
var power = require('../models/power')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var powers = [
    {
        image: "//mabricole.com/1769-large_default/tronconneuse-115mm-600w-crown.jpg",
        title: "Meuleuse 115mm 600W CROWN",
        price: 900
    },
    {
        image: "//gamaoutillage.net/wp-content/uploads/2020/07/tronconneuse-230mm-2200w-crown.jpg",
        title: "MEULEUSE 230 MM 2200W CROWN",
        price: 500
    },
    {
        image: "//dzbrico.com/wp-content/uploads/2020/05/1-3.jpg",
        title: "Pistolet Peinture 500W 1000ml CROWN",
        price: 500
    },
    {
        image: "//foorshop.com/wp-content/uploads/2020/06/tgt11316.jpg",
        title: "Total Tools Nettoyeur Haute Pression Multifonction 1400W TGT11316",
        price: 500
    },
    {
        image: "//mabricole.com/1472-large_default/pistolet-silicone-220v-total.jpg",
        title: "Pistolet silicone 220V TOTAL",
        price: 850
    },
    {
        image: "//chektools.com/wp-content/uploads/2021/06/TAT10605_1-1.jpg",
        title: "Pistolet de peinture professionnel Total",
        price: 8200
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0003383_ct15212.png",
        title: "hammers",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004894_ct18114-bmc_286.png",
        title: "HEAVY ROTARY HAMMERS",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004897_ct18138-bmc_286.png",
        title: "LIGHT ROTARY HAMMERS",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004987_marble-saws_350.png",
        title: "MARBLE SAWS",
        price: 6400.00
    },
   {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004347_sabre-saw_350.png",
        title: "SABRE SAW",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006097_claw-hammers-wooden-handle_286.png",
        title: "Claw hammers, wooden handle",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006113_lump-hammers-wooden-handle_286.png",
        title: "LUMP AND SLEDGE HAMMERS",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006105_mechanics-hammers-wooden-handle_286.png",
        title: "ENGINEER HAMMERS",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004869_ct21081h-4-bmc_286.png",
        title: "viseuse",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004862_ct21072hx-2-bmc_286.png",
        title: "viseuse",
        price: 6400.00
    }
   
 
];

function seedpower(){
    power.remove({}, err => {
        if(err) console.log(err);
        powers.forEach(seed => {
            power.create(seed, (err, power) => {
                if(err) console.log(err);
                power.save();
            });
        });
    });
}

module.exports = seedpower;