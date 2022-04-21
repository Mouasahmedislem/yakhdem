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
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/9631/2.jpg?2184",
        title: "Braun EpilateurSilk-Epil 3 Se3273 + 3 Accessoires -Blanc/Rose Framboise",
        price: 6550
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/1132/1.jpg?5743",
        title: "Kemei Kit Épilateur Electrique Pour Femme - Kemei Km 8001 - 5 In 1 -Blanc",
        price: 3850
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/0503/1.jpg?9704",
        title: "Pro Wax Pack Chauffe-Cire + 100 Spatules + 50 G Cire Granulée multicolores",
        price: 2400
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/6322/1.jpg?7209",
        title: "Mac Styler Lisseur Mc-2090 - 950 Lcd- Professionnel - Blanc",
        price: 3950
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/169/1.jpg?9252",
        title: "Lisseur & Boudeur Cheveux - Noir",
        price: 750
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/778/1.jpg?4179",
        title: "Fer À Lisser Steamstyler Professionnel À Vapeur - Noir",
        price: 4650
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/9123/1.jpg?9545",
        title: "Kemei Lisseur À Vapeur - Km-3011 -Rouge",
        price: 2750
    },
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/7643/2.jpg?4845",
        title: "Adler Sèche Cheveux - 2 Vitesses - 1200 Watts - AD 2222-Bleu/Gris",
        price: 2250
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