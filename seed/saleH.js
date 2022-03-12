var mongoose  = require('mongoose')
var sale = require('../models/saleH')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

 sales = [
    
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/electrical-320x3201.jpg",
    title: "Electrical Sale",
    href:"/sale/electrical"

},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/furniture-320x3203.jpg",
    title: "Furniture Sale",
    href:"/sale/furniteur"

},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/rugs-sale-320x3201.jpg",
    title: "Rugs Sale",
    href:"/sale/rug"
},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/kitchen-sale-320x3201.jpg",
    title: "Kitchen Sale",
    href:"/sale/cuisin"
},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/scooters6.jpg",
    title: "Home Decor Sale<",
    href:"/sale/decor"
},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/scooters6.jpg",
    title: "Soft Furnishings Sale",
    href:"/sale/soft"
},
{
    image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/imgSource/50pc-bedding18.jpg",
    title: "Bedding Sale",
    href:"/sale/bedding"
},
{
    image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/imgSource/50pc-curtains8.jpg",
    title: "Curtains Sale",
    href:"/sale/curtain"
},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/scooters6.jpg",
    title: "Stationery Sale",
    href:"/sale/station"
},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/scooters6.jpg",
    title: "Laundry & Cleaning Sale",
    href:"/sale/clean"
}


];

function seedsale(){
sale.remove({}, err => {
    if(err) console.log(err);
    sales.forEach(seed => {
        sale.create(seed, (err, sale) => {
            if(err) console.log(err);
            sale.save();
        });
    });
});
}

module.exports = seedsale;