import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import uploadMulter from "../middleware/uploadMulter.js";
import imagekit from "../utils/ImageKit.js";
import CourseUpload from "../models/CourseSchemaModel.js";
import VideoCourse from "../models/VideoCourseModel.js";
import { courseDataChecker } from "../utils/EmptyCourseDataChecker.js";
import { ThumbnailMissing } from "../middleware/ThumbnailMissing.js";

const router = express.Router();

router.post(
  "/course-create",
  refreshJWTChecker,
  uploadMulter.single("thumbnail"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Thumbnail missing" });
      }

      if (!req.body.courseDetails) {
        return res.status(400).json({ error: "Course details missing" });
      }

      const courseDetails = JSON.parse(req.body.courseDetails);

      const uploadThumbnail = await imagekit.upload({
        file: req.file.buffer,
        fileName: `course-thumbnail-${Date.now()}.jpg`,
        folder: "/CourseCraftCourseThumbnails",
      });
      
      const createdCourse = await CourseUpload.create({
        courseName: courseDetails.courseName,
        price: courseDetails.Price,
        description: courseDetails.Dec,
        thubmnailUrl:uploadThumbnail.url,
        thubmnailId:uploadThumbnail.fileId,
        createdBy: courseDetails.sellerData._id,
      });

      return res.status(201).json({
        message: "Course created successfully",
        thumbnailUrl: uploadThumbnail.url,
        courseDetails,
        createdCourse,
      });
    } catch (e) {
      console.error("BACKEND ERROR:", e);
      return res.status(500).json({ error: e.message });
    }
  }
);

router.post("/seller-courses", refreshJWTChecker, async (req, res) => {
  try {
    const { id } = req.body;
    const data = await CourseUpload.find({ createdBy: id });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.post("/course-full-page", refreshJWTChecker, async (req, res) => {
  try {
    const { id } = req.body;
    const courseDetails = await CourseUpload.findById(id);
    const videoCourseDetails = await VideoCourse.find({reletedCourse:id});
    res.send({ courseDetails, videoCourseDetails });
  } catch (r) {
    res.send("Error", r);
  }
});

router.patch(
  "/course-update",
  refreshJWTChecker,
  uploadMulter.single("thumbnail"),
  ThumbnailMissing,
  async (req, res) => {
    try {
      const updatedCourseDetailsFromFrontend = JSON.parse(
        req.body.updetedCourseDetails
      );
      const DataValid = courseDataChecker(updatedCourseDetailsFromFrontend);
      if(!DataValid) return res.send("Please update all the information...");

      const courseId = updatedCourseDetailsFromFrontend.courseId.id;
      const courseDetails = await CourseUpload.findById(courseId);
      if (!courseDetails) return res.send("Invalid course id");

      const updatedThumbnail = await imagekit.upload({
        file: req.file.buffer,
        fileName: `course-thumbnail-id:${courseId}-${Date.now()}.jpg`,
        folder: "/CourseCraftCourseThumbnails",
      });

      const updateCourseinfo = await CourseUpload.findByIdAndUpdate(courseId, {   
        courseName: updatedCourseDetailsFromFrontend.courseName,
        price: updatedCourseDetailsFromFrontend.price,
        description: updatedCourseDetailsFromFrontend.description,
        thubmnailUrl: updatedThumbnail.url,
        thubmnailId:updatedThumbnail.fileId,
      });
      res.send(updateCourseinfo);

    } catch (e) {
      res.send("Error", e);
    }
  }
);

export default router;
