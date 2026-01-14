import mongoose from "mongoose";
import CartSchema from '../Schema/CartSchema.js';


export default mongoose.model("cart",CartSchema);

