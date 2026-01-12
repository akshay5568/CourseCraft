import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import VideoCourse from "../models/VideoCourseModel.js";
import cloudinary from "../utils/Cloudnary.js";
const router = express.Router();
router.delete("/delete-video/:id", refreshJWTChecker, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(data, id);
    const videoDetails = await VideoCourse.findById(id);
    videoDetails.videos = videoDetails.videos.filter(
      (video) => video !== data.videoLink
    );

    const urlObj = new URL(data.videoLink);
    let path = urlObj.pathname.split("/upload/")[1];
    // remove version if present
    path = path.replace(/v[0-9]+\//, "");
    // remove extension
    path = path.replace(/\.[^/.]+$/, "");

    await cloudinary.uploader.destroy(`${path}`,{
         resource_type:"video"
    })

    console.log(path)
    videoDetails.save();
    res.send(videoDetails);
  } catch (error) {
    res.send("Error.", error);
  }
});
export default router;
