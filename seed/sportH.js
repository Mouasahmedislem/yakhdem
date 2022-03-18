var mongoose  = require('mongoose')
var sport = require('../models/sportH')

mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
})
    
     sports = [
       
    {
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/fitness8.jpg",
        title: "Fitness",
        href:"/sport/fitnes"
    },
    {
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/travel-acc3.jpg",
        title: "Travel",
        href:"/sport/travel"
    },
    {
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/scooters6.jpg",
        title: "Scooters",
        href:"/sport/scooters"
    },
    {
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/outdoor-toys52.jpg",
        title: "Outdoor Toys",
        href:"/sport/"
    }
    
];

function seedsport(){
    sport.remove({}, err => {
        if(err) console.log(err);
        sports.forEach(seed => {
            sport.create(seed, (err, sport) => {
                if(err) console.log(err);
                sport.save();
            });
        });
    });
}

module.exports = seedsport;