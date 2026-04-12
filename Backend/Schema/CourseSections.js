import mongoose from "mongoose"


const videoSchema = new mongoose.Schema({
    videoName:{
         type:String,
    },
    public_id:{
        type:String
    },
    duration:{
        type:Number
    },
    format:{
        type:String
    },
    signature:{
        type:String
    },
    videoUrl:{
        type:String
    },
    videoDescription:{
        type:String
    },
    isVideoWatched:{
        type:Boolean
    }
})


const CourseSection = new mongoose.Schema({
    sectionName:{type:String},
    sectionDesc:{type:String},
    courseId:{type:mongoose.Schema.Types.ObjectId, ref:"CourseUpload"},
    videos:[videoSchema]
}) 

export default CourseSection;