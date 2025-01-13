var mongoose  = require('mongoose')
var cuisin = require('../models/cuisin')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var cuisins = [
    {
        image: "https://s12.gifyu.com/images/SYnoR.jpg",
        title: "My Fixature By Paintello's Paint ",
        href : "/myfixateur/fixateur",
        price: 1500
    }
  
 
];

function seedcuisin(){
    cuisin.remove({}, err => {
        if(err) console.log(err);
        cuisins.forEach(seed => {
            cuisin.create(seed, (err, cuisin) => {
                if(err) console.log(err);
                cuisin.save();
            });
        });
    });
}

module.exports = seedcuisin;
