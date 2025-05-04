var mongoose  = require('mongoose')
var pink02 = require('../models/pink02')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var pink02s = [
     {
        image: "https://live.staticflickr.com/65535/54484395216_e110327224.jpg",
        title: "Paintello's Paint Washable Satinée - Brilliant White 4KG",
        price: 2800.00
    }
   
  
    
 
];

function seedpink02(){
    pink02.remove({}, err => {
        if(err) console.log(err);
        pink02s.forEach(seed => {
            pink02.create(seed, (err, pink02) => {
                if(err) console.log(err);
                pink02.save();
            });
        });
    });
}

module.exports = seedpink02;
