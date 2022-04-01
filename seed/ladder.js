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
        image: "https://www.eurlpmi.com/wp-content/uploads/2019/03/SY101.jpg",
        title: "Jakson 2+1 Marches",
        price: 
    },
    {
        image: "https://www.eurlpmi.com/wp-content/uploads/2019/03/SY102.jpg",
        title: "Jakson 3+1 Marches",
        price: 
    },
    {
        image: "https://www.eurlpmi.com/wp-content/uploads/2019/03/SY103.jpg",
        title: "Jakson 4+1 Marches",
        price: 900
    },
    {
        image: "https://www.eurlpmi.com/wp-content/uploads/2019/03/SY104.jpg",
        title: "Jakson 5+1 Marches",
        price: 900
    },
    {
        image: "https://www.eurlpmi.com/wp-content/uploads/2019/03/SY1612.jpg",
        title: "Pratical Metal Mega Lux 2 marches",
        price: 900
    },
    {
        image: "https://www.eurlpmi.com/wp-content/uploads/2019/03/SY1614.jpg",
        title: "Pratical Metal Mega Lux 4 marches",
        price: 900
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