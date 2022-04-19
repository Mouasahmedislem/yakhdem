var mongoose  = require('mongoose')
var micro = require('../models/micro')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var micros = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/2033/1.jpg?0664",
        title: "LG Micro-ondes Solo - NeoChef - 25L - Smart Inverter Noir",
        price: 35900
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/6063/1.jpg?9318",
        title: "Condor Micro-Onde 20L - Cmw-M2005W - Blanc",
        price: 16500
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/6504/1.jpg?6057",
        title: "Sonashi Micro Onde Smo-922- Porte A Bouton 700 W- 20 L - Blanc",
        price: 18500
    }
 
];

function seedmicro(){
    micro.remove({}, err => {
        if(err) console.log(err);
        micros.forEach(seed => {
            micro.create(seed, (err, micro) => {
                if(err) console.log(err);
                micro.save();
            });
        });
    });
}

module.exports = seedmicro;