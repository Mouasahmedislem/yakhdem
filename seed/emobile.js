var mongoose  = require('mongoose')
var mobile = require('../models/mobile')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var mobiles = [
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/3071/1,jpg?9327",
        title: "Câble 1M Faste charge type CRouge",
        price: 450
    },
    
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/4804/1,jpg?8306",
        title: "Wd power Bank Power Bank 10000Mah - Noir",
        price: 950
    },
    
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/7812/4.jpg?4087",
        title: "Support TéléphoneAvec Capteur Et Chargeur Sans Fil Pour Voiture Wireless Charge",
        price: 1450
    },
    
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/796/3.jpg?9964",
        title: "mac tech Mobile Holder -MT-HL100 - Noir",
        price: 950
    },
    
    {
        image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/8443/1,jpg?0888",
        title: "Hoco Chargeur Auto -Double Port Usb Et Type C - Blanc",
        price: 1850
    }
    
 
];

function seedmobile(){
    mobile.remove({}, err => {
        if(err) console.log(err);
        mobiles.forEach(seed => {
            mobile.create(seed, (err, mobile) => {
                if(err) console.log(err);
                mobile.save();
            });
        });
    });
}

module.exports = seedmobile;