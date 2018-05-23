const fs = require('fs');

function getRatingFor(key, callback) {
  // Hint: Read file for key. File should contain json clob.
  // Hint: Return empty result if file not exists. (But don't forget to log the event!)
}

function update(key, value, callback) {
  // Hint: Write the json value to file by key. (1 key === 1 file)
  // Hint: Keep the files in a directory called 'db'. Create the directory if it doesn't exist.
  // Hint: Log any errors that occurs while writing the file.
}

module.exports.getRatingFor = getRatingFor;
module.exports.update = update;
