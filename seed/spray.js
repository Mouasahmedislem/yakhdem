var mongoose  = require('mongoose')
var spray = require('../models/spray')

mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var sprays = [
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2021/03/Bey-39-370x370.jpg",
        title: "BEY AEROSOL NOIR",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2019/08/Bey-28-370x370.jpg",
        title: "BEY AEROSOL BLEU FONCE 28",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2019/08/Bey-190_-370x370.jpg",
        title: "BEY AEROSOL VERNIS 190",
        price: 400
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/08/Bey-vernis-acajou-370x370.jpg",
        title: "BEY AEROSOL VERNIS ACAJOU",
        price: 400
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2019/12/Bey-6-370x370.jpg",
        title: "BEY AEROSOL ROUGE 6/S BEY",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/11/Bey-37-370x370.jpg",
        title: "BEY AEROSOL VERT CLAIR 37",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/08/Bey-mockup-370x370.jpg",
        title: "DEGRIPPANT BEY",
        price: 400
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/11/Bey-133-370x370.jpg",
        title: "BEY AEROSOL BLEU DIAMOND 133",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2019/08/Bey-77-370x370.jpg",
        title: "BEY AEROSOL VERT WAGON 77",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2019/08/Bey-1580-2-370x370.jpg",
        title: "BEY AEROSOL BLANC MAT 1007",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/11/Bey-133-370x370.jpg",
        title: "BEY AEROSOL GRIS ARGENT 1580",
        price: 400
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/11/Bey-681-370x370.jpg",
        title: "BEY AEROSOL ORANGE 68",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/08/Bey-327-370x370.jpg",
        title: "BEY AEROSOL VIOLET PROFOND 327",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/08/Bey-313-370x370.jpg",
        title: "BEY AEROSOL ROSE LEGER 313",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/08/Bey-25-370x370.jpg",
        title: "BEY AEROSOL JAUNE 25",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/08/Bey-411-370x370.jpg",
        title: "BEY AEROSOL JAUNE 41",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/08/Bey-3049-370x370.jpg",
        title: "BEY AEROSOL DORÉ BRILLANT 3049",
        price: 400
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/08/Bey-315-370x370.jpg",
        title: "BEY AEROSOL BEIGE 315",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2019/08/Bey-137-1-370x370.jpg",
        title: "BEY AEROSOL ROUGE 137",
        price: 350
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/07/Bey-speciale-370x370.jpg",
        title: "BEY AEROSOL ANTI-CHALEUR BLANC 1100",
        price: 900
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2020/07/Bey-g36-370x370.jpg",
        title: "BEY AEROSOL ANTI-CHALEUR GRIS G301",
        price: 900
    },
    {
        image: "https://www.groupe-ntb.com/wp-content/uploads/2019/08/Bey-3012-370x370.jpg",
        title: "BEY AEROSOL CHROMÉ BRILLANT 3012",
        price: 500
    }
 
];

function seedspray(){
    spray.remove({}, err => {
        if(err) console.log(err);
        sprays.forEach(seed => {
            spray.create(seed, (err, spray) => {
                if(err) console.log(err);
                spray.save();
            });
        });
    });
}

module.exports = seedspray;