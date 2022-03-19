var mongoose  = require('mongoose')
var deco = require('../models/deco')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var decos = [
    {
        image: "http://www.miniros.com/miniros1/wp-content/uploads/2015/05/RPASI1.jpg",
        title: "MINI ROULEAUX",
        price: 900
    },
    {
        image: "http://www.miniros.com/miniros1/wp-content/uploads/2014/09/rrmr10-510x435.jpg",
        title: "PAIRE DE RECHARGE MINI ROULEAU MICROFIBRE 10-6",
        price: 900
    },
    {
        image: "http://www.miniros.com/miniros1/wp-content/uploads/2014/08/RMLPL10-510x429.jpg",
        title: "MINI ROULEAU LAQUEUR 10-5",
        price: 900
    },
    {
        image: "http://www.miniros.com/miniros1/wp-content/uploads/2014/08/BNGP-510x256.jpg",
        title: "PINCEAU BOIS PLAT",
        price: 900
    },
    {
        image: "http://www.miniros.com/miniros1/wp-content/uploads/2014/08/NGRB-510x224.jpg",
        title: "PINCEAU BOIS ROND",
        price: 900
    },
    {
        image: "http://www.miniros.com/miniros1/wp-content/uploads/2014/09/AGI20-R%C3%A9cup%C3%A9r%C3%A9-510x314.jpg",
        title: "ROULEAUX POUR SURFACES PREPAREES LISSES",
        price: 900
    },
    {
        image: "http://www.miniros.com/miniros1/wp-content/uploads/2014/08/RRBP20-510x325.jpg",
        title: "ROULEAUX POUR SURFACES IRREGULIERES",
        price: 900
    },
    {
        image: "http://www.miniros.com/miniros1/wp-content/uploads/2014/08/PBNG-510x302.jpg",
        title: "BROSSE UNIVERSELLE",
        price: 900
    },
    {
        image: "http://www.miniros.com/miniros1/wp-content/uploads/2014/09/RPASM3-510x349.jpg",
        title: "ROULEAU PASSE PARTOUT MICROFIBRE 12-10",
        price: 500
    }
 
];

function seeddeco(){
    deco.remove({}, err => {
        if(err) console.log(err);
        decos.forEach(seed => {
            deco.create(seed, (err, deco) => {
                if(err) console.log(err);
                deco.save();
            });
        });
    });
}

module.exports = seeddeco;