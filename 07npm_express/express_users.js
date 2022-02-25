const express = require('express');
const app = express();

// Activate json parsing for our handlers
app.use(express.json());

let users = [];

// How to handle a post request on /users
app.post('/users', (req, res) => {
    // req.body contains the already parsed json object of the user
    console.log(req.body);
    users.push(req.body);

    // Respond with a json object 
    res.json(users);
});

app.get('/users', (_req, res) => {
    res.json(users);
});

app.get('/', (_req, res) => {
    // respond with a file, this requires an absolute path and `.` is also not allowed.
    res.sendFile(`${__dirname}/users.html`);
});

// In this example you can already see one very fundamental concept and advantage of express:
// There is not one central place where our app is defined, rather handlers are assigned to routes.
// Splitting code into multiple files becomes easiert this way.

app.listen(1337);
