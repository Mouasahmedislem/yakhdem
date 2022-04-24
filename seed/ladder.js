var mongoose  = require('mongoose')
var ladder = require('../models/ladder')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var ladders = [
    {
        image: "https://foorshop.com/wp-content/uploads/2020/12/crown-Echelle-4x4-4.8m-3.jpg",
        title: "CROWN Multi-Position Folding Extension Ladder in Métal",
        price: 7050
    }
    
 
];

function seedladder(){
    ladder.remove({}, err => {
        if(err) console.log(err);
        ladders.forEach(seed => {
            ladder.create(seed, (err, ladder) => {
                if(err) console.log(err);
                ladder.save();
            });
        });
    });
}

module.exports = seedladder;