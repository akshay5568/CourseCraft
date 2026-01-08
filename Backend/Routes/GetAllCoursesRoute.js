import express from 'express';
import CourseUpload from "../models/CourseSchemaModel.js";

const router = express.Router();


router.get('/courses',async (_,res) => {
     try {
        const allCourse = await CourseUpload.find({});   
        console.log(allCourse)   
        res.send(allCourse);
     } catch (error) {
        res.send("Error", error)
     }
})


export default router;
