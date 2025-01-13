var mongoose  = require('mongoose')
var rug = require('../models/rug')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var rugs = [
  {
        image: "https://s9.gifyu.com/images/SV82T.png",
        title: "Paintello's Paint Onecoat BEIG 02 4KG",
        href : "/onecoat/beig02",
        price: 2700.00
    },
   
    {
        image: "https://s12.gifyu.com/images/SV82N.png",
        title: "Paintello's Paint Onecoat Blue 09 Matt 4KG",
        href : "/onecoat/bleu09",
        price: 2700.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82K.png",
        href : "/onecoat/green08",
        title: "Paintello's Paint Onecoat Green 08 Matt 4KG",
        price: 2700.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82H.png",
        title: "Paintello's Paint Onecoat GREEN 18 MATT 4KG",
        href : "/onecoat/green18",
        price: 2700.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82x.png",
        title: "Paintello's Paint Onecoat Grey 01 Matt 4KG",
        href : "/onecoat/grey01",
        price: 2700.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82w.png",
        title: "Paintello's Paint Onecoat Pink 09 Matt 4KG",
        href : "/onecoat/pink09",
        price: 2700.00
    },
    {
        image: "https://s12.gifyu.com/images/SV829.png",
        title: "Paintello's Paint Onecoat Pink 13 Nashville House Matt 4KG",
        href : "/onecoat/pink13",
        price: 2700.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82E.png",
        title: "Paintello's Paint Onecoat  Red 01 Matt  4KG",
        href : "/onecoat/red01",
        price: 2700.00
    },
    {
        image: "https://s12.gifyu.com/images/SV82h.png",
        title: "Paintello's Paint Onecoat Taupe 01 Matt 4KG",
        href : "/onecoat/taupe",
        price: 2700.00
    },
   
    {
        image: "https://s12.gifyu.com/images/SV82k.png",
        title: "Paintello's Paint Onecoat White 01 4KG",
        href : "/onecoat/white01",
        price: 2700.00
    },
    {
        image: "https://s9.gifyu.com/images/SV82v.png",
        title: "Paintello's Paint Onecoat Yellow 06 Matt 4KG",
        href : "/onecoat/yallaw",
        price: 2700.00
    },
   {
        image: "https://s10.gifyu.com/images/SY4FH.png",
        title: "Paintello's Paint Onecoat bleue 14 4KG",
        href : "/onecoat/bleue14",
        price: 2700.00
    },
  {
        image: "https://s10.gifyu.com/images/SY4FK.png",
        title: "Paintello's Paint Onecoat bleue08 4KG",
        href : "/onecoat/blue08",
        price: 2700.00
    },
  {
        image: "https://s10.gifyu.com/images/SY4FN.png",
        title: "Paintello's Paint Onecoat BEIGE 09 4KG",
        href : "/onecoat/BEIGE09",
        price: 2700.00
    },
  {
        image: "https://s12.gifyu.com/images/SY4Fw.png",
        title: "Paintello's Paint Onecoat BEIGE 01 4KG",
        href : "/onecoat/beige01",
        price: 2700.00
    },
  {
        image: "https://s12.gifyu.com/images/SY4F3.png",
        title: "Paintello's Paint Onecoat bleue15 4KG",
        href : "/onecoat/blue15",
        price: 2700.00
    },
  {
        image: "https://s12.gifyu.com/images/SY4F9.png",
        title: "Paintello's Paint Onecoat green09 4KG",
        href : "/onecoat/green09",
        price: 2700.00
    },
  {
        image: "https://s10.gifyu.com/images/SY4Fh.png",
        title: "Paintello's Paint Onecoat grey03 4KG",
        href : "/onecoat/grey03",
        price: 2700.00
    },
  {
        image: "https://s12.gifyu.com/images/SY4FE.png",
        title: "Paintello's Paint Onecoat green13 4KG",
        href : "/onecoat/green13",
        price: 2700.00
    },
  {
        image: "https://s10.gifyu.com/images/SY4Fk.png",
        title: "Paintello's Paint Onecoat grey14 4KG",
        href : "/onecoat/grey14",
        price: 2700.00
    },
  {
        image: "https://s10.gifyu.com/images/SY4Fv.png",
        title: "Paintello's Paint Onecoat pink02 4KG",
        href : "/onecoat/pink02",
        price: 2700.00
    },
  {
        image: "https://s12.gifyu.com/images/SY4Fm.png",
        title: "Paintello's Paint Onecoat pink03 4KG",
        href : "/onecoat/pink03",
        price: 2700.00
    },
  {
        image: "https://s12.gifyu.com/images/SY4Fq.png",
        title: "Paintello's Paint Onecoat pink04 4KG",
        href : "/onecoat/pink04",
        price: 2700.00
    },
  {
        image: "https://s12.gifyu.com/images/SY4F7.png",
        title: "Paintello's Paint Onecoat pink07 4KG",
        href : "/onecoat/pink07",
        price: 2700.00
    },
  {
        image: "https://s10.gifyu.com/images/SY4Fd.png",
        title: "Paintello's Paint Onecoat yellow01 4KG",
        href : "/onecoat/yallaw01",
        price: 2700.00
    },
  {
        image: "https://s10.gifyu.com/images/SY4Fl.png",
        title: "Paintello's Paint Onecoat yellow07 4KG",
        href : "/onecoat/yallaw",
        price: 2700.00
    }
 
 
];

function seedrug(){
    rug.remove({}, err => {
        if(err) console.log(err);
        rugs.forEach(seed => {
            rug.create(seed, (err, rug) => {
                if(err) console.log(err);
                rug.save();
            });
        });
    });
}

module.exports = seedrug;
