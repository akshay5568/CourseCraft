import mongoose from "mongoose";
import CourseSchema from "../Schema/CourseSchema.js";

export default mongoose.model("VideoCourse",CourseSchema);