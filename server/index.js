import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req,res)=>{
    res.send('Hello World');
    })




const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => console.log(` connected to data-base and Server Started at PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });