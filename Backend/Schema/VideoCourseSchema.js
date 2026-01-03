import mongoose from "mongoose";


const VideoCourseSchema = new mongoose.Schema({
     reletedCourse:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseUpload"
     },
     videos:[{type:String}]
},{timestamps:true})

export default VideoCourseSchema;