const fs = require('fs');


const filePath = process.argv[2];
console.log("file",filePath);


function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading file ${filePath}: ${err}`);
        return;
      }
      resolve(data);
    });
  });
}

function modifyText(text) {
  return new Promise((resolve, reject) => {
    // TODO: Convert text to uppercase and reverse it
    try {
      // Convert text to uppercase
      const upperCaseText = text.toUpperCase();
      // Reverse the text
      const reversedText = upperCaseText.split('').reverse().join('');
      resolve(reversedText);
    } catch (error) {
      reject(`Error reading file ${filePath}: ${error.message}`);
    }
  });
}

readFileAsync(filePath)
  .then((data) => modifyText(data))
  .then((modifiedText) => {
    console.log(modifiedText);
  })
  .catch((error) => {
    console.error(error);
  });
