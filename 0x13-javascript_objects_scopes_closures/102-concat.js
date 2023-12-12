#!/usr/bin/node

const fs = require('fs');

if (process.argv.length !== 5) {
  console.error('Usage: ./102-concat.js fileA fileB fileC');
  process.exit(1);
}

const fileAPath = process.argv[2];
const fileBPath = process.argv[3];
const fileCPath = process.argv[4];

// Read the content of fileA
fs.readFile(fileAPath, 'utf8', (err, dataA) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // Read the content of fileB
  fs.readFile(fileBPath, 'utf8', (err, dataB) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    // Concatenate the content of fileA and fileB
    const concatenatedData = dataA + dataB;

    // Write the concatenated content to fileC
    fs.writeFile(fileCPath, concatenatedData, 'utf8', (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      console.log(`Concatenation complete. Check ${fileCPath} for the result.`);
    });
  });
});