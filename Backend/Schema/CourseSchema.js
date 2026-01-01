import mongoose from "mongoose";


const CourseSchema = new mongoose.Schema({
    courseName:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    description:{
        type:String,
    },
    thubmnail:{
        type:String,
    },
    price:{
        type:Number,
    },
    purchasedUsers:[{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
},{ timestamps: true })

export default CourseSchema;