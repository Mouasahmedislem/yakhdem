var mongoose  = require('mongoose')
var interior = require('../models/interior')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var interiors = [
    
    {
        image: "https://s8.gifyu.com/images/IMG-20220413-WA0027.jpg",
        title: "Emulsion (Vinyl)",
        href:"/interior/emolusion"
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220418-WA0017.jpg",
        title: "Brillliant(Satinée)",
        href:"/interior/satin"
    },
    {
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/kitchen-bathroom1.jpg",
        title: "Kitchen & Bathroom",
        href:"/interior/kitchen"
    },
    {
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/spray1.jpg",
        title: "Spray Paint",
        href:"/interior/spray"
    },
    {
        image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/glitter2.jpg",
        title: "Glitter & Gems",
        href:"/interior/gliter"
    }
    
 
];

function seedinterior(){
    interior.remove({}, err => {
        if(err) console.log(err);
        interiors.forEach(seed => {
            interior.create(seed, (err, interior) => {
                if(err) console.log(err);
                interior.save();
            });
        });
    });
}

module.exports = seedinterior;