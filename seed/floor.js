var mongoose  = require('mongoose')
var floor = require('../models/floor')


mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
    
    })
var floors = [
    
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/372476-friston-flooring-3.jpg",
        title: "friston-flooring 1m² ",
        price: 950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/364546-gosford-laminate-flooring-2.jpg",
        title: "gosford-laminate-flooring 1m²",
        price: 950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/351012-carrick-oak-effect-laminate--flooring-2.jpg",
        title: "carrick-oak-effect-laminate--flooring 1m²",
        price: 950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/3203361-Ashdown-Laminate-3.jpg",
        title: "Ashdown-Laminate 1m²",
        price: 1000
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/364545-haldon-laminate-flooring-2.jpg",
        title: "haldon-laminate-flooring 1m²",
        price: 950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/311288-darwin-laminate-flooring.jpg",
        title: "darwin-laminate-flooring 1m²",
        price: 950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/339918-heartwood-laminate-flooring-2.jpg",
        title: "heartwood-laminate-flooring 1m²",
        price: 950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/311289-wykeham-laminate-flooring.jpg",
        title: "wykeham-laminate-flooring 1m²",
        price: 950
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/329233-vinyl-rolls-floor-newark-dark-grey.jpg",
        title: "vinyl-rolls-floor-newark-dark-grey 1m²",
        price: 1200
    },
    {
        image: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/345018-sandstone-vinyl-tiles.jpg",
        title: "sandstone-vinyl-tiles 1m²",
        price: 1200
    }
 
];

function seedfloor(){
    floor.remove({}, err => {
        if(err) console.log(err);
        floors.forEach(seed => {
            floor.create(seed, (err, floor) => {
                if(err) console.log(err);
                floor.save();
            });
        });
    });
}

module.exports = seedfloor;