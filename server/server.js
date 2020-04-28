var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
});

app.post('/generate', (req, res) => {
    console.log(JSON.parse(req.body.jsonData));
    res.end('well received');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ..`)
});