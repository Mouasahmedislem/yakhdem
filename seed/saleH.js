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
    image: "https://s3.gifyu.com/images/bbQVj.png",
    title: "Satiné Paint",
    href:"/sale/clean"

},
{
    image: "https://s3.gifyu.com/images/bbQZf.png",
    title: "Vinyl Paint",
    href:"/sale/furniteur"

},
{
    image: "https://live.staticflickr.com/65535/54442054690_4858678fa0_c.jpg",
    title: "Onecoat Matt Paint",
    href:"/sale/rug"
},
   {
    image: "https://s12.gifyu.com/images/SYnoR.jpg",
    title: "My Fixature",
    href:"/sale/cuisin"
},
 
    {
    image: "https://s13.gifyu.com/images/b2pmM.jpg",
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
