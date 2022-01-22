//This example is similiar to hello_http.js just that we use the filesystem to serve html
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((req, res) => {
    const path = req.url;
    console.log(path);
    res.setHeader('Content-Type', 'text/plain');
    fs.readFile(`.${path}`, (err, data) => {
        if (err != undefined) {
            res.statusCode = 500;
            res.end(`Error reading file at ${path}: ${err}`)
        } else {
            res.statusCode = 200;
            res.end(data)
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`started server on ${hostname}:${port}`);
});