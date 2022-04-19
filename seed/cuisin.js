var mongoose  = require('mongoose')
var cuisin = require('../models/cuisin')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var cuisins = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/0804/1.jpg?3886",
        title: "Pulvérisateur D'Huile En Verre Vaporisateur - Rechargeable",
        price: 350
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1772/1.jpg?6140",
        title: "Marteau À Viande Milanais En Bois",
        price: 500
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/62/1.jpg?7630",
        title: "Corbeille A Fruits/Planche À Découper (Fruit Basket) -Marron",
        price: 920
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/95/9393/4.jpg?6087",
        title: "Organisateur De Cuisine Magnétique Porte Papier,Épices,Serviettes Multifonction ,Organisateur Réfrigérateur-Noir",
        price: 2350
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/8703/1.jpg?7085",
        title: "Bestway Sac Glacière Isotherme - 15 Litres - Vert",
        price: 3420
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/10/5104/1.jpg?4728",
        title: "MONTELLA Marmite - Vivo - Pot En Granit - Couvercle En Verre",
        price: 3750
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(whie)/product/06/0822/1.jpg?5384",
        title: "Poubelle Suspendue Pliable Pour Cuisine Voiture",
        price: 1550
    }
    
 
];

function seedcuisin(){
    cuisin.remove({}, err => {
        if(err) console.log(err);
        cuisins.forEach(seed => {
            cuisin.create(seed, (err, cuisin) => {
                if(err) console.log(err);
                cuisin.save();
            });
        });
    });
}

module.exports = seedcuisin;