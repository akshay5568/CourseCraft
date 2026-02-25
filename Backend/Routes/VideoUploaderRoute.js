import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import cloudinary from "../utils/Cloudnary.js";
import VideoCourse from "../models/VideoCourseModel.js";
import fileUpload from "express-fileupload";
import CourseUpload from '../models/CourseSchemaModel.js';
import coursesection from '../models/CourseSectionModel.js';

const router = express.Router();

router.use(fileUpload({ useTempFiles: true }));


router.post("/video-uploder", refreshJWTChecker, async (req, res) => {
  try {
    const id = req.body.id;
    if (!req.files || !req.files.video) {
      return res.status(400).json({ message: "Video is required" });
    }
    const file = req.files.video;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "video",
    });


    console.log("sectionID", req.body.sectionID);
    const sections = await coursesection.findByIdAndUpdate(req.body.sectionID, {
       $push:{videos:result.secure_url}
    });

    const isAlreadyCreated = await VideoCourse.findOne({ reletedCourse: id });
    if (!isAlreadyCreated) {
      const uplodedVideo = await VideoCourse.create({
        reletedCourse: id,
        videos: [result.secure_url],
      });
      console.log(uplodedVideo);
      const courseDetailUpdated = await CourseUpload.findByIdAndUpdate(id,{
       videoDBId:uplodedVideo?._id
     })
      res.send(uplodedVideo);
    } else {
      isAlreadyCreated.videos.push(result.secure_url);
      isAlreadyCreated.save();
      res.send(isAlreadyCreated);
    }
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error });
  }
});

export default router;
