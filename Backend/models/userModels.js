import mongoose from "mongoose";
import userSchema from "../Schema/userSchema.js";

export default mongoose.model('user',userSchema);