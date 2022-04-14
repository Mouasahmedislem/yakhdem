var mongoose  = require('mongoose')
var header = require('../models/header')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var headers = [
    {
        image: "https://s7.gifyu.com/images/retouch_1649436364149.jpg",
        href: "/wallpaper"
    }
 
];

function seedheader(){
    header.remove({}, err => {
        if(err) console.log(err);
        headers.forEach(seed => {
            header.create(seed, (err, header) => {
                if(err) console.log(err);
                header.save();
            });
        });
    });
}

module.exports = seedheader;