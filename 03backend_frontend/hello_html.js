//This example is similiar to hello_http.js just that we use the filesystem to serve html
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((_req, res) => {
    fs.readFile('./hello.html', (err, data) => {
        if (err != undefined) {
            //An error occured
            //Status for 'internal server error'
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Error reading file: ${err}`);
        } else {
            //Everything ok
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`started server on ${hostname}:${port}`);
});
