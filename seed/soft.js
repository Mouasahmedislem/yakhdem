var mongoose  = require('mongoose')
var soft = require('../models/soft')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var softs = [
    {
        image: "https://s7.gifyu.com/images/Picsart_22-04-09_00-24-14-466.jpeg.jpg",
        title: "Comming Soon",
        price: 0
    }
 
];

function seedsoft(){
    soft.remove({}, err => {
        if(err) console.log(err);
        softs.forEach(seed => {
            soft.create(seed, (err, soft) => {
                if(err) console.log(err);
                soft.save();
            });
        });
    });
}

module.exports = seedsoft;