import { refreshJWTChecker } from '../middleware/middleware.js';
import {genrateMCQ} from './AI/aiService.js';
import express from 'express';
import AIMcqsSchema from "../models/AIMCQSModel.js";

const router = express.Router();

router.post('/genrate-mcq', async (req,res) => {
    try {
        const {transcript} = req.body;
        console.log("Trans",transcript);
        const mcqs = await genrateMCQ(transcript);
        console.log(mcqs);
        res.send(mcqs).status(201);
    } catch (error) {
        res.send("Something went wrong").status(401);
    }
})



router.post("/ai/mcq-answer",refreshJWTChecker, async (req,res) => {           
    try {
        const {userAnswer,AiMcqs,courseID,userID} = req.body;                                                           
        console.log(userAnswer,AiMcqs,courseID,userID);
        const userAnswer1 = Object.values(userAnswer);
         
        const rightAnswer = AiMcqs.filter((mcq,index) => mcq.answer == userAnswer1[index]);
        console.log(rightAnswer);
        
        const wrongAnswer = AiMcqs.filter((mcq,index) => mcq.answer != userAnswer1[index]);
        console.log(wrongAnswer);

        const AiMcqsFinalResult =  await AIMcqsSchema.create({
            courseID:courseID,
            userID:userID,
            rightAnswers:rightAnswer,
            wrongAnswers:wrongAnswer,
            AIQuesAns:AiMcqs,
            usersAnswers:userAnswer1
        })
        res.send({AiMcqsFinalResult}).status(201);
    } catch (error) {
        res.send("Error",error).status(401);
    }
})



router.get("/users-mcq", refreshJWTChecker, async (req,res) => {
    try {
        const {userID,courseID} = req.query;
        if(!userID && !courseID) return res.send("Something went wrong...").status(401);
        const temp = await AIMcqsSchema.find({userID});
        const allMcq = temp.filter(mcq => mcq.courseID == courseID);
        res.send(allMcq).status(201);
    } catch (error) {
        res.send(error).status(401);
    }
})

export default router;
