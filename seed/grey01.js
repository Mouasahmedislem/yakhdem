var mongoose  = require('mongoose')
var grey01 = require('../models/grey01')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var grey01s = [
     {
        image: "https://live.staticflickr.com/65535/54484395216_e110327224.jpg",
        title: "Paintello's Paint Washable Satinée - Brilliant White 4KG",
        price: 2800.00
    }
   
  
    
 
];

function seedgrey01(){
    grey01.remove({}, err => {
        if(err) console.log(err);
        grey01s.forEach(seed => {
            grey01.create(seed, (err, grey01) => {
                if(err) console.log(err);
                grey01.save();
            });
        });
    });
}

module.exports = seedgrey01;
