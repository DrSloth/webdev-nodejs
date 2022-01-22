// This is the echo server example as async
const http = require('http');

// This is the receiveAllData function from last lesson as Promise
const receiveAllData = (req) => {
    return new Promise((resolve, reject) => {
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
    const data = await receiveAllData(req);
    console.log(data);
    res.end(data);
});

server.listen(1337, '127.0.0.1');
