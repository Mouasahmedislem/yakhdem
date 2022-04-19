var mongoose  = require('mongoose')
var bedding = require('../models/bedding')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var beddings = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/6231/1.jpg?2804",
        title: "Parure de Drap _Lit 2 Places 6 Pièces- Marron et Beige",
        price: 2450
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/2951/1.jpg?7801",
        title: "Le Monde Du Confort Literie Couette 2 Places - Gris + 2 Taie D'Oreillers",
        price: 2950
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/0053/1.jpg?3151",
        title: "Mytex Parure Pour Couette (220*240) -2 Places-Poly Coton",
        price: 2650
    }
 
 
];

function seedbedding(){
    bedding.remove({}, err => {
        if(err) console.log(err);
        beddings.forEach(seed => {
            bedding.create(seed, (err, bedding) => {
                if(err) console.log(err);
                bedding.save();
            });
        });
    });
}

module.exports = seedbedding;