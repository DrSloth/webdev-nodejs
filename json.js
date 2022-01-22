// This example also stores into our users directory 
const http = require('http');
const fs = require('fs');

/**
 * Parse the given text as form and return it as object
 */
const parseForm = (text) => {
    let obj = {};
    for (const field of text.split('&')) {
        const [name, data] = field.split('=');
        obj[name] = data;
    }

    return obj;
}

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
            const form = parseForm(data);
            console.log(form);
            let name = form["user-name"];
            if (name) {
                fs.mkdir('./users', { recursive: true }, (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(`Could not create users directory ${err}`);
                    } else {
                        fs.writeFile(`./users/${name}.json`, JSON.stringify(form), (err, data) => {
                            if (err) {
                                res.statusCode = 500;
                                res.end(`Could not store user ${err}`);
                            } else {
                                res.statusCode = 200;
                                res.end(`Stored user named ${name}`);
                            }
                        })
                    }
                });
            } else {
                res.statusCode = 500;
                res.end('Malformed form data missing user-name field');
            }
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
        handleGet(req, res)
    } else {
        notFound(res)
    }
});

server.listen(1337, '127.0.0.1');
