const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/scrape', require('./routes/scrape'));

app.get('/', (req, res) => {
    res.send('Welcome');
})

module.exports = app