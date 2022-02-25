// Import express
const express = require('express');
// Create an express app by calling the imported `express` as a function
const app = express();

// How to respond to get requests on /
app.get('/', (req, res) => {
    // This callback is commonly called a handler function 

    // send a 'Hello, World!' text. We can use send to send data in express.
    res.send('Hello, World!');
});

// Listen on port 1337
app.listen(1337);
