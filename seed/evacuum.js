var mongoose  = require('mongoose')
var vacuum = require('../models/vacuum')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var vacuums = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/5722/1.jpg?0534",
        title: "Techwood Aspirateur À Main Pour Voiture Filaire-12 V-Prise Sur Allume-Cigare-Tav-8266 -Blanc-Noir",
        price: 3240
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/2233/1.jpg?7827",
        title: "Souffleur Et Aspirateur 2En1 800W Ingco Ab8008 - Jaune",
        price: 6900
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/55/7983/1.jpg?1851",
        title: "Orca Aspirateur 3.5L 1600W Orca Vac-1600",
        price:13000 
    }
    
 
];

function seedvacuum(){
    vacuum.remove({}, err => {
        if(err) console.log(err);
        vacuums.forEach(seed => {
            vacuum.create(seed, (err, vacuum) => {
                if(err) console.log(err);
                vacuum.save();
            });
        });
    });
}

module.exports = seedvacuum;