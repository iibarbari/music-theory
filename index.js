const express = require(`express`),
    app = express(),
    port = 3333,
    bodyParser = require(`body-parser`);

    var allData = require('./funcs/allData.js');

app.get(`/`, (req, res) => {
    res.redirect(`/api`);
});
app.get(`/api`, (req, res) => {
    res.send(allData(`minor`, `C`));
});

app.listen(port, console.log(`Server has started at ${port}`))