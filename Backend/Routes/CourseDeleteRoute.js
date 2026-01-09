import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import CourseUpload from "../models/CourseSchemaModel.js";
import imagekit from "../utils/ImageKit.js";
import VideoCourse from '../models/VideoCourseModel.js';

const router = express.Router();
router.delete("/delete-course/:id", refreshJWTChecker, async (req, res) => {
  try {
    const { id } = req.params;
    const courseDetails = await CourseUpload.findById(id);
    if (courseDetails?.thubmnailId) {
      await imagekit.deleteFile(courseDetails?.thubmnailId);
    }
    const videosAboutCourse = await VideoCourse.findOneAndDelete({reletedCourse:id});
    const deltedCourse = await CourseUpload.findByIdAndDelete(id);   
    res.send({deltedCourse,videosAboutCourse});
  } catch (error) {
    res.send("Error", error);
  }
});

export default router;
