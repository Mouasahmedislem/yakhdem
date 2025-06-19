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
    if (!gfs) {
      return reject(new Error('GridFS is not initialized'));
    }

    const uploadStream = gfs.openUploadStream(filename, { contentType });

    // Attach error on original stream
    stream.on('error', (err) => {
      console.error("❌ Incoming stream error:", err);
      reject(err);
    });

    stream
      .pipe(uploadStream)
      .on('error', (err) => {
        console.error("❌ GridFS upload error:", err);
        reject(err);
      })
      .on('finish', () => {
        console.log('✅ File saved to GridFS:', filename);
        resolve(uploadStream.id);
      });
  });
}

module.exports = { gfs, saveToGridFS };


