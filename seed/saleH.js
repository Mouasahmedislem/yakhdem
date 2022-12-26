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
    image: "https://img.ltwebstatic.com/images3_pi/2022/11/05/1667631493cbab69d546706071caa80ee75ecea1ed_thumbnail_600x.webp",
    title: "ROBES",
    href:"/sale/electrical"

},
{
    image: "https://img.ltwebstatic.com/images3_pi/2022/01/14/16421248099e159d74be5564f8e6955460141e7113_thumbnail_600x.webp",
    title: "LINGERIES & PYJAMAS",
    href:"/sale/furniteur"

},
{
    image: "https://img.ltwebstatic.com/images3_app/2022/11/07/1667784596a5090608716f61a8a003d3658acbad66.webp",
    title: "FASHION",
    href:"/sale/rug"
},
{
    image: "https://img.ltwebstatic.com/images3_pi/2022/10/27/16668411525081cb5dbe7c66e924badcb4ed6e871f_thumbnail_600x.webp",
    title: "TENUES DE SPORT",
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
