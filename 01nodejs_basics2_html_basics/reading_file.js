// You can read a file in multiple ways using the fs module.
const fs = require('fs');

// Read the file in sync. process.argv[1] is the path to the executed file
const content = fs.readFileSync(process.argv[1]);

console.log(content.toString());
