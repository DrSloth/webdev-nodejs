// This is the same as the 'formserver.js' just that we also parse the data
const http = require('http');
const fs = require('fs');

// There are libraries for parsing form data but parsing `urlencoded-formdata` by hand is 
// not that hard. We will ignore '%' escape sequences in this example

/**
 * Parse the given text as form and return it as object
 */
const parseForm = (text) => {
    let obj = {};
    for(const field of text.split('&')) {
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
            // Here we print out the parsed object
            const form = parseForm(data);
            console.log(form);
            // We also store the user in a directory called users in a file named like the username
            let name = form["user-name"];
            if(name) {
                // Create a directory called users (skip if exists) and all it parents (recursive)
                fs.mkdir('./users', {recursive: true}, (err) => {
                    if(err) {
                        res.statusCode = 500;
                        res.end(`Could not create users directory ${err}`);
                    } else {
                        // This deep nesting is not that nice, we will soon learn a better way.
                        // With JSON.stringify() we turn an object into a JSON string
                        fs.writeFile(`./users/${name}.json`, JSON.stringify(form), (err) => {
                            if(err) {
                                res.statusCode = 500;
                                res.end(`Could not store user ${err}`);
                            } else {
                                res.statusCode = 200;
                                res.end(`Stored user named ${name}`);
                            }
                        });
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
