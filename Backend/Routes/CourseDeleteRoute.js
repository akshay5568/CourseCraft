import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import CourseUpload from "../models/CourseSchemaModel.js";
import imagekit from "../utils/ImageKit.js";
import VideoCourse from '../models/VideoCourseModel.js';
import coursesection from '../models/CourseSectionModel.js';
import { deleteVideoByUrlForCloudnary } from "../constants/constants.js";
import cloudinary from "../utils/Cloudnary.js";
import { DeleteAllCourseVideosUsingDeleteCourseButton } from "../constants/constants.js";

const router = express.Router();
router.delete("/delete-course/:id", refreshJWTChecker, async (req, res) => {
  try {
    const { id } = req.params;
    const courseDetails = await CourseUpload.findById(id);
    // if (courseDetails?.thubmnailId) {
    //   await imagekit.deleteFile(courseDetails?.thubmnailId);
    // }

    const courseSectionDeatilas = await coursesection.find({courseId:id});

    const result = await DeleteAllCourseVideosUsingDeleteCourseButton(courseSectionDeatilas);               
    console.log(result);
    // const videosAboutCourse = await VideoCourse.findOneAndDelete({reletedCourse:id});
    // const deltedCourse = await CourseUpload.findByIdAndDelete(id);   
    // res.send({deltedCourse,videosAboutCourse,courseSectionDeatilas});
    res.send("Done");
  } catch (error) {
    res.send("Error", error);
  }
});



router.delete("/section/:id", refreshJWTChecker, async (req,res) => {
   try {
      const {id} = req.params;
      console.log(id);
      const sectionDetails = await coursesection.findById(id);
      console.log("Course id : " , req.body);
      const {courseID} = req.body;

      const courseDetails = await CourseUpload.findById(courseID);
      courseDetails.sectionIds = courseDetails.sectionIds.filter(sectionsid => sectionsid != id);
      await courseDetails.save();

      for(let i=0; i<sectionDetails.videos.length; i++){
          const publicId = await deleteVideoByUrlForCloudnary(sectionDetails.videos[i]);
          console.log("public id:", publicId);
          await cloudinary.uploader.destroy(publicId,{
              resource_type:"video",
              invalidate: true
          }).then(res => console.log(res));
      }
      await sectionDetails.save();
      await coursesection.findByIdAndDelete(id);
      res.send("Course section has been deleted").status(201);
   } catch (error) {
      console.log(error);
   }
})

export default router;
