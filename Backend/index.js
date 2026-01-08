import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import GoogleAuth from './Routes/GoogleAuth.js';
import NormalLogin from './Routes/NormalLogin.js';
import refreshLoginHandle from './Routes/refreshLoginHandle.js';
import BecomeInstructor from './Routes/BecomeInstrutor.js';
import DeleteSellerRoute from './Routes/DeleteSellerRoute.js';
import CourseUploadRoute from './Routes/CourseUploadRoute.js';
import CourseDeleteRoute from './Routes/CourseDeleteRoute.js';
import GetAllCoursesRoute from './Routes/GetAllCoursesRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//For Routers
app.use('/', GoogleAuth);
app.use('/', NormalLogin);
app.use('/',refreshLoginHandle);   
app.use('/',BecomeInstructor);
app.use('/',DeleteSellerRoute);
app.use('/',CourseUploadRoute);
app.use('/',CourseDeleteRoute);
app.use('/',GetAllCoursesRoute)


mongoose.connect(process.env.Mongo_URL).then(() => {
    console.log("Mongo Connected");
}).catch((e) => {
    console.log("Something went wrong with mongoDB", e);    
})

app.listen(8080, () => {
    console.log("Port is liteining");
})
