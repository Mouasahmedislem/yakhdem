var mongoose  = require('mongoose')
var Wall = require('../models/wallpaper')

mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var Walls = [
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/371354-retro-stripe-grey-wallpaper-2.jpg",
        title: "retro-stripe-grey-wallpaper 10mètres/0.53",
        price: 1000
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/371178-arthouse-dazzle-stripe-wallpaper-2.jpg",
        title: "arthouse-dazzle-stripe-wallpaper 10mètres/0.53",
        price: 1000
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/378765-glitter-stripe-duck-egg-wallpaper-2.jpg",
        title: "glitter-stripe-duck-egg-wallpaper 10mètres/0.53",
        price: 1000
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/330572-Rasch-Broken-Brick-Wallpaper-2.jpg",
        title: "Rasch-Broken-Brick-Wallpaper 10mètres/0.53 ",
        price: 2500
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/346169-debona-glitter-brick-charcoa-wallpaper-2.jpg",
        title: "debona-glitter-brick-charcoa-wallpaper 10mètres/0.53",
        price: 2500
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/346170-debona-glitter-brick-natural-wallpaper.jpg",
        title: "debona-glitter-brick-natural-wallpaper 10mètres/0.53",
        price: 2500
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/346184-debona-metallic-brick-charcoal-wallpaper.jpg",
        title: "debona-metallic-brick-charcoal-wallpaper 10mètres/0.53",
        price: 2500
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/358178-house-brick-black-wallpaper-2.jpg",
        title: "house-brick-black-wallpaper 10mètres/0.53",
        price: 2500
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/371202-grandeco-durham-brick-red-wallpaper-2.jpg",
        title: "grandeco-durham-brick-red-wallpaper 10mètres/0.53",
        price: 2500
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/371209-grandeco-inhibition-stone-wallpaper-2.jpg",
        title: "grandeco-inhibition-stone-wallpaper 10mètres/0.53",
        price: 2500
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/371256-debona-metallic-brick-white-wallpaper-2.jpg",
        title: "debona-metallic-brick-white-wallpaper 10mètres/0.53",
        price: 2500
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/378745-apex-geo-grey-white-wallpaper-2.jpg",
        title: "apex-geo-grey-white-wallpaper 10mètres/0.53",
        price: 2700
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/371345-apex-geo-navy-wallpaper-2.jpg",
        title: "apex-geo-navy-wallpaper 10mètres/0.53",
        price: 2700
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/378458-giorgio-greek-key-navy-wallpaper-2.jpg",
        title: "giorgio-greek-key-navy-wallpaper 10mètres/0.53",
        price: 2700
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/341214-arthouse-linen-mid-grey-wallpaper1.jpg",
        title: "arthouse-linen-mid-grey-wallpaper 10mètres/0.53",
        price: 2950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/335092-fine-decor-alexis-texture-silver.jpg",
        title: "fine-decor-alexis-texture-silver 10mètres/0.53",
        price: 2950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/358051-giorgio-silver-texture-wallpaper-3.jpg",
        title: "giorgio-silver-texture-wallpaper 10mètres/0.53",
        price: 2700
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/371258-dbona-crystal-navy-plain-wallpaper-2.jpg",
        title: "dbona-crystal-navy-plain-wallpaper 10mètres/0.53",
        price: 2950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/381798-belgravia-oria-glitter-plain-greywallpaper.jpg",
        title: "belgravia-oria-glitter-plain-greywallpaper 10mètres/0.53",
        price: 2950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/378439-axton-texture-blue-wallpaper-2.jpg",
        title: "axton-texture-blue-wallpaper 10mètres/0.53",
        price: 2950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/378468-grass-cloth-silver-wallpaper-2.jpg",
        title: "grass-cloth-silver-wallpaper 10mètres/0.53",
        price: 2950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/378449-crystal-blush-wallpaper-2.jpg",
        title: "crystal-blush-wallpaper 10mètres/0.53",
        price: 2950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/324789-arthouse-diamond-plain-black-wallpaper-Edit.jpg",
        title: "arthouse-diamond-plain-black-wallpaper-Edit 10mètres/0.53",
        price: 2950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/312178-Crystal-Gold-Tex-Room-Wallpaper1.jpg",
        title: "Crystal-Gold-Tex-Room-Wallpaper 10mètres/0.53",
        price: 2950
    }
   
   
   
   
   
];

function seedWall(){
    Wall.remove({}, err => {
        if(err) console.log(err);
        Walls.forEach(seed => {
            Wall.create(seed, (err, Wall) => {
                if(err) console.log(err);
                Wall.save();
            });
        });
    });
}

module.exports = seedWall;