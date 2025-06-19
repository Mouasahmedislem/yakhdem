require('dotenv').config();
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

const mongoURI = process.env.MONGO_URI;

const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let gfs;
const initGridFS = new Promise((resolve, reject) => {
  conn.once('open', () => {
    gfs = new GridFSBucket(conn.db, { bucketName: 'mediaFiles' });
    console.log('✅ GridFS initialized');
    resolve();
  });
  conn.on('error', (err) => {
    console.error("❌ MongoDB connection error:", err.message);
    reject(err);
  });
});

async function saveToGridFS(stream, filename, contentType) {
  await initGridFS;

  if (!gfs) {
    throw new Error("❌ GridFSBucket is not initialized");
  }

  return new Promise((resolve, reject) => {
    const uploadStream = gfs.openUploadStream(filename, { contentType });

    stream.pipe(uploadStream)
      .on('error', (err) => {
        console.error("❌ GridFS stream error:", err.message);
        reject(err);
      })
      .on('finish', () => {
        console.log('✅ File saved to GridFS:', filename);
        resolve(uploadStream.id);
      });
  });
}

function getGFS() {
  return gfs;
}

module.exports = { saveToGridFS, getGFS, initGridFS };

