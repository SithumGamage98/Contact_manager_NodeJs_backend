//create express server 
const express = require("express");
//import dotenv
const dotenv = require("dotenv").config();

//after installed express
const app = express();

//define the PORT
const port = process.env.PORT || 5000;

//add the middlewere

app.use("/api/contacts", require("./routes/contactRoutes"));

//create a listn for the "app" for listn PORT 5000
app.listen(port, ()=>{

    console.log(`Server running on port ${port}`);


});
