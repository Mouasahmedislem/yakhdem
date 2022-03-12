var mongoose  = require('mongoose')
var paint = require('../models/paintH')

mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority' , (err)=> {
    if (err) {
        console.log(err)
    } else{
        console.log('connected to db succesfuly...')
    }
})
    
     paints = [

{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/wallpaper5.jpg",
    title: "Wallpaper",
    href:"/wallpaper"
},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/paint1.jpg",
    title: "Paint",
    href:"/interior"
},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/decorating-tools1.jpg",
    title: "Decorating",
    href:"/deco"
},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/laminate-flooring1.jpg",
    title: "Flooring and Tiling",
    href:"/floor"
},
{
    image: "//cdn.bmstores.co.uk/images/dmCategory/thumbnailImageResponsive/tools-equipment1.jpg",
    title: "Tools & Equipment",
    href:"/tool"
}
];

function seedpaint(){
    paint.remove({}, err => {
        if(err) console.log(err);
        paints.forEach(seed => {
            paint.create(seed, (err, paint) => {
                if(err) console.log(err);
                paint.save();
            });
        });
    });
}

module.exports = seedpaint;