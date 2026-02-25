import mongoose from "mongoose"

const CourseSection = new mongoose.Schema({
    sectionName:{type:String},
    sectionDesc:{type:String},
    courseId:{type:mongoose.Schema.Types.ObjectId, ref:"CourseUpload"},
    videos:[{type:String}]
}) 

export default CourseSection;