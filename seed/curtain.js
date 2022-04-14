var mongoose  = require('mongoose')
var curtain = require('../models/curtain')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var curtains = [
    {
        image: "https://s7.gifyu.com/images/Picsart_22-04-09_00-24-14-466.jpeg.jpg",
        title: "Comming Soon",
        price: 0
    }
 
];

function seedcurtain(){
    curtain.remove({}, err => {
        if(err) console.log(err);
        curtains.forEach(seed => {
            curtain.create(seed, (err, curtain) => {
                if(err) console.log(err);
                curtain.save();
            });
        });
    });
}

module.exports = seedcurtain;