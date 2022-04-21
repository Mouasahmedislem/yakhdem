var mongoose  = require('mongoose')
var cleaning = require('../models/cleaning')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var cleanings = [
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
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/4104/1.jpg?4729",
        title: "Ariane Mop Spray Plus",
        price: 3100
    },
    
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/2604/6.jpg?3705",
        title: "Brosse Vaisselle Rechargeable",
        price: 700
    }
    
 
];

function seedcleaning(){
    cleaning.remove({}, err => {
        if(err) console.log(err);
        cleanings.forEach(seed => {
            cleaning.create(seed, (err, cleaning) => {
                if(err) console.log(err);
                cleaning.save();
            });
        });
    });
}

module.exports = seedcleaning;