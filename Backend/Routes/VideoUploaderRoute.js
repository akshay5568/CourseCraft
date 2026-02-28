import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import cloudinary from "../utils/Cloudnary.js";
import VideoCourse from "../models/VideoCourseModel.js";
import fileUpload from "express-fileupload";
import CourseUpload from "../models/CourseSchemaModel.js";
import coursesection from "../models/CourseSectionModel.js";

const router = express.Router();

router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./temp/",
    limits: { fileSize: 500 * 1024 * 1024 }, // 500MB
    abortOnLimit: true,
  })
);

router.get("/get-sinature", async (req, res) => {
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    console.log(timestamp);
    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
        folder: "course-videos",
      },
      process.env.API_SECRET
    );
    res.json({
      timestamp,
      signature,
      cloudName: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
    });
  } catch (error) {}
});

router.post("/video-uploder", refreshJWTChecker, async (req, res) => {
  try {
    console.log(req.body);
    console.log("Section ID:", req.body.sectionID);


    if(!req.body.cloudRes) return res.send("data not recived").status(401);


    const videoObject = {
      videoName:req.body.cloudRes.data.original_filename,
      public_id:req.body.cloudRes.data.public_id,
      duration:req.body.cloudRes.data.duration,
      format:req.body.cloudRes.data.format,
      signature:req.body.cloudRes.data.signature,
      videoUrl:req.body.cloudRes.data.url,
    }
    console.log(videoObject)
    const courseSection = await coursesection.findById(req.body.sectionID);  
     
    courseSection.videos.push(videoObject);
    await courseSection.save();

    res.send("Section id", req.body.sectionID);
    
  } catch (error) {
    console.error("FULL ERROR:", error);
    res.status(500).json({
      message: "Upload failed",
      error: error.message,
    });
  }
});

export default router;
