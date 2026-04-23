import mongoose from "mongoose";


const RazorPaySchema = mongoose.Schema({
    courseID:{type:mongoose.Schema.Types.ObjectId, ref:"CourseUpload"},
    userID:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    razorpay_order_id:{
        type:String,
    },
    watchedVideosId:[{type:String}]
})

export default RazorPaySchema;