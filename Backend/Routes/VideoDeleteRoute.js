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
    console.log(data, id);
    // const videoDetails = await VideoCourse.findById(id);
    // videoDetails.videos = videoDetails.videos.filter(
    //   (video) => video !== data.videoLink
    // );

    const sectionVideos = await coursesection.findById(id);
    console.log(sectionVideos);
    sectionVideos.videos = sectionVideos.videos.filter(video => video.videoUrl != data.videoLink.videoUrl); 
    await sectionVideos.save();


    const path = await deleteVideoByUrlForCloudnary(data.videoLink);
    console.log(path);
    await cloudinary.uploader.destroy(`${path}`,{
         resource_type:"video",
         folder:"course-videos"
    })
    
    res.send(sectionVideos);
  } catch (error) {
    res.send("Error.", error);
  }    
});



export default router;
