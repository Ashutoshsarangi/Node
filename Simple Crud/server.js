
const express = require('express');
require('./model/db');
var employeeController = require('./controller/employeeController');
const bodyParser = require('body-parser')



const app = express();
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.use('/employee', employeeController);
