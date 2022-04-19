var mongoose  = require('mongoose')
var coffee = require('../models/coffee')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var coffees = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/2972/1.jpg?9085",
        title: "Krups Machine À Café Nespresso Inissia Espresso Capsules 19 Bars Blanc",
        price: 194500
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/0662/1.jpg?7129",
        title: "Clatronic Cafetière A Filtre Avec Tasse - 300 Watts - Noir",
        price: 2999
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/7683/1.jpg?0846",
        title: "Robuste Machine A Capsule - 0.7 L - 20 Bars - 1145 Watts - Italia - Gold",
        price: 174500
    }
    

 
];

function seedcoffee(){
    coffee.remove({}, err => {
        if(err) console.log(err);
        coffees.forEach(seed => {
            coffee.create(seed, (err, coffee) => {
                if(err) console.log(err);
                coffee.save();
            });
        });
    });
}

module.exports = seedcoffee;