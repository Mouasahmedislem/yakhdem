var mongoose  = require('mongoose')
var tool = require('../models/tool')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var tools = [
    {
        image: "//cdn.bmstores.co.uk/images/hpcOneThirdContentWidthImage/image373/33pc-mobile-acc2.jpg",
        title: "Mobile Accessories",
        href:"/sale/tool/ladder"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/imgSource/50pc-microwaves1.jpg",
        title: "Microwaves",
        href:"/sale/tool/hand"
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcOneThirdContentWidthImage/image745/66pc-blenders3.jpg",
        title: "Blander & Food Processors",
        href:"/sale/tool/power"
    }
 
];

function seedtool(){
    tool.remove({}, err => {
        if(err) console.log(err);
        tools.forEach(seed => {
            tool.create(seed, (err, tool) => {
                if(err) console.log(err);
                tool.save();
            });
        });
    });
}

module.exports = seedtool;