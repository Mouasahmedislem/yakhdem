
var mongoose  = require('mongoose')
var vinyl = require('../models/vinyl')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

vinyls = [
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237443-johnstones-brilliant-white-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Brilliant White 2.5L",
        price: 1199.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237444-johnstones-brilliant-white-soft-sheen-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Soft Sheen Emulsion - Brilliant White 2.5L",
        price: 1199.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237442-johnstones-brilliant-white-matt-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Matt Emulsion - Brilliant White 2.5L",
        price: 1000.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237053-johnstones-red-spice-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Red Spice 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237049-johnstones-mocha-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Mocha 2.5",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/276846-johnstones-deep-amethyst-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Deep Amethyst 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/346708-johnstones-dark-angel-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Dark Angel 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237030-johnstones-burnt-sugar-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Burnt Sugar 2.5",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237026-johnstones-aqua-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Aqua 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237054-johnstones-rich-red-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Rich Red 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237060-johnstones-sweet-lavender-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Sweet Lavender 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/255314-johnstones-lime-crush-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Lime Crush 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237063-johnstones-waterfall-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Waterfall 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/255317-johnstones-new-duck-egg-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - New Duck Egg 2.5L",
        price: 1299.99
    },
    
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/253315-johnstones-moonlit-sky-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Moonlit Sky 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/255316-johnstones-steel-smoke-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Steel Smoke 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/276847-johnstones-manhattan-grey-silk-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Silk Emulsion - Manhattan Grey 2.5",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/236998-johnstones-rich-red-matt-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Matt Emulsion - Rich Red 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237004-johnstones-sweet-lavender-matt-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Matt Emulsion - Sweet Lavender 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/236967-johnstones-brandy-cream-matt-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Matt Emulsion - Brandy Cream 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/237007-johnstones-waterfall-matt-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Matt Emulsion - Waterfall 2.5",
        price: 1299.99
    },
     {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/255309-johnstones-moonlit-sky-matt-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Matt Emulsion - Moonlit Sky 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/255310-johnstones-steel-smoke-matt-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Matt Emulsion - Steel Smoke 2.5L",
        price: 1299.99
    },
   
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/276838-johnstones-manhattan-grey-matt-2_5l-paint.jpg",
        title: "Johnstone's Paint Vinyl Matt Emulsion - Manhattan Grey 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/255307-johnstones-white-whisper-matt-2_5l-paint.jpg",
        title: "Johnstone’s Paint Matt Emulsion White Whisper 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/255311-johnstones-new-duck-egg-matt-2_5l-paint.jpg",
        title: "Johnstone’s Paint Vinyl Matt Emulsion - New Duck Egg 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/236968-johnstones-burnt-sugar-matt-2_5l-paint.jpg",
        title: "Johnstone’s Paint Vinyl Matt Emulsion - Burnt Sugar 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/236985-johnstones-magnolia-matt-2_5l-paint.jpg",
        title: "Johnstone's Vinyl Matt Emulsion Magnolia 2.5L",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/343287-johnstones-brilliant-white-silk-5l-paint.jpg",
        title: "Johnstone's Silk Paint 5L - Brilliant White",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/342386-johnstones-brilliant-white-soft-sheen-5l-paint.jpg",
        title: "Johnstone's Soft Sheen Paint 5L - Brilliant White",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/342385-johnstones-brilliant-white-matt-5l-paint.jpg",
        title: "Johnstone's Matt Paint 5L - Brilliant White",
        price: 1299.99
    },
    {
        image: "//cdn.bmstores.co.uk/images/hpcProductImage/imgTeaserBox/321104-johnstones-washable-brilliant-white-2_5l-paint.jpg",
        title: "Johnstone's Washable Matt Paint - Brilliant White 2.5L",
        price: 1299.99
    }
    
];

function seedvinyl(){
    vinyl.remove({}, err => {
        if(err) console.log(err);
        vinyls.forEach(seed => {
            vinyl.create(seed, (err, vinyl) => {
                if(err) console.log(err);
                vinyl.save();
            });
        });
    });
}

module.exports = seedvinyl;

    