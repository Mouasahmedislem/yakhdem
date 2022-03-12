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
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/image1150/kitchen-sale1.jpg",
        href:"/sale/cuisin"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/image1150/organise-your-home1.jpg",
        href:"/sale/decor"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/image1150/electrical-sale4.jpg",
        href:"/sale/electrical"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/image1150/toy-offers2.jpg",
        href:"/sport/toy"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/image1150/healthy-eating1.jpg",
        href:"/sport/healty"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/image1150/wow-deals28.jpg",
        href:"/deal"
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