const AWS = require('aws-sdk');
const axios = require('axios');
const path = require('path');

// Configure AWS SDK for Backblaze B2
const s3 = new AWS.S3({
  endpoint: 'https://s3.eu-central-003.backblazeb2.com',
  region: 'eu-central-003',
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APP_KEY
  },
  signatureVersion: 'v4',
  s3ForcePathStyle: true
});

/**
 * Uploads a file buffer to Backblaze B2
 * @param {Buffer} fileBuffer - The file data
 * @param {string} fileName - Desired filename (e.g., 'image.jpg')
 * @param {string} mimeType - File MIME type (e.g., 'image/jpeg')
 * @returns {Promise<string>} Public URL of the uploaded file
 */
async function uploadToB2(fileBuffer, fileName, mimeType) {
  const params = {
    Bucket: process.env.B2_BUCKET_NAME || 'paintello',
    Key: `whatsapp-media/${Date.now()}_${path.basename(fileName)}`,
    Body: fileBuffer,
    ContentType: mimeType,
    ACL: 'public-read' // Make file publicly accessible
  };

  try {
    const data = await s3.upload(params).promise();
    console.log(`✅ File uploaded to B2: ${data.Location}`);
    return data.Location;
  } catch (err) {
    console.error('❌ B2 Upload Error:', err);
    throw new Error(`B2 Upload Failed: ${err.message}`);
  }
}

/**
 * Downloads media from WhatsApp and uploads to B2
 * @param {string} mediaUrl - Temporary WhatsApp media URL
 * @param {string} mimeType - File MIME type
 * @param {string} waId - WhatsApp user ID (for filename)
 * @returns {Promise<string>} Public URL of the uploaded file
 */
async function handleWhatsAppMedia(mediaUrl, mimeType, waId) {
  try {
    // 1. Download from WhatsApp
    const response = await axios({
      method: 'GET',
      url: mediaUrl,
      responseType: 'arraybuffer',
      headers: {
        Authorization: `Bearer ${process.env.META_WA_TOKEN}`
      },
      maxContentLength: Infinity // For large files
    });

    // 2. Determine file extension
    const ext = mimeType.split('/')[1] || 
               (mimeType === 'application/pdf' ? 'pdf' : 'bin');
    
    // 3. Upload to B2
    return await uploadToB2(
      response.data,
      `${waId}_media.${ext}`,
      mimeType
    );
  } catch (err) {
    console.error('❌ Media handling error:', err);
    throw err;
  }
}

/**
 * Deletes a file from B2
 * @param {string} fileUrl - The full public URL or file key
 * @returns {Promise<boolean>} True if successful
 */
async function deleteFromB2(fileUrl) {
  try {
    const fileKey = fileUrl.split('/').slice(3).join('/'); // Extract key from URL
    await s3.deleteObject({
      Bucket: process.env.B2_BUCKET_NAME,
      Key: fileKey
    }).promise();
    return true;
  } catch (err) {
    console.error('❌ B2 Delete Error:', err);
    return false;
  }
}

/**
 * Lists files in the bucket (for debugging)
 * @returns {Promise<Array>} List of files
 */
async function listFiles() {
  try {
    const data = await s3.listObjectsV2({
      Bucket: process.env.B2_BUCKET_NAME
    }).promise();
    return data.Contents || [];
  } catch (err) {
    console.error('❌ B2 List Error:', err);
    return [];
  }
}

module.exports = {
  uploadToB2,
  handleWhatsAppMedia,
  deleteFromB2,
  listFiles
};

