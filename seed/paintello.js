const mongoose = require('mongoose');
const Paintello = require('../models/paintello');

mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const samplepaintellos = [
  {
    title: 'Elegant Matte Finish',
    price: 2500,
    image: [
      'https://live.staticflickr.com/65535/54483309257_4452b0ab9d.jpg/600x400?text=Slide+1',
      'https://live.staticflickr.com/65535/54483309257_4452b0ab9d.jpg/600x400?text=Slide+2',
      'https://live.staticflickr.com/65535/54483309257_4452b0ab9d.jpg/600x400?text=Slide+3'
    ]
   
  }
];

Paintello.insertMany(samplePaintellos)
  .then(() => {
    console.log('✅ Sample paintellos inserted');
    mongoose.connection.close();
  })
  .catch(err => console.log('❌ Seeding error', err));
