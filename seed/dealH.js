var mongoose  = require('mongoose')
var deal = require('../models/dealH')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var deals = [
    {
        image: "https://s7.gifyu.com/images/Polish_20220407_115636425_11zon.jpeg.jpg",
        href:"/sale/cuisin"
    },
    {
        image: "https://s7.gifyu.com/images/retouch_1649436384437.jpg",
        href:"/sale/decor"
    },
    {
        image: "https://icecube-eu-402.icedrive.io/thumbnail?p=aqMe4J3wUuVxeW.JGz0T70R9.bCKwux2dvLfsMQkWduJypycZxMxeEaSl4Srt1oL9Rjoov43x.OtarA.OA9TZ2JjIueBzPUfljoMuTeVKtL..lbnxZMrcyILJe4rYR4m&w=1024&h=1024&m=cropped",
        href:"/sale/clean"
    },
    {
        image: "https://s7.gifyu.com/images/retouch_1649436341703.jpg",
        href:"/sale/electrical"
    }
 
];

function seeddeal(){
    deal.remove({}, err => {
        if(err) console.log(err);
        deals.forEach(seed => {
            deal.create(seed, (err, deal) => {
                if(err) console.log(err);
                deal.save();
            });
        });
    });
}

module.exports = seeddeal;