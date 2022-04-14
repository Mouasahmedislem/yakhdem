var mongoose  = require('mongoose')
var kitchen = require('../models/kitchen')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var kitchens = [
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0016.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Apple Flower 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0015.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Lime Crush 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00148dd96c139f27d12a.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Oatcake 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0013a130c22a39140ea0.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Chapel Stone 2.5",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0011.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Magnolia 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0009bdb6051a06123a1c.jpg",
        title: "Paintello's Paint Bathroom Midsheen - White Lace 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0010.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Antique Cream 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0026.jpg",
        title: "Paintello's Paint Kitchen Mat - Lime Crush 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0032f4d203560e1aa128.jpg",
        title: "Paintello's Paint Kitchen Mat - Magnolia 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0031.jpg",
        title: "Paintello's Paint Kitchen Mat - Antique Cream 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA003403cc89faebbf9981.jpg",
        title: "Paintello's Paint Kitchen Mat - white 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA003352c10577e60686a0.jpg",
        title: "Paintello's Paint Kitchen Mat - Silver Feather 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0035.jpg",
        title: "Paintello's Paint Kitchen Mat - Botanical Pearl 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0036d1646e48f49bc2f5.jpg",
        title: "Paintello's Paint Kitchen Mat - Frosted Silver 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0008.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Hot Cherry 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0000d30eb36ff3abca75.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Hot Che 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0007d5e36f821b46fb25.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Hemlock 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0006.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Natural Sage 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0005a5d6142cd8056aca.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Vintage Duck Egg 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0003cd6580d6f0c6a1dd.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Frosted Silver 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0004f97cf78531b384c0.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Pure Brilliant White 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0002.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Lemon Daze 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0001.jpg",
        title: "Paintello's Paint Bathroom Midsheen - Manhattan Grey 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0038.jpg",
        title: "Paintello's Paint Kitchen Mat - Seashell 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0037.jpg",
        title: "Paintello's Paint Kitchen Mat - Summer Storm 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0039.jpg",
        title: "Paintello's Paint Kitchen Mat - White Lace 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA004156bfc8ef96f008c8.jpg",
        title: "Paintello's Paint Kitchen Mat - Pure Silk 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA004040311825728b2f34.jpg",
        title: "Paintello's Paint Kitchen Mat - Jade 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0042.jpg",
        title: "Paintello's Paint Kitchen Mat - Manhattan Grey 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0044.jpg",
        title: "Paintello's Paint Kitchen Mat - Blue Shore 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0043.jpg",
        title: "Paintello's Paint Kitchen Mat - Island Breeze 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0046.jpg",
        title: "Paintello's Paint Kitchen Mat - Oatcake 2.5L",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA0045cb80ced8937f636c.jpg",
        title: "Paintello's Kitchen Mat - Chapel Stone 2.5",
        price: 1299.99
    },
    {
        image: "https://s7.gifyu.com/images/IMG-20220413-WA00473a20839cc8894dbd.jpg",
        title: "Paintello's Paint Kitchen Mat - Magnolia 2.5L",
        price: 1299.99
    }


   
];

function seedkitchen(){
    kitchen.remove({}, err => {
        if(err) console.log(err);
        kitchens.forEach(seed => {
            kitchen.create(seed, (err, kitchen) => {
                if(err) console.log(err);
                kitchen.save();
            });
        });
    });
}

module.exports = seedkitchen;