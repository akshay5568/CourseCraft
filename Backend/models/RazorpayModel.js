import mongoose from "mongoose";
import RazorPaySchema from '../Schema/RazorPaySchema.js';


export default mongoose.model("RazorPay",RazorPaySchema);