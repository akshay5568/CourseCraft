import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import GoogleAuth from './Routes/GoogleAuth.js';
import NormalLogin from './Routes/NormalLogin.js';

const app = express();
app.use(cors());
app.use(express.json());


//For Routers
app.use('/', GoogleAuth);
app.use('/', NormalLogin);


mongoose.connect(process.env.Mongo_URL).then(() => {
    console.log("Mongo Connected");
}).catch((e) => {
    console.log("Something went wrong with mongoDB", e);    
})

app.listen(8080, () => {
    console.log("Port is liteining");
})
