import mongoose from "mongoose";
import VideoCourseSchema from "../Schema/VideoCourseSchema.js";

export default mongoose.model("VideoCourse",VideoCourseSchema);