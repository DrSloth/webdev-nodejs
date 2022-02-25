const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    if(req.url == "/") {
        res.end(await fs.readFile('./fetch.html'));
    } else if (req.url == "/get_data") {
        res.end("Hello, World!");
    }
});

server.listen(1337, '127.0.0.1');
