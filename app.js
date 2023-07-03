const express = require("express") ;
require("dotenv").config();
const dbConnect = require("./config/db.js");
const app = express();
const userRoutes = require("./Routes/userRoutes.js");


app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;

dbConnect();

app.use("/" , userRoutes);

module.exports = app ;