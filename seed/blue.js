// seeds/productSeed.js
const mongoose = require('mongoose');
const Blue = require('../models/blue');

mongoose.connect('mongodb+srv://Islem:cmygNChSy2L9Q4xt@paintello.cu30n.mongodb.net/paintello?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleBlues = [
  {
    title: 'Elegant Matte Finish',
    price: 2500,
    image: [
      'https://live.staticflickr.com/65535/54482263698_bd2c6cb990.jpg/600x400?text=Slide+1',
      'https://live.staticflickr.com/65535/54482263698_bd2c6cb990.jpg/600x400?text=Slide+2',
      'https://live.staticflickr.com/65535/54482180424_c40a046803.jpg/600x400?text=Slide+3'
    ],
    description: 'Lémulsion mate lavable de Paintello est une peinture dintérieur résistante et durable, ce qui signifie que les marques et les déversements quotidiens peuvent facilement être essuyés sans gâcher la finition. La formulation à base deau et à faible odeur sèche également rapidement Washable Matt est idéal pour peindre les zones très fréquentées de votre maison ',
    details: {
      Finish: 'Matte',
      Coverage: '12m² per liter',
      Application: 'Brush or roller',
      Drying: '2 hours'
    },
    type: 'product'
  }
];

blue.insertMany(sampleBlues)
  .then(() => {
    console.log('✅ Sample products inserted');
    mongoose.connection.close();
  })
  .catch(err => console.log('❌ Seeding error', err));
