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
        image: "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJL8WtlAXEHdzyl9PEe6RzoFMX8MO-77lA2Q&usqp=CAU",
        title: "Souffleur aspirateur 710w Crown",
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
        image: "//chektools.com/wp-content/uploads/2021/06/Sans-titre-88745.jpg",
        title: "Visseuse perceuse 20V TOTAL",
        price: 7500
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
        image: "//d15.dz/images/thumbnails/1200/982/detailed/6/TG1121256-3.jpg",
        title: "total tronconeuse 1.010w avec vitesse reglable tg1121256 3",
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