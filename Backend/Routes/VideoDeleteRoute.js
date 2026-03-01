import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import VideoCourse from "../models/VideoCourseModel.js";
import cloudinary from "../utils/Cloudnary.js";
import coursesection from '../models/CourseSectionModel.js';
import { deleteVideoByUrlForCloudnary } from "../constants/constants.js";

const router = express.Router();

router.delete("/delete-video/:id", refreshJWTChecker, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const sectionVideos = await coursesection.findById(id);
    sectionVideos.videos = sectionVideos.videos.filter(video => video.videoUrl != data.videoLink.videoUrl); 
    await sectionVideos.save();

    const path = await deleteVideoByUrlForCloudnary(data.videoLink.videoUrl);


    const result  = await cloudinary.uploader.destroy(`${path}`,{
         resource_type:"video",
         folder:"course-videos"
    })

    if(result.result == 'ok') return res.send("Video Deleted...").status(200);
    res.send("Something went wrong....");
  } catch (error) {
    res.send("Error.", error);
  }    
});



export default router;
