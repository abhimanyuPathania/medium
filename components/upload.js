
const google = require('googleapis');

const { file } = require('../config');

const drive = google.drive('v3');

function uploadFile(jwtClient) {
  return new Promise((resolve, reject) => {
    drive.files.create({
      auth: jwtClient,
      resource: file.metadata,
      media: file.media,
      fields: 'id'
    }, (err, uploadedFile) => {
      if (err) reject(err);
      // Promise is resolved with the result of create call
      resolve(uploadedFile);
    });
  });
}

module.exports = uploadFile;
