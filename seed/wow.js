var mongoose  = require('mongoose')
var wow = require('../models/wow')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var wows = [
    {
        image: "https://www.adler.com.pl/dane/zdjecia/ad_4459/ad_4459.jpg",
        title: "Adler Cuiseur à 7 œufs Adler Ad 4459 - Blanc",
        price: 3480,
        was:3000
    }
 
];

function seedwow(){
    wow.remove({}, err => {
        if(err) console.log(err);
        wows.forEach(seed => {
            wow.create(seed, (err, wow) => {
                if(err) console.log(err);
                wow.save();
            });
        });
    });
}

module.exports = seedwow;