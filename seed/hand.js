var mongoose  = require('mongoose')
var hand = require('../models/hand')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var hands = [
    {
        image: "//mabricole.com/1992-large_default/kit-outils-a-main-avec-mallete-117-pieces-total.jpg",
        title: "Kit outils à main avec mallete 117 pièces TOTAL",
        price: 500
    },
    {
        image: "//www.fedoul.com/storage/files/dz/12389/thumb-613x460-4dd297a94dd17ef4e630a4fe05595b1f.jpeg",
        title: "Caisse à outils originale 146 pièce",
        price: 500
    },
 
];

function seedhand(){
    hand.remove({}, err => {
        if(err) console.log(err);
        hands.forEach(seed => {
            hand.create(seed, (err, hand) => {
                if(err) console.log(err);
                hand.save();
            });
        });
    });
}

module.exports = seedhand;