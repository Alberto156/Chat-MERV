const express = require("express");
const app = express();

//config 
const config = require('./config');
const router = require('./network/routes');
const db = require('./db');

//init DB
db(config.dbUrl);

//librays
const bodyParse = require('body-parser');

//librarys integrations
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : false}));
app.use(config.publicRoute , express.static('public'));

//init routes
router(app);

//server
app.listen(config.port , ()=>{
    console.log(`Servidor Iniciado ${config.host}:${config.port}`)
})

