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
        image: "https://live.staticflickr.com/65535/54484155266_29874ac2b4.jpg",
        title: "Paintello's Paint Onecoat PINKPOSY_1072P  Matt  4KG",
        href : "/onecoat/beige03",
        price: 3300.00
    },
    {
        image: "https://live.staticflickr.com/65535/54484435238_4b1f4097ac.jpg",
        title: "Paintello's Paint Onecoat PETITO_984P Matt 4KG",
        href : "/onecoat/beige04",
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
        image: "https://live.staticflickr.com/65535/54484155351_e3fbf16511.jpg",
        title: "Paintello's Paint Onecoat LITTELFALS_1192P Matt 4KG",
        href : "/onecoat/beige08",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54484155361_ce56a9febd.jpg",
        title: "Paintello's Paint Matt LIGHTE_1182P Onecoat 4KG",
        href : "/onecoat/beige20",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54484155376_5456429744.jpg",
        title: "Paintello's Paint Onecoat IVORY_1064P Matt 4KG",
        href : "/onecoat/beige10",
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
        image: "https://live.staticflickr.com/65535/54483309512_01f24c34f5.jpg",
        title: "Paintello's Paint Onecoat CLOVER_982P Matt 4KG",
        href : "/onecoat/beige15",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54484435448_41023c447c.jpg",
        title: "Paintello's Paint Onecoat BEIGE01_978P Matt 4KG",
        href : "/onecoat/beige16",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54483309542_78d258e714.jpg",
        title: "Paintello's Paint Onecoat AMRIAL_980P Matt 4KG",
        href : "/onecoat/beige17",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54484512515_ff20889f4b.jpg",
        title: "Paintello's Paint Onecoat ZINNIA_1078P Matt 4KG",
        href : "/onecoat/beige18",
        price: 3300.00
    },
  {
        image: "https://live.staticflickr.com/65535/54484155506_d4ef44d858.jpg",
        title: "Paintello's Paint Onecoat SANDLIGHT_972P Matt 4KG",
        href : "/onecoat/beige19",
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
        image: "https://live.staticflickr.com/65535/54482441799_7815311a50.jpg",
        title: "Paintello's Paint Onecoat DROPGREY_158P Matt 4KG",
        href : "/onecoat/grey16",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482525483_4fed617ea7.jpg",
        title: "Paintello's Paint Onecoat BRIGHT_1196P Matt 4KG",
        href : "/onecoat/grey17",
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
        image: "https://live.staticflickr.com/65535/54482335509_01471e2b62.jpg",
        title: "Paintello's Paint Onecoat PLUMEGREEN_162P Matt 4KG",
        href : "/onecoat/green20",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482417943_8c2b32a7b3.jpg",
        title: "Paintello's Paint Onecoat LITTELGREEN_182P Matt 4KG",
        href : "/onecoat/green21",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54482500350_19c6cfc28d.jpg",
        title: "Paintello's Paint Onecoat GARDEN_1198P Matt 4KG",
        href : "/onecoat/green22",
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
    },
   {
        image: "https://live.staticflickr.com/65535/54482263638_167c17c6e5.jpg",
        title: "Paintello's Paint Onecoat FRESHOBLUE_742P Matt 4KG",
        href : "/onecoat/blue08",
        price: 3300.00
    },
   {
        image: "https://live.staticflickr.com/65535/54481135862_0261d66c2a.jpg",
        title: "Paintello's Paint Onecoat TWEEDIA_752P Matt 4KG",
        href : "/onecoat/blue15",
        price: 3300.00
    },
     
 
 
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
