var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'))

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/generate', (req, res) => {
    res.send('well received');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ..`)
});