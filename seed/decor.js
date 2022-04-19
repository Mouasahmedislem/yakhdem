var mongoose  = require('mongoose')
var decor = require('../models/decor')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var decors = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/2223/1.jpg?7486",
        title: "Clock Horloges Murales 60Cm*60Cm Noir",
        price: 1900
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/7103/1.jpg?9207",
        title: "Dwm Deco Lot De 4 Étagères - Murale De Décoration - Noir",
        price: 6450
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/2273/1.jpg?5906",
        title: "Miroir Rond - Moderne En Forex - 50cm - Noir",
        price: 2750
    }
    
 
];

function seeddecor(){
    decor.remove({}, err => {
        if(err) console.log(err);
        decors.forEach(seed => {
            decor.create(seed, (err, decor) => {
                if(err) console.log(err);
                decor.save();
            });
        });
    });
}

module.exports = seeddecor;