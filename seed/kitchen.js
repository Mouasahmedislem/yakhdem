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
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347007-johnstones-apple-flower-kitchen-2_5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Apple Flower 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347020-johnstones-lime-crush-kitchen-2_5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Lime Crush 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347025-johnstones-oatcake-kitchen-2_5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Oatcake 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347011-johnstones-chapel-stone-kitchen-2_5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Chapel Stone 2.5",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347021-johnstones-magnolia-kitchen-2_5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Magnolia 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347033-johnstones-white-lace-kitchen-2_5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - White Lace 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347005-johnstones-antique-cream-kitchen-2_5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Antique Cream 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347047-johnstones-lime-crush-bathroom-2_5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Lime Crush 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347048-johnstones-magnolia-bathroom-2_5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Magnolia 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347042-johnstones-antique-cream-bathroom-2_5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Antique Cream 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347042-johnstones-silk-spa-bathroom-2_5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Silk Spa 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347051-johnstones-silver-feather-bathroom-2_5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Silver Feather 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347034-johnstones-botanical-pearl-bathroom-2_5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Botanical Pearl 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347035-johnstones-frosted-silver-bath-room-2_5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Frosted Silver 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347017-johnstones-kitchen-hot-cherry-2.5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Hot Cherry 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347015-johnstones-kitchen-hemlock-2.5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Hemlock 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347024-johnstones-kitchen-natural-sage-2.5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Natural Sage 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347032-johnstones-kitchen-vintage-duck-egg-2.5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Vintage Duck Egg 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347013-johnstones-kitchen-frosted-silver-2.5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Frosted Silver 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347026-johnstones-kitchen-pure-brilliant-white-2.5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Pure Brilliant White 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347019-johnstones-kitchen-lemon-daze-2.5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Lemon Daze 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347022-johnstones-kitchen-manhattan-grey-2.5l-paint.jpg",
        title: "Johnstone's Paint Kitchen Matt - Manhattan Grey 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347050-johnstones-bathroom-seashell-2.5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Seashell 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347039-johnstones-bathroom-summer-storm-2.5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Summer Storm 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347040-johnstones-bathroom-white-lace-2.5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - White Lace 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347044-johnstones-bathroom-pure-brilliant-white-2.5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Pure Brilliant White 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347046-johnstones-bathroom-jade-2.5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Jade 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347049-johnstones-bathroom-manhattan-grey-2.5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Manhattan Grey 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347043-johnstones-bathroom-blue-shore-2.5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Blue Shore 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/347045-johnstones-island-breeze-2.5l-paint.jpg",
        title: "Johnstone's Paint Bathroom Midsheen - Island Breeze 2.5L",
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