import mongoose from "mongoose";

const BecomeInstructor = new mongoose.Schema({
     name:{
         type:String,
     },
     email:{
        type:String,
     },
     normalAccountID:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"user",
     },
     courses:[{type:mongoose.Schema.Types.ObjectId,ref:"CourseUpload"}],
})

export default BecomeInstructor;