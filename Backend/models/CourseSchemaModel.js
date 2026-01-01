import CourseSchema from "../Schema/CourseSchema.js";
import mongoose from "mongoose";


export default mongoose.model('CourseUpload', CourseSchema);