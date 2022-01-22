//First include the http module
const http = require('http');

//The hostname we want to listen to, in this case localhost
const hostname = '127.0.0.1';
//Some free to use port which doesn't require elevated priviliges.
const port = 1337;

//Construct the server. We pass a callback to respond to requests
const server = http.createServer((_req, res) => {
    console.log('got request');
    //req stores the request and res is used to respond
    //The status that everything was OK
    res.statusCode = 200; 
    //We need to set this header in order for the client to know what we are sending back
    res.setHeader('Content-Type', 'text/plain');
    //Send data back to the client.
    res.write('Hello,');
    //Send data and finish the response actually sending it
    res.end(' World!');
});

//Make the server listen to connections on our hostname and port
server.listen(port, hostname, () => {
    //This callback is executed as soon as the server is running
    console.log(`started server on ${hostname}:${port}`);
});
