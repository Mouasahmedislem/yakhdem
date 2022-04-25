var mongoose  = require('mongoose')
var gliter = require('../models/gliter')

mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })

var gliters = [
    
        {
            image: "https://s7.gifyu.com/images/Picsart_22-04-09_00-24-14-466.jpeg.jpg",
            title: "Comming Soon",
            price: 0
        }
     
];

function seedgliter(){
    gliter.remove({}, err => {
        if(err) console.log(err);
        gliters.forEach(seed => {
            gliter.create(seed, (err, gliter) => {
                if(err) console.log(err);
                gliter.save();
            });
        });
    });
}

module.exports = seedgliter;