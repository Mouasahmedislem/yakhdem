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
        price: 200
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
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/7273/1.jpg?6486",
        title: "Balai Serpillière Auto Essorage 360° - Beige",
        price: 1300
    },
    
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/6942/1.jpg?9915",
        title: "Lot De 6 Recharges Balai Serpillières Microfibres - Gris",
        price: 1070
    },
    
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/3132/1.jpg?7134",
        title: "Seau Magique - 360° Clean Mop Balai Vadrouille Serpillière Auto Nettoyant À Double Compartiment Avec Balai À Tête Pivotante Et 2 Lingettes Microfibre- Bleu",
        price: 3350
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/2604/6.jpg?3705",
        title: "Brosse Vaisselle Rechargeable",
        price: 700
    }
    
 
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