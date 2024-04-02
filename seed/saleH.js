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
    image: "https://s9.gifyu.com/images/SVZ73.png",
    title: "Satiné Paint",
    href:"/sale/clean"

},
{
    image: "https://s12.gifyu.com/images/SVZ7i.png",
    title: "Vinyl Paint",
    href:"/sale/furniteur"

},
{
    image: "https://s9.gifyu.com/images/SV6ra.png",
    title: "Onecoat Matt Paint",
    href:"/sale/rug"
},
   {
    image: "https://s7.gifyu.com/images/IMG-20220413-WA003403cc89faebbf9981.jpg",
    title: "Bathroom Paint",
    href:"/sale/cuisin"
},
 
{
    image: "https://cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/decorating-320x3201.jpg",
    title: "Outils paint",
    href:"/wow"
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
