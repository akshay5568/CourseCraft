import mongoose from "mongoose";


const CourseSchema = new mongoose.Schema({
    courseName:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"becomeInstructor"
    },
    description:{
        type:String,
    },
    thubmnail:{
        type:String,
    },
    enrolledStudents:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}],
    price:{
        type:Number,
    },
},{ timestamps: true })

export default CourseSchema;