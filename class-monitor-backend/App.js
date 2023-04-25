const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(bodyParser.json())
const studentRoute=require('./routes/studentRoute');
const connectDb = require("./config/dbConnection");
connectDb();
app.use("/api/class",studentRoute);
app.listen(5001,()=>{
    console.log("Server started at 5001");
})