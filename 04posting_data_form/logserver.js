// Very simple server to log all requests, but only if they are post requests
const http = require('http');

// Construct the server. We pass a callback to respond to requests
const server = http.createServer((req, res) => {
    // log the body
    if(req.method == "POST") {
        // The data might not be received completely, we have to wait for it in chunks
        // First we define a buffer where we store all data
        let data = "";
        // Here we define an event with the `on` function, this event is called data
        req.on('data', (chunk) => {
            // This callback will be executed whenever we receive a 'chunk' of data
            data += chunk;
        });
        // The next event is triggered when we have received all data and nothing is left
        req.on('end', () => {
            // Here we log the actual body
            console.log(`We received: ${data}`);
            // When all data is received we close the communication by sending a response
            res.statusCode = 200;
            res.end('Received data\n');
        });
    }
});

server.listen(1337, '127.0.0.1');
