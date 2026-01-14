import mongoose from "mongoose";



const CartSchema = new mongoose.Schema({
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseUpload"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})



export default CartSchema;
