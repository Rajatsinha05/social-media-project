const express =require('express');
const dbconnect = require('./Config/db');
require('dotenv').config()
const app = express();
let Port=process.env.port ||8080

app.get('/', (req, res) => {
    res.status(200).send("working");
})

app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);
    dbconnect()
})