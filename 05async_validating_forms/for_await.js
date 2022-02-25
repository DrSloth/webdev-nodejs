// for ... await can be used to create an async for loop
// this example uses the recommended for ... await syntax for

// This again is an echo server but we also serve the requested ressource on get

const http = require('http');
const fs = require('fs').promises;

const receiveAllData = async (req) => {
    const buffers = [];

    for await (const chunk of req) {
        buffers.push(chunk);
    }

    return Buffer.concat(buffers).toString();
};

const server = http.createServer(async (req, res) => {
    if(req.method == "GET") {
        res.setHeader('Content-Type', 'text/html');
        res.end(await fs.readFile(`${__dirname}${req.url}`))
        return;
    }

    const data = await receiveAllData(req);
    console.log(data);
    res.end(data);
});

server.listen(1337, '127.0.0.1');
