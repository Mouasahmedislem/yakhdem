var mongoose  = require('mongoose')
var food = require('../models/food')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var foods = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/9083/3.jpg?3371",
        title: "Sonashi Panineuse & Grill,Presse à Panini -1100W",
        price: 6150
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/5552/1.jpg?2483",
        title: "Solac Machine À Sandwichs- Avec Plaque De Cuisson Buon Panini Rouge",
        price: 3700
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/6322/1.jpg?4988",
        title: "Robuste Friteuse Electrique- 1.5 L - 900W - Gris / Noir",
        price: 3550
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/0422/4.jpg?3504",
        title: "Clatronic Gaufrier - Double Gaufres Par Cuisson - 800 Watts- Argent",
        price: 4850
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/7341/3.jpg?1345",
        title: "Techwood Friteuse Fondue-1L - Tff-81-Blanc",
        price: 4650
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/1152/1.jpg?7746",
        title: "Mixdor Appareil De PopCorn 1200W-Rouge",
        price: 3350
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/5633/1.jpg?7344",
        title: "Mixdor Machine À Pop Corn À Air Chaud, Pour La Maison",
        price: 2450 
    }
    
 
];

function seedfood(){
    food.remove({}, err => {
        if(err) console.log(err);
        foods.forEach(seed => {
            food.create(seed, (err, food) => {
                if(err) console.log(err);
                food.save();
            });
        });
    });
}

module.exports = seedfood;