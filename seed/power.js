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
        price: 4800.00
    },
    {
        image: "//gamaoutillage.net/wp-content/uploads/2020/07/tronconneuse-230mm-2200w-crown.jpg",
        title: "MEULEUSE 230 MM 2200W CROWN",
        price: 9380.00
    },
    {
        image: "//dzbrico.com/wp-content/uploads/2020/05/1-3.jpg",
        title: "Pistolet Peinture 500W 1000ml CROWN",
        price: 6700.00
    },
    {
        image: "//foorshop.com/wp-content/uploads/2020/06/tgt11316.jpg",
        title: "Total Tools Nettoyeur Haute Pression Multifonction 1400W TGT11316",
        price: 13950
    },
    {
        image: "//mabricole.com/1472-large_default/pistolet-silicone-220v-total.jpg",
        title: "Pistolet silicone 220V TOTAL",
        price: 920
    },
    {
        image: "//chektools.com/wp-content/uploads/2021/06/TAT10605_1-1.jpg",
        title: "Pistolet de peinture professionnel Total",
        price: 8200
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004894_ct18114-bmc_286.png",
        title: "HEAVY ROTARY HAMMERS 850W",
        price: 10900.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004897_ct18138-bmc_286.png",
        title: "LIGHT ROTARY HAMMERS 750W",
        price: 6200.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004987_marble-saws_350.png",
        title: "MARBLE SAWS 1200W",
        price: 9000.00
    },
   {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004347_sabre-saw_350.png",
        title: "SABRE SAW 710W",
        price: 7000.00
    },
    
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0004869_ct21081h-4-bmc_286.png",
        title: "Visseuse crown 12 volt",
        price: 8400.00
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/45/2213/1.jpg?6645",
        title: "Crown Pistolet À Peinture Électrique 2-3Mm 1200W Ct31015",
        price: 12160
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/22/6313/1.jpg79365",
        title: "Crown Polisseuse 180mm // 1300W Réf:CT13323 Gris",
        price: 12310
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/88/4291/1.jpg?9466",
        title: "Crown Pistolet A Enduit Plastique Réf: Ct38058 Orange",
        price: 4200 
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