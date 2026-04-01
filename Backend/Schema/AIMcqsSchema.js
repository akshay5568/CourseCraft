import mongoose from "mongoose";


const AIMcqsSchema = new mongoose.Schema({
    userID:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"user"
    },
    courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseUpload"
    },
    AIQuesAns:[],
    rightAnswers:[],
    wrongAnswers:[],
    usersAnswers:[]
})


export default AIMcqsSchema;
