var mongoose  = require('mongoose')
var wow = require('../models/wow')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var wows = [
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgThumbResponsive/364546-gosford-laminate-flooring-2.jpg",
        title: "Gosford Light Grey Oak Effect Laminate Flooring 2.22m²",
        price: 900,
        was:2000
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/351012-carrick-oak-effect-laminate--flooring-2.jpg",
        title: "Carrick Oak Effect Laminate Flooring 2.22m²",
        price: 500,
        was:1000
    }
 
];

function seedwow(){
    wow.remove({}, err => {
        if(err) console.log(err);
        wows.forEach(seed => {
            wow.create(seed, (err, wow) => {
                if(err) console.log(err);
                wow.save();
            });
        });
    });
}

module.exports = seedwow;