var mongoose  = require('mongoose')
var pinkcool = require('../models/pinkcool')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var pinkcools = [
     {
        image: "https://live.staticflickr.com/65535/54483207460_1e36b3f486.jpg",
        title: "Paintello's Paint Washable Satinée - Brilliant White 4KG",
        price: 2800.00
    }
   
  
    
 
];

function seedpinkcool(){
    pinkcool.remove({}, err => {
        if(err) console.log(err);
        pinkcools.forEach(seed => {
            pinkcool.create(seed, (err, pinkcool) => {
                if(err) console.log(err);
                pinkcool.save();
            });
        });
    });
}

module.exports = seedpinkcool;
