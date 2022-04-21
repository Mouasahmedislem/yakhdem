var mongoose  = require('mongoose')
var gaming = require('../models/gaming')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var gamings = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/3141/1.jpg?7470",
        title: "Manette Six doigts PUBG AK66 - Noir",
        price: 720
    }
];

function seedgaming(){
    gaming.remove({}, err => {
        if(err) console.log(err);
        gamings.forEach(seed => {
            gaming.create(seed, (err, gaming) => {
                if(err) console.log(err);
                gaming.save();
            });
        });
    });
}

module.exports = seedgaming;