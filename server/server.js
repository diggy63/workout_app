const express = require("express");
const logger = require("morgan");
const cors = require("cors");

//loads .env into our server
require('dotenv').config()

//configures database using a config file
require("./config/database.js");


const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;


app.use("/test", require("./routes/api/test"));

app.listen(port, function(){
    console.log(`server Started on localhost:${port}`);
})