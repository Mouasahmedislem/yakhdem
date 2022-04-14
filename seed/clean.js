var mongoose  = require('mongoose')
var clean = require('../models/clean')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var cleans = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/07/4602/7.jpg?3069",
        title: "Egotoire",
        price: 900
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/8173/1.jpg?3349",
        title: "bain Porte Serviettes De Salle De Bain Murale Pivotant Rotatifs À 180 °",
        price: 3250
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/40/8973/1.jpg?6571",
        title: "boite Boîte De Rangement Rose Pliable ",
        price: 2175
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/13/0572/1.jpg?9405",
        title: "Support De Sechoir, Porte Sèche Cheveux",
        price: 350
    },
    
 
];

function seedclean(){
    clean.remove({}, err => {
        if(err) console.log(err);
        cleans.forEach(seed => {
            clean.create(seed, (err, clean) => {
                if(err) console.log(err);
                clean.save();
            });
        });
    });
}

module.exports = seedclean;