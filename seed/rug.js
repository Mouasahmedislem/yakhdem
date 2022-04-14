var mongoose  = require('mongoose')
var rug = require('../models/rug')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var rugs = [
    {
        image: "https://s7.gifyu.com/images/Picsart_22-04-09_00-24-14-466.jpeg.jpg",
        title: "Comming Soon",
        price: 0
    }
 
];

function seedrug(){
    rug.remove({}, err => {
        if(err) console.log(err);
        rugs.forEach(seed => {
            rug.create(seed, (err, rug) => {
                if(err) console.log(err);
                rug.save();
            });
        });
    });
}

module.exports = seedrug;