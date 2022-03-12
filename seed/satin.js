var mongoose  = require('mongoose')
var satin = require('../models/satin')

mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var satins = [
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgThumbResponsive/364546-gosford-laminate-flooring-2.jpg",
        title: "Gosford Light Grey Oak Effect Laminate Flooring 2.22m²",
        price: 900
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/351012-carrick-oak-effect-laminate--flooring-2.jpg",
        title: "Carrick Oak Effect Laminate Flooring 2.22m²",
        price: 500
    }
 
];

function seedsatin(){
    satin.remove({}, err => {
        if(err) console.log(err);
        satins.forEach(seed => {
            satin.create(seed, (err, satin) => {
                if(err) console.log(err);
                satin.save();
            });
        });
    });
}

module.exports = seedsatin;