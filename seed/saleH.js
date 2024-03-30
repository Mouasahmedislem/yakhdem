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
    image: "https://s7.gifyu.com/images/IMG-20220418-WA0010.jpg",
    title: "Interior Paint",
    href:"/sale/clean"

},
{
    image: "https://s8.gifyu.com/images/IMG-20220413-WA0027.jpg",
    title: "Vinyl Paint",
    href:"/sale/furniteur"

},
{
    image: "https://s7.gifyu.com/images/IMG-20220413-WA003403cc89faebbf9981.jpg",
    title: "Cuisine Paint",
    href:"/sale/rug"
},
{
    image: "https://s7.gifyu.com/images/IMG-20220413-WA0011.jpg",
    title: "Bathroom Paint",
    href:"/sale/rug"
},
{
    image: "https://cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/decorating-320x3201.jpg",
    title: "Outils paint",
    href:"/wow"
},
{
    image: "https://cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/decorating-320x3201.jpg",
    title: "OnecoatPaint",
    href:"/sale/coat"
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
