var mongoose  = require('mongoose')
var iron = require('../models/iron')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var irons = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/0842/1.jpg?2205",
        title: "Tefal Fer À Repasser À Vapeur -Fv3970-Easygliss- Voilet",
        price: 7950
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/0243/1.jpg?1927",
        title: "Adler Fer à repasser - AD 5022 Adler -Mauve",
        price: 3690
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/0972/1.jpg?7451",
        title: "Techwood Defroisseur Vertical A Vappeur - 25G/Min - 220Ml - Tdv 1205 - Rouge",
        price: 5500
    }
 
 
];

function seediron(){
    iron.remove({}, err => {
        if(err) console.log(err);
        irons.forEach(seed => {
            iron.create(seed, (err, iron) => {
                if(err) console.log(err);
                iron.save();
            });
        });
    });
}

module.exports = seediron;