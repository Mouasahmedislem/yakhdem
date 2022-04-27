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
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/ladders1.jpg",
        title: "Ladders",
        href:"/tool/ladder"
    },
    {
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/hand-tools1.jpg",
        title: "Hand Tools",
        href:"/tool/hand"
    },
    {
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/power-tools1.jpg",
        title: "Power Tools",
        href:"/tool/power"
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