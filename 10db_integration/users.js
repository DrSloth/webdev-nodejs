const db = require('./database');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
    const users = await db.add_user(req.body);
    console.log(req.body);

    res.json(users);
});

app.get('/users', async (_req, res) => {
    const users = await db.get_all_users();
    res.json(users);
});

app.get('/', (_req, res) => {
    res.sendFile(`${__dirname}/users.html`);
});

app.listen(1337);
