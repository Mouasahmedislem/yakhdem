var mongoose  = require('mongoose')
var coat = require('../models/coat')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var coats = [
     {
        image: "https://live.staticflickr.com/65535/54441880389_6f0e32870e_b.jpg",
        title: "Paintello's Paint Onecoat BEIGE 02 4KG",
        price: 2390.00
    },
   
    {
        image: "https://live.staticflickr.com/65535/54440834692_ab6caa1972_b.jpg",
        title: "Paintello's Paint Onecoat Blue 09 Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://live.staticflickr.com/65535/54441939978_ef0bbd7c6c_b.jpg",
        title: "Paintello's Paint Onecoat Green 08 Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://live.staticflickr.com/65535/54440832522_5c3dfb36c8_b.jpg",
        title: "Paintello's Paint Onecoat GREEN 18 MATT 4KG",
        price: 2590.00
    },
    {
        image: "https://live.staticflickr.com/65535/54441689831_423a01e016_b.jpg",
        title: "Paintello's Paint Onecoat Grey 01 Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://live.staticflickr.com/65535/54442055745_3233b7d591_b.jpg",
        title: "Paintello's Paint Onecoat Pink 09 Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://s12.gifyu.com/images/SV829.png",
        title: "Paintello's Paint Onecoat Pink 13 Nashville House Matt 4KG",
        price: 2590.00
    },
    {
        image: "https://live.staticflickr.com/65535/54442053160_0725acec99_b.jpg",
        title: "Paintello's Paint Onecoat  Red 01 Matt  4KG",
        price: 2590.00
    },
    {
        image: "https://live.staticflickr.com/65535/54441681351_82fd3afd68_b.jpg",
        title: "Paintello's Paint Onecoat Taupe 01 Matt 4KG",
        price: 2590.00
    },
   
    {
        image: "https://live.staticflickr.com/65535/54441679231_8cc5faeb20_b.jpg",
        title: "Paintello's Paint Onecoat White 01 4KG",
        price: 2590.00
    },
    {
        image: "https://live.staticflickr.com/65535/54441926733_202422179c_b.jpg",
        title: "Paintello's Paint Onecoat Yellow 06 Matt 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54441938623_e4a506c7a6_b.jpg",
        title: "Paintello's Paint Onecoat bleue 14 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54441691241_0da19c3343_b.jpg",
        title: "Paintello's Paint Onecoat bleue08 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54442063755_fa0ee2f277_b.jpg",
        title: "Paintello's Paint Onecoat BEIGE 09 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54442063820_c39fb43160_b.jpg",
        title: "Paintello's Paint Onecoat BEIGE 01 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54441878359_9fb4cdb4a6_b.jpg",
        title: "Paintello's Paint Onecoat bleue15 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54442059140_5b60595de1_b.jpg",
        title: "Paintello's Paint Onecoat green09 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54440836712_098f6f9660_b.jpg",
        title: "Paintello's Paint Onecoat grey03 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54441875749_2fc49d1195_b.jpg",
        title: "Paintello's Paint Onecoat green13 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54441691796_d2c23fbc84_b.jpg",
        title: "Paintello's Paint Onecoat grey14 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54442054690_4858678fa0_b.jpg",
        title: "Paintello's Paint Onecoat pink02 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54440827097_f4bb5ffcf1_b.jpg",
        title: "Paintello's Paint Onecoat pink03 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54441929748_63fcd3a1f7_b.jpg",
        title: "Paintello's Paint Onecoat pink04 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54440826112_2ed311ea16_b.jpg",
        title: "Paintello's Paint Onecoat pink07 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54440823422_a55d5afd73_b.jpg",
        title: "Paintello's Paint Onecoat yellow01 4KG",
        price: 2590.00
    },
  {
        image: "https://live.staticflickr.com/65535/54442050480_7c3a8ba497_b.jpg",
        title: "Paintello's Paint Onecoat yellow07 4KG",
        price: 2590.00
    }
    
 
];

function seedcoat(){
    coat.remove({}, err => {
        if(err) console.log(err);
        coats.forEach(seed => {
          coat.create(seed, (err, coat) => {
                if(err) console.log(err);
                coat.save();
            });
        });
    });
}

module.exports = seedcoat;
