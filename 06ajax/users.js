// A simple server which stores posts made while its running
const http = require('http');
const fs = require('fs').promises;

let users = [];

const receiveAllData = (req) => {
    // This is not recommended to do (see for_await.js for better solution)
    // NodeJS might handle the 'data' event before it handles this Promise
    return new Promise((resolve, _reject) => {
        let data = "";
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            // Calling resolve with a parameter is similiar to returning
            resolve(data);
        });
    })
};

const server = http.createServer(async (req, res) => {
    if(req.url == "/") {
        res.end(await fs.readFile('./users.html'));
    } else if (req.method == "GET" && req.url == "/users") {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    } else if (req.method == "POST" && req.url == "/users") {
        const data = await receiveAllData(req);
        console.log(data);

        users.push(JSON.parse(data));
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    }
});

server.listen(1337, '127.0.0.1');