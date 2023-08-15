const dotenv = require('dotenv');
const express = require('express');

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:"true"}));


//config.env 
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

//connecting database 
require('./db/connection');

//linking router
app.use(require('./router/auth'));

app.listen(PORT, (req, res) => {
    console.log(`server running at port ${PORT}`);
})