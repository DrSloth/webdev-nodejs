// We want to store all the data Posted to /data
// A GET request to /form will give us the frontend to add an entry
// A GET request to /data will give out all stored data
// All other requests should result in a 404
const http = require('http');
const fs = require('fs');

/**
 * This function receives all data and then calls callback with it
 * @param req The node js request object
 * @param callback The callback to be called with the complete data 
 * */
const receiveAllData = (req, callback) => {
    let data = "";
    req.on('data', (chunk) => {
        data += chunk;
    });
    req.on('end', () => {
        callback(data);
    });
};

const notFound = (res) => {
    res.statusCode = 404;
    res.end('The requested resource could not be found');
};

/**
 * Handle a post request
 * @param req A node js request object 
 * @param res A node js respone object
 */
const handlePost = (req, res) => {
    if (req.url == "/data") {
        receiveAllData(req, (data) => {
            fs.appendFile(`${__dirname}/data.data`, data, () => {
                console.log(`${data} appended to the file`);
                res.end('received data');
            });
        });
    } else {
        notFound(res);
    }
};

const respondWithFile = (res, path, contentType) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end(`Error reading file: ${e}`);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(data);
        }
    });
};

const handleGet = (req, res) => {
    switch (req.url) {
        case '/form':
            respondWithFile(res, `${__dirname}/form.html`, 'text/html');
            break;
        case '/data':
            respondWithFile(res, `${__dirname}/data.data`, 'text/plain');
            break;
        default:
            notFound(res);
            break;
    }
};

const server = http.createServer((req, res) => {
    if (req.method == "POST") {
        handlePost(req, res);
    } else if (req.method == "GET") {
        handleGet(req, res);
    } else {
        notFound(res)
    }
});

server.listen(1337, '127.0.0.1');
