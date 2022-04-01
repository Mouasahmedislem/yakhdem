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
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006364_measuring-tapes-metric_286.png",
        title: "measuring-tapes-metric",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006265_spirit-levels_286.png",
        title: "spirit-levels",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006329_snap-off-knives_286.png",
        title: "snap-off-knives",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006345_foldable-knives_286.png",
        title: "foldable-knives",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006354_trapezoidal-blades_286.png",
        title: "trapezoidal-blades",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006352_snap-off-blades_286.png",
        title: "snap-off-blades",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006283_hack-saws_286.png",
        title: "hack-saws",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006321_bolt-cutters_286.png",
        title: "bolt-cutters",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006317_small-axe-wooden-handle_286.png",
        title: "small-axe-wooden-handle",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006181_phillips-screwdrivers_286.png",
        title: "phillips-screwdrivers",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006183_slotted-screwdrivers_286.png",
        title: "slotted-screwdrivers",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0005997_combination-pliers_286.png",
        title: "combination-pliers",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006140_diagonal-cutting-pliers_286.png",
        title: "diagonal-cutting-pliers",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006168_locking-grip-pliers-curved-jaws_286.png",
        title: "locking-grip-pliers-curved-jaws",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006234_adjustable-wrenches_286.png",
        title: "adjustable-wrenches",
        price: 6400.00
    },
    {
        image: "http://www.crown-tools-eu.com/content/images/thumbs/0006236_pipe-wrenches_286.png",
        title: "pipe-wrenches",
        price: 6400.00
    }

 
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