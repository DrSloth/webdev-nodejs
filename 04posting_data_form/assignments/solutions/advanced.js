// One of the most common example server programs is the so called 'echo server', it is supposed
// to 'echo' back every request it receives.
const http = require('http');
const fs = require('fs');

// Here we extract receiving the data into its own function. This helps readability and also
// follows a principle called 'self documentation' because the name of the function explains it.
// It is also much easier and better to document code on top of functions rather than in them.

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

const server = http.createServer((req, res) => {
    if(req.method == "POST") {
        receiveAllData(req, (data) => { 
            data = data.toString().split("").reverse().join("");
            console.log(`${data}`);
            res.statusCode = 200;
            res.end(data);
        });
    } else if (req.method == "GET") {
        fs.readFile(`${__dirname}/advanced.html`, (err, data) => {
            if(err) {
                res.statusCode = 500;
                res.end(`Could not read advanced.html`);
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        })
    }
});

server.listen(1337, '127.0.0.1');