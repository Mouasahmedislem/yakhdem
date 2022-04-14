var mongoose  = require('mongoose')
var health = require('../models/health')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var healths = [
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgThumbResponsive/364546-gosford-laminate-flooring-2.jpg",
        title: "Gosford Light Grey Oak Effect Laminate Flooring 2.22m²",
        price: 900
    }
 
];

function seedhealth(){
    health.remove({}, err => {
        if(err) console.log(err);
        healths.forEach(seed => {
            health.create(seed, (err, health) => {
                if(err) console.log(err);
                health.save();
            });
        });
    });
}

module.exports = seedhealth;