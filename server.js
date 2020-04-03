require('./models/db');

const express = require('express');
const Handlebars = require('handlebars');
const path = require('path');
const exphps = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');
const employeeController = require('./controllers/employeeController');
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphps({handlebars: allowInsecurePrototypeAccess(Handlebars), extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'hbs');
app.listen(3000, () => {
    console.log('Express server started at port: 3000');
});

app.use('/employee', employeeController);