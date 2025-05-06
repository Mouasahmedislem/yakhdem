var mongoose  = require('mongoose')
var rug = require('../models/rug')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var rugs = [
  {
        image: "https://live.staticflickr.com/65535/54483207460_1e36b3f486.jpg",
        title: "Paintello's Paint SAPLINGPINK_300P Matt 4KG",
        href : "/onecoat/pink02",
        price: 3300.00
    },
   
    {
        image: "https://live.staticflickr.com/65535/54483127673_8c66470154.jpg",
        title: "Paintello's Paint Onecoat PONPONETTPINK_136P Matt 4KG",
        href : "/onecoat/pink04",
        price: 3300.00
    },
    {
        image: "https://live.staticflickr.com/65535/54483207425_1db2c5a2b5.jpg",
        href : "/onecoat/pink09",
        title: "Paintello's Paint Onecoat COOLPINK_126P Matt 4KG",
        price: 3300.00
    },
    {
        image: "https://live.staticflickr.com/65535/54483127778_b9467fd333.jpg",
        title: "Paintello's Paint Onecoat LITEELPINK_134P MATT 4KG",
        href : "/onecoat/pink07",
        price: 3300.00
    },
    {
        image: "https://live.staticflickr.com/65535/54484155241_e080721a64.jpg",
        title: "Paintello's Paint Onecoat ROMAIN_1066P Matt 4KG",
        href : "/onecoat/BEIGE09",
        price: 3300.00
    },
    {
        image: "https://live.staticflickr.com/65535/54484348774_499e68bec8.jpg",
        title: "Paintello's Paint Onecoat RAMIE_1068P Matt 4KG",
        href : "/onecoat/beig02",
        price: 3300.00
    },
    {
        image: "https://live.staticflickr.com/65535/54484348799_e2d846208c.jpg",
        title: "Paintello's Paint Onecoat PRINT_1062P Matt 4KG",
        href : "/onecoat/beige01",
        price: 3300.00
    },
    
   
    {
        image: "https://live.staticflickr.com/65535/54484348844_c0c950df9c.jpg",
        title: "Paintello's Paint Onecoat MINTAD_988P 4KG",
        href : "/onecoat/beige05",
        price: 3300.00
    },
    {
        image: "https://live.staticflickr.com/65535/54484435263_3dc0a22f66.jpg",
        title: "Paintello's Paint Onecoat LULLABY_986 Matt 4KG",
        href : "/onecoat/beige06",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54484155326_4b1627c169.jpg",
        title: "Paintello's Paint Onecoat LITTELSTAR_1184P Matt 4KG",
        href : "/onecoat/beige07",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54484348949_3d7185d06b.jpg",
        title: "Paintello's Paint Onecoat FREMING_990P Matt 4KG",
        href : "/onecoat/beige11",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54484435388_4ff65e74b7.jpg",
        title: "Paintello's Paint Onecoat DROP2_988P Matt 4KG",
        href : "/onecoat/beige12",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54484512455_f93f72b7ff.jpg",
        title: "Paintello's Paint Onecoat COOLNOVA_1076P Matt 4KG",
        href : "/onecoat/beige13",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54484512475_668d3033c8.jpg",
        title: "Paintello's Paint Onecoat COOLHINTER_984P Matt 4KG",
        href : "/onecoat/beige14",
        price: 3300.00
    },
  
  {
        image: "https://live.staticflickr.com/65535/54483123844_144752d2a2.jpg",
        title: "Paintello's Paint Onecoat LITTELYELLOW_164P Matt 4KG",
        href : "/onecoat/yallaw",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54483209243_232f00611a.jpg",
        title: "Paintello's Paint Onecoat COOLYELLOW_174P Matt 4KG",
        href : "/onecoat/yellow01",
        price: 3300.00
    },
        {
        image: "https://live.staticflickr.com/65535/54482441609_bd43ddfea1.jpg",
        title: "Paintello's Paint Onecoat STONE_1186P Matt 4KG",
        href : "/onecoat/grey01",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482525388_dc0abb73c8.jpg",
        title: "Paintello's Paint Onecoat PRINCE_1194P Matt 4KG",
        href : "/onecoat/grey03",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54481397447_9b42e4783b.jpg",
        title: "Paintello's Paint Onecoat LITTELGREY_148P Matt 4KG",
        href : "/onecoat/grey14",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482441759_d9fcb960fe.jpg",
        title: "Paintello's Paint Onecoat FRESHOGREY_168P Matt 4KG",
        href : "/onecoat/grey15",
        price: 3300.00
    },
  
   {
        image: "https://live.staticflickr.com/65535/54481290707_f73e099c43.jpg",
        title: "Paintello's Paint Onecoat FRESHOGREEN_758P Matt 4KG",
        href : "/onecoat/green08",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482500420_d33a1c9c1f.jpg",
        title: "Paintello's Paint Onecoat DROPGREEN_176P Matt 4KG",
        href : "/onecoat/green09",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482135126_bdc1a068c5.jpg",
        title: "Paintello's Paint Onecoat BRIGDE_1188P Matt 4KG",
        href : "/onecoat/green13",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482500685_f25f402b5b.jpg",
        title: "Paintello's Paint Onecoat BLUSHGREEN_152P Matt 4KG",
        href : "/onecoat/green18",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482135326_76287a4b39.jpg",
        title: "Paintello's Paint Onecoat SAPLINGGREEN_750P Matt 4KG",
        href : "/onecoat/green19",
        price: 3300.00
    },
   
   {
        image: "https://live.staticflickr.com/65535/54481135987_b23529b174.jpg",
        title: "Paintello's Paint Onecoat BLUEDROP_756P Matt 4KG",
        href : "/onecoat/bleu09",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482180389_5e8774ddf9.jpg",
        title: "Paintello's Paint Onecoat COOLMORA_744P Matt 4KG",
        href : "/onecoat/bleue14",
        price: 3300.00
    }

     
 
 
];

function seedrug(){
    rug.remove({}, err => {
        if(err) console.log(err);
        rugs.forEach(seed => {
            rug.create(seed, (err, rug) => {
                if(err) console.log(err);
                rug.save();
            });
        });
    });
}

module.exports = seedrug;
