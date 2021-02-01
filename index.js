const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const engines = require('consolidate');
const path = require('path');

const {api_port} = require("./configuracoes.js")
 
//Routes
const paymentsRoute = require('./src/routes/paymentsRoute');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//For render views
app.engine("ejs", engines.ejs);
app.set('views', path.join(__dirname, './src/views'));
app.set("view engine", "ejs");

//Payments route
app.use('/payments',paymentsRoute);

app.listen(api_port || 3000, function(err){
    if(err) console.error(err);
    console.log(`API INICIADA NA PORTA ${api_port || 3000}`) 
});