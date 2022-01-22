//This example is similiar to hello_http.js just that we use the filesystem to serve html
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    switch(req.url) {
        case '/hello':
            res.end('world');
            break;
        case null:
        case '/': 
            res.end("The index");
            break;
        default:
            res.end(req.url);
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`started server on ${hostname}:${port}`);
});