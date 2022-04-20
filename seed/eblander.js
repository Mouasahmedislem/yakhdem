var mongoose  = require('mongoose')
var blander = require('../models/blander')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var blanders = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/0362/1.jpg?2862",
        title: "Sonifer Bras Mixeur - 200 Watts - Noir",
        price: 2050
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/549/1.jpg?8168",
        title: "Bomann Robot Pétrin - KM 6010 CB - 5L - 1100 W -- Titane",
        price:16950
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/4581/1.jpg?6967",
        title: "Bomann Mousseur A LaitTexture Agréable Batteur En Inox Piles 2 X- 344-Noir",
        price: 1250
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/0003/1.jpg?4865",
        title: "Scarlet Batteur À Œ ufsÉlectrique À Angle Rotatif, Batteur À Main À 7 Vitesses",
        price: 1450
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/4321/1.jpg?9803",
        title: "Techwood Mini Hachoir -Tha-082 - Blanc",
        price:3350 
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/1722/1.jpg?2265",
        title: "Techwood Blender Electrique 1.5 L- 450WTbl-765- Blanc-Rouge",
        price: 4700
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/6973/1.jpg?1706",
        title: "Sonifer Moulin À Café /Épices & Graines - 100Grammes - 300 W - Noir",
        price:3440 
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/1302/1.jpg?9746",
        title: "Chocolatière Machine Chocolat Bricolage Fondre Machine À Pot UniqueMaron",
        price: 1950
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/2551/3.jpg?2921",
        title: "Sinbo Crêpière Électrique -Sp-5208 - Blanc",
        price: 3350
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/0773/1.jpg?4926",
        title: "Techwood Blender Electrique 1,5L 500W-Noir",
        price: 5350
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/7304/2.jpg?0189",
        title: "PLANETSAT Bouilloire 1,8 Litre - 2200 Watts- Argent/Noir",
        price: 2650
    }
    
 
];

function seedblander(){
    blander.remove({}, err => {
        if(err) console.log(err);
        blanders.forEach(seed => {
            blander.create(seed, (err, blander) => {
                if(err) console.log(err);
                blander.save();
            });
        });
    });
}

module.exports = seedblander;