var mongoose  = require('mongoose')
var home1 = require('../models/home1')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

 homes1 = [
    //Paint

  
    //SPORT
    {
        image: "//cdn.bmstores.co.uk/images/hpcCatFullWidthImage/img1150/fitness-cat-1678x9459.jpg",
        title: "Sports-and-Leisure"
    }
   
];

function seedhome1(){
    home1.remove({}, err => {
        if(err) console.log(err);
        homes1.forEach(seed => {
            home1.create(seed, (err, home1) => {
                if(err) console.log(err);
                home1.save();
            });
        });
    });
}

module.exports = seedhome1;