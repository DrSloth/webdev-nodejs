const express = require('express');
const app = express();

app.get('/:name/:age', (req, res) => {
    res.send(`Hello ${req.params.name} you are ${req.params.age} years old.`);
});

app.listen(1337);
