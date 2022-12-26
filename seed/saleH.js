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
    image: "//cdn.bmstores.co.uk/images/hpcCatFullWidthImage/img1150/100pc-furniture21.jpg",
    title: "Furniture Sale",
    href:"/sale/furniteur"

},
{
    image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/imgSource/50pc-rugs7.jpg",
    title: "Rugs Sale",
    href:"/sale/rug"
},
{
    image: "//cdn.bmstores.co.uk/images/hpcSmallRectangleAds/imgSource/50pc-kitchen8.jpg",
    title: "Kitchen Sale",
    href:"/sale/cuisin"
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
