// In node js it is generally more preferred to do things asynchronously
const fs = require('fs');

// Give a callback to call when finished.
fs.readFile(process.argv[1], (_err, data) => {
    // Prefix variables with and underscore (_) if you don't use them
    console.log(data.toString());
});
// This will likely be executed before the file content is printed
console.log('Hello!');

// But what does async even mean? It is the before mentioned concept of Tasks and Greenthreading.
// In node js many things are done at the same time while only using one hardware thread.
// Most things a server has to do are something with the network, waiting for this can be 
// put on hold until it is finished, same with reading a file.

// A node js process will only terminate if there are no tasks left
