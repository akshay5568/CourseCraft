import mongoose from "mongoose";


const CourseSchema = new mongoose.Schema({
    courseName:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    videos:[{type:String}],
    likes:[{tpye:mongoose.Schema.Types.ObjectId}],
    description:{
        type:String,
    },
    thubmnail:{
        type:String,
    },
    price:{
        type:Number,
    },
    purchaseBy:[{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
})

export default CourseSchema;