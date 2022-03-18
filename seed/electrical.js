var mongoose  = require('mongoose')
var electrical = require('../models/electrical')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var electricals = [
    {
        image: "//cdn.bmstores.co.uk/images/hpcOneThirdContentWidthImage/image373/33pc-mobile-acc2.jpg",
        title: "Mobile Accessories",
        href:"/sale/electricals/mobile"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/imgSource/50pc-microwaves1.jpg",
        title: "Microwaves",
        href:"/sale/electricals/micro"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcOneThirdContentWidthImage/image745/66pc-blenders3.jpg",
        title: "Blander & Food Processors",
        href:"/sale/electricals/blander"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcOneThirdContentWidthImage/image373/33pc-steam-mops3.jpg",
        title: "Cleaning",
        href:"/sale/electricals/cleaning"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcOneThirdContentWidthImage/image373/33pc-vacuums-new1.jpg",
        title: "Vacuum Cleaners",
        href:"/sale/electricals/vacuum"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/imgSource/50pc-kettles4.jpg",
        title: "Kettles & Coffee Machines",
        href:"/sale/electricals/coffee"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/imgSource/50pc-food-prep1.jpg",
        title: "Food Preparation",
        href:"/sale/electricals/food"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcOneThirdContentWidthImage/image373/33pc-gaming2.jpg",
        title: "Gaming",
        href:"/sale/electricals/gaming"
    },
   
    {
        image: "//cdn.bmstores.co.uk/images/hpcOneThirdContentWidthImage/image373/33pc-beauty2.jpg",
        title: "Health & Beauty",
        href:"/sale/electricals/health"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcOneThirdContentWidthImage/image373/33pc-irons4.jpg",
        title: "Irons",
        href:"/sale/electricals/iron"
    }
 
];

function seedelectrical(){
    electrical.remove({}, err => {
        if(err) console.log(err);
        electricals.forEach(seed => {
            electrical.create(seed, (err, electrical) => {
                if(err) console.log(err);
                electrical.save();
            });
        });
    });
}

module.exports = seedelectrical;