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
    
  
    //SPORT
    {
        image: "https://icecube-eu-402.icedrive.io/thumbnail?p=aqMe4J3wUuVxeW.JGz0T70R9.bCKwux2dvLfsMQkWduJypycZxMxeEaSl4Srt1oL9Rjoov43x.OtarA.OA9TZ2JjIueBzPUfljoMuTeVKtL..lbnxZMrcyILJe4rYR4m&w=1024&h=1024&m=cropped",
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