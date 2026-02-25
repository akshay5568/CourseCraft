import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import VideoCourse from "../models/VideoCourseModel.js";
import cloudinary from "../utils/Cloudnary.js";
import coursesection from '../models/CourseSectionModel.js';

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
    sectionVideos.videos = sectionVideos.videos.filter(video => video != data.videoLink); 
    sectionVideos.save();



    const urlObj = new URL(data.videoLink);
    let path = urlObj.pathname.split("/upload/")[1];
    // remove version if present
    path = path.replace(/v[0-9]+\//, "");
    // remove extension
    path = path.replace(/\.[^/.]+$/, "");

    await cloudinary.uploader.destroy(`${path}`,{
         resource_type:"video"
    })
    // videoDetails.save();
    res.send(sectionVideos);
  } catch (error) {
    res.send("Error.", error);
  }
});



export default router;
