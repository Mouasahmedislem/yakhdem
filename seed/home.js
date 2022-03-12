var mongoose  = require('mongoose')
var home = require('../models/home')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

 homes = [
    //Paint

  
    //SPORT
    {
        image: "//cdn.bmstores.co.uk/images/hpcCatFullWidthImage/img1150/fitness-cat-1678x9459.jpg",
        title: "Sports-and-Leisure"
    }
   
];

function seedhome(){
    home.remove({}, err => {
        if(err) console.log(err);
        homes.forEach(seed => {
            home.create(seed, (err, home) => {
                if(err) console.log(err);
                home.save();
            });
        });
    });
}

module.exports = seedhome;