var mongoose  = require('mongoose')
var wow = require('../models/wow')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var wows = [
    {
        image: "https://rolux.dz/wp-content/uploads/2022/02/platoir-decorative-inox-trapeze-768x512.jpg",
        title: "Platoir inox ",
        price: 350
    },
    {
        image: "https://rolux.dz/wp-content/uploads/2022/02/Couteau-pate-enduit%E2%80%8B.jpg",
        title: "Couteau à Enduire Lame Arrondie",
        price: 500
    },
    {
        image: "https://rolux.dz/wp-content/uploads/2022/02/couteau-enduire-droite-768x512.jpg",
        title: "Couteau à Enduire Lame Droite",
        price: 920
    },
    {
        image: "https:https://rolux.dz/wp-content/uploads/2022/02/ruban-adhesif-masquage-768x511.jpg",
        title: "Papier Adhésif De Masquage",
        price: 2350
    },
    {
        image: "https://rolux.dz/wp-content/uploads/2022/02/spalter-768x512.jpg",
        title: "Spalter",
        price: 3420
    },
    {
        image: "https://rolux.dz/wp-content/uploads/2022/02/brosse-peinture-plate-768x512.jpg",
        title: "Brosse Plate",
        price: 3750
    },
    {
        image: "https://rolux.dz/wp-content/uploads/2022/02/pinceau-plat-bleu-peinture-768x512.jpg",
        title: "Pinceau Plat Manche Bleu",
        price: 1550
    },
    {
        image: "https://rolux.dz/wp-content/uploads/2022/02/pinceau-rond-peinture-768x512.jpg",
        title: "Pinceau Rond Manche Bi-Matiére",
        price: 1550
    },
  {
        image: "https://rolux.dz/wp-content/uploads/2022/02/rouleaux-decorative-nid-dabeille-768x512.jpg",
        title: "Rouleaux Nid D'abeille 200 mm / 80 Ø",
        price: 1550
    },
  {
        image: "https://rolux.dz/wp-content/uploads/2022/02/recharge-mini-rouleau-peinture-eponge-768x512.jpg",
        title: "Recharge Mini Rouleau Eponge",
        price: 1550
    },
  {
        image: "https://rolux.dz/wp-content/uploads/2022/02/recharge-mini-rouleau-peinture-polyacrylique-768x512.jpg",
        title: "Recharge Mini Rouleau PolyAcrylique",
        price: 1550
    },
  {
        image: "https://rolux.dz/wp-content/uploads/2022/02/monture-mini-rouleau-peinture-768x512.jpg",
        title: "Monture Mini Rouleau ",
        price: 1550
    },
   {
        image: "https://rolux.dz/wp-content/uploads/2022/02/mini-rouleau-peinture-microfibre-768x512.jpg",
        title: "Mini Rouleau Microfibre Antigoutte 120 mm / 25 Ø",
        price: 1550
    },
   {
        image: "https://rolux.dz/wp-content/uploads/2022/02/Rouleau-peinture-acrylique-Facade-768x513.jpg",
        title: "Rouleau Acrylique Façade 200 mm / 44 Ø",
        price: 1550
    },
   {
        image: "https://rolux.dz/wp-content/uploads/2022/02/Rouleau-peinture-microfibre--768x513.jpg",
        title: "Rouleau Microfibre 200 mm / 44 Ø",
        price: 1550
    }
  
 
];


function seedwow(){
    wow.remove({}, err => {
        if(err) console.log(err);
        wows.forEach(seed => {
            wow.create(seed, (err, wow) => {
                if(err) console.log(err);
                wow.save();
            });
        });
    });
}

module.exports = seedwow;
