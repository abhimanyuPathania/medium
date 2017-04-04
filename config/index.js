
const fs = require('fs');

// update this to point to your service account key
const key = require('../agent-smith.json');

// Target forlder for the Uploaded file. This must be shared with the service account.
const targetFolderId = '0B3aPz1IKDjcWOWZyM2dpOE9DaGc';

// location of the file to be uploaded
const file = '../neo.txt';

module.exports = {
  key,
  file: {
    metadata: {
      name: 'neo.txt',
      parents: [targetFolderId]
    },
    media: {
      mimeType: 'text/plain',
      body: fs.createReadStream(file)
    }
  }
};
