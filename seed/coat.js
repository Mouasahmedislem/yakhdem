var mongoose  = require('mongoose')
var coat = require('../models/coat')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var coats = [
     {
        image: "https://s9.gifyu.com/images/SV82T.png",
        title: "Paintello's Paint Onecoat BEIG 02 4KG",
        price: 2390.00
    },
   
    {
        image: "https://s12.gifyu.com/images/SV82N.png",
        title: "Paintello's Paint Onecoat Blue 09 Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82K.png",
        title: "Paintello's Paint Onecoat Green 08 Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82H.png",
        title: "Paintello's Paint Onecoat GREEN 18 MATT 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82x.png",
        title: "Paintello's Paint Onecoat Grey 01 Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82w.png",
        title: "Paintello's Paint Onecoat Pink 09 Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SV829.png",
        title: "Paintello's Paint Onecoat Pink 13 Nashville House Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82E.png",
        title: "Paintello's Paint Onecoat  Red 01 Matt  4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82h.png",
        title: "Paintello's Paint Onecoat Taupe 01 Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://s5.gifyu.com/images/SRFTl.jpg",
        title: "Paintello's Paint Onecoat 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82k.png",
        title: "Paintello's Paint Onecoat White 01 4KG",
        price: 2590.00
    },
    {
        image: "https://s9.gifyu.com/images/SV82v.png",
        title: "Paintello's Paint Onecoat Yellow 06 Matt 4KG",
        price: 2590.00
    }
 
    
 
];

function seedcoat(){
    coat.remove({}, err => {
        if(err) console.log(err);
        coats.forEach(seed => {
          coat.create(seed, (err, coat) => {
                if(err) console.log(err);
                coat.save();
            });
        });
    });
}

module.exports = seedcoat;
