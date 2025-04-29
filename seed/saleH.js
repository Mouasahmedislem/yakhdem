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
    image: "https://live.staticflickr.com/65535/54484395216_d227a00f2e.jpg",
    title: "Satiné Paint",
    href:"/sale/clean"

},
{
    image: "https://live.staticflickr.com/65535/54484751175_3ef27d731f.jpg" ,
    title: "Vinyl Paint",
    href:"/sale/furniteur"

},
{
    image: "https://live.staticflickr.com/65535/54484598224_b88ac10983.jpg",
    title: "Onecoat Matt Paint",
    href:"/sale/rug"
},
   {
    image: "https://live.staticflickr.com/65535/54484395221_33b5de2e0e.jpg",
    title: "My Fixature",
    href:"/sale/cuisin"
},
 
    {
    image: "https://live.staticflickr.com/65535/54484751190_bcae07662f.jpg",
    title: "Paintello's MAC",
    href:"/sale/coat"
},
 
{
    image: "https://live.staticflickr.com/65535/54463331231_d36f306cb4_c.jpg",
    title: "Paintello's Tile paint",
    href:"/wow"
},
    {
    image: "https://live.staticflickr.com/65535/54424106620_55363280c4_c.jpg",
    title: "Samples",
    href:"/sale/sample"
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
