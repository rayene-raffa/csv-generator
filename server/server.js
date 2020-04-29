var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var util = require('../lib/utils');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
});

app.post('/generate', (req, res) => {
    let csvData = util.generateReport(JSON.parse(req.body.jsonData));
    // check server log to see output in proper formatting
    // TODO : send data back as an actual file
    res.send(csvData);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ..`)
});