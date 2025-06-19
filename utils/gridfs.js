require('dotenv').config();
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

const mongoURI = process.env.MONGO_URI;

const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let gfs;
conn.once('open', () => {
  gfs = new GridFSBucket(conn.db, { bucketName: 'mediaFiles' });
  console.log('✅ GridFS initialized');
});

async function saveToGridFS(stream, filename, contentType) {
  return new Promise((resolve, reject) => {
    const uploadStream = gfs.openUploadStream(filename, { contentType });

    stream.pipe(uploadStream)
      .on('error', reject)
      .on('finish', () => {
        console.log('✅ File saved to GridFS:', filename);
        resolve(uploadStream.id);
      });
  });
}

module.exports = { gfs, saveToGridFS };
