import express from 'express';
import { refreshJWTChecker } from '../middleware/middleware.js';
import uploadMulter from '../middleware/uploadMulter.js';
import imagekit from '../utils/ImageKit.js';
const router = express.Router();


router.post('/course-create',uploadMulter.single('thumbnail'), refreshJWTChecker ,async (req,res) => {
    try{
         const data = req.body;
         const uploadThumbnail = await imagekit.upload({
            file:req.file.buffer,
            fileName:`course-thumbnails-${Date.now()}.jpg`,
            folder:'/CourseCraftCourseThumbnails'
         })
         console.log("dmckdncm" + uploadThumbnail.url)
         res.send("OK Details recevied")
    }catch (e) {
         res.send(e);
    }
})


export default router;