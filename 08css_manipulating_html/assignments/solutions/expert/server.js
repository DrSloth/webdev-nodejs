const fs = require('fs').promises;
const express = require('express');
const app = express();

// Activate json parsing for our handlers
app.use(express.json());

let users = [];

// How to handle a post request on /users
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.post('/files', async (req, res) => {
    try {
        await fs.mkdir('./files');
        await fs.writeFile(`./files${req.fileName}`, req.fileContent);
        res.end("Ok")
    } catch (e) {
        res.end(e)
    }
});

app.get('/files', async (_req, res) => {
    res.end(await fs.readdir('./files'))
});

// In this example you can already see one very fundamental concept and advantage of express:
// There is not one central place where our app is defined, rather handlers are assigned to routes.
// Splitting code into multiple files becomes easiert this way.

app.listen(1337);