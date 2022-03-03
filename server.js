const bodyParser = require('body-parser');
const express = require('express');
const serverConfig = require('./configs/server.config');

const app = express();

//Registering body-parser middleware
app.use(bodyParser.json());

const db = require("./models");


db.sequelize.sync({force:true}).then(()=>{
    console.log("table dropped and recreated");
}).catch(err=>{
    console.log(err.message);
})


require('./routes/book.route')(app);

app.listen(serverConfig.PORT,()=>{
    console.log("Application started on port no :",serverConfig.PORT );
})