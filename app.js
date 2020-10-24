const express = require('express');
const app = express();
const path = require('path');
let cors = require('cors');
const swaggerUi = require('swagger-ui-express');    
let bodyParser = require('body-parser');    //Extract data from Express
const YAML = require('yamljs');
const dbconfig = require('./config/dbconfig').setting;

app.use(cors())

let test = require('./routes/test');

/**
 * Load Swagger API Specification
 */
const swaggerDocument = YAML.load(dbconfig.document_filename);
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//Sending a GET to localhost:8080/dummy should return this
app.get('/ping', (req, res) => res.send('pong'))
app.listen(dbconfig.port);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/test', test);

console.log("Server running on "+dbconfig.port)

app.use(express.static('./public/index.html'));

module.exports = app;